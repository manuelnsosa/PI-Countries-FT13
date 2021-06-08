const { Router } = require("express");
const axios = require("axios");
const { Country, Activity, country_activity } = require("../db.js");
const { Op } = require("sequelize");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries/:code", async (req, res, next) => {
  let code = req.params.code;
  if (typeof code === "string" && code.length === 3) {
    code = code.toUpperCase();
    const country = Country.findOne({
      where: { alpha3Code: code },
      include: { model: Activity },
    });
    country
      .then((result) => {
        if (!result) {
          return res.send("The country does not exist");
        }
        res.send(result);
      })
      .catch((error) => next(error));
  } else {
    return res.send("The code should have 3 letters");
  }
});

router.get("/countries", async (req, res) => {
  var arr = [];
  const name = req.query.name;
  if (arr.length === 0) {
    arr = await axios.get("https://restcountries.eu/rest/v2/all");
  }
  const apiCountries = arr.data;

  apiCountries.forEach(async (e) => {
    const obj = {
      alpha3Code: e.alpha3Code,
      name: e.name,
      image: e.flag,
      region: e.region,
      subregion: e.subregion,
      area: e.area,
      population: e.population,
      capital: e.capital,
    };
    await Country.findOrCreate({
      where: obj,
    }).catch((err) => {
      console.log(err);
    });
  });

  if (name) {
    try {
      let foundCountry = await Country.findAll({
        //  Country.get ?? .get is not a function
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },

        include: { model: Activity },
      });
      return res.send(foundCountry);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      let foundCountry = await Country.findAll({
        /* limit: 10,
        offset: req.query.page * 10, */
        order: [[req.query.category, req.query.order]],
        include: { model: Activity },
      });
      return res.send(foundCountry);
    } catch (err) {
      console.log(err);
    }
  }
});

router.post("/activity", async (req, res, next) => {
  let data = req.body;
  let countries = data.countries;
  let countriesArray = countries.split(",").map(function (value) {
    return value.trim();
  });
  //.replace(/ +/g, "") => NO! No funciona para países con más de 2 palabras
  let obj = {
    name: data.name,
    difficulty: data.difficulty,
    duration: data.duration,
    season: data.season,
  };
  //Chequeo si existe la act, si no la creo
  await Activity.findOrCreate({
    where: obj,
  }).catch((err) => {
    console.log(err);
  });

  // la busco en la tabla
  const foundActivity = Activity.findOne({
    where: {
      name: data.name,
    },
  });
  //una vez encontrada, voy a recorrer el array creado con países
  //voy a buscar a cada uno en la db
  foundActivity.then((activity) => {
    countriesArray.forEach((e) => {
      const foundCountry = Country.findOne({
        where: {
          name: e,
        },
      });
      // luego a la actividad le agrego el country de cada posicion del array
      foundCountry.then((country) => {
        activity
          .addCountry([country])
          .then(() => {
            //consologueo cuando se hace la conexión entre tablas
            console.log("connection done");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    });
  });
  //devuelvo la nueva actividad creada
  return res.send({ ...obj, countries });
});

module.exports = router;
