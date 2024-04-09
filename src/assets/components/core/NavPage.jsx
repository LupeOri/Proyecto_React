import { Link } from "react-router-dom";

import React from "react";

function NavPage() {
  return (
    <nav>
      <div className="link-home">
        <Link to="/">HOME</Link>
      </div>
      <div className="logo-title">
        <img className="logo" src="/img/likeurshow.png" alt="logo" />

        <h1 className="home-title">
          <p>Descubre tu proximo show segun los likes de la comunidad... </p>
          <p>Unete y deja tu like &#128077; &#128078;</p>
        </h1>
      </div>
    </nav>
  );
}

export default NavPage;
