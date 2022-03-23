import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all
    `)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="countries  container">
      <h2 id="top-text">World Countries</h2>

      {/* {countries.map((country) => (
        <Country
          name={country.name.common}
          population={country.population}
          area={country.area}
        ></Country>
      ))} */}
      {/* <div className="countries-container row"> */}
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
