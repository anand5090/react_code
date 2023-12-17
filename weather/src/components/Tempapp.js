import React, { useEffect, useState } from "react";
import "../App.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("goa");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10ca9bd218a8939f7f58a9339f7f2e10`;
      const response = await fetch(url);
      console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputfield">
          <input
            type="search"
            className="inputdata"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>

        {!city ? (
          <p>Data not Found</p>
        ) : (
          <div>
            <div className="info">
              <h1 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h1>

              <h2 className="temp">{city.temp}°Cel</h2>

              
              <h3 className="tempmin_max"> Min :{city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
