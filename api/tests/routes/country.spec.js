const { expect } = require("chai");
const session = require("supertest-session");
const server = require("../../src/app.js");
const { Country, Activity, conn } = require("../../src/db.js");
const agent = session(server);

const country = {
  alpha3Code: "NRU",
  name: "Nauru",
  image: "https://restcountries.eu/data/nru.svg",
  region: "Oceania",
  subregion: "Micronesia",
  area: 21,
  population: 10084,
  capital: "Yaren",
};

describe("Country routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("GET /countries", () => {
    it("Should get 200", (done) => {
      agent.get("/countries").expect(200), done();
    });
  });
  describe("GET /countries/:alpha3Code", () => {
    it("GET /countries/USA", () => agent.get("/countries/USA").expect(200));
    it("GET /countries/ARG", () => agent.get("/countries/ARG").expect(200));
  });
});

describe("Activity routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Activity.sync({ force: true }).then(() =>
      Activity.create({
        name: "Tango",
        difficulty: "1",
        duration: "10 months",
        country: "Argentina",
        season: "summer",
      })
    )
  );
  describe("POST /activities", () => {
    it("should get 200", (done) => {
      agent
        .post("/activity")
        .send({
          name: "sky",
          difficulty: "1",
          duration: "10",
          country: "Argentina",
          season: "Summer",
        })
        .expect(200),
        done();
    });
    it("responds with 400 if it's not an object", () => {
      agent.post("/activity").send([]).expect(400);
    });
  });
});
