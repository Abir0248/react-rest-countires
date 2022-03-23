import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, population, region, name, flags } = props.country;
  return (
    <div className="Country">
      <h2>Country Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <h3>Area: {area}</h3>
      <h3>Population:{population}</h3>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
