import React, { useState, useEffect } from "react";
import axios from "axios";
import CardSeries from "./CardSeries";

function ListaSeries() {
  const [series, setSeries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        const dataSeries = response.data.map((serie) => ({
          name: serie.name,
          language: serie.language,
          officialSite: serie.officialSite,
          image: serie.image.original.replace(/"/g, ""),
          url: serie.url,
        }));
        setSeries(dataSeries);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const busquedaSeries = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSeries = series.filter((serie) =>
    serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="input-series">
        <div>
          <input
            type="text"
            placeholder="Escriba el nombre de la serie..."
            value={searchTerm}
            onChange={busquedaSeries}
          />
        </div>
        <div className="container-series">
          {filteredSeries.map((serie, index) => (
            <div className="div-everycard">
              <CardSeries key={index} serie={serie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaSeries;
