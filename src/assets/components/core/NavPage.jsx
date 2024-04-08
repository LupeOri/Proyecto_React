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
          <Link to="/movies">MOVIES</Link>
        </li>
        <li>
          <Link to="/series">SERIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavPage;
