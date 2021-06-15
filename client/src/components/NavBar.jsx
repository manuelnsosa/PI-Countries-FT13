import React from "react";
import Nav from "./NavBar.js";

export function NavBar() {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder="Ciudad..." />
      <button type="submit" value="Agregar" onClick={() => alert("alert")}>
        AGREGAR
      </button>
    </div>
  );
}
export default NavBar;
