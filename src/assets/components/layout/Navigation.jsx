import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../../../public/img/Logo.png";

function Navigation() {
  const [searchElement, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleSearch() {
    setSearchResults("resultado obtenido de api");
  }
  return (
    <div className="header">
      <img src={logo} />
      <input
        type="text"
        placeholder="Escribe lel nombre de la serie que desear buscar..."
        value={searchElement}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar serie</button>

      <Outlet />
    </div>
  );
}

export default Navigation;
