import React from "react";
import Searcher from "./Searcher";

function HeaderPage() {
  return (
    <>
      <div className="header-container">
        <div className="box-logo">
          <img className="logo" src="/img/logo-azul.png" alt="logo" />
        </div>
        <div className="box-searcher">
          <Searcher />
        </div>
      </div>
    </>
  );
}

export default HeaderPage;
