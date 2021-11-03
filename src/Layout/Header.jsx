import "./Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="Encabezado">
      <div id="contenedorBuscadorHeader">
        <input type="text" name="buscador" id="buscador" placeholder="Buscar" />
        <FontAwesomeIcon icon={faSearch} id="IconoBuscador" />
        <FontAwesomeIcon />
      </div>
    </header>
  );
};

export default Header;
