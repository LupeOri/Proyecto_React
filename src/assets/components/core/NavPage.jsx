import { Link } from "react-router-dom";

import React from "react";

function NavPage() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <img className="logo" src="/img/logo-azul.png" alt="logo" />
        </li>
        <li>
          <h1 className="home-title">
            Dale like a tus favoritos y descubre tu proximo show
          </h1>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
