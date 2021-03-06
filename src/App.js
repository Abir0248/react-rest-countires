import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Countries from "./components/Countries/Countries";
// import Person from "./components/Person/Person";
// import Header from "./components/Header/Header";
// import "./components/Header/Header.css";

function App() {
  return (
    <div className="App bg-secondary">
      {/* <LoadCountries></LoadCountries> */}
      {/* <Header></Header> */}

      <Countries></Countries>
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all
//     `)
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div>
//       <h3>
//         {/* Name: <span style={{ fontSize: "16px" }}>{props.name}</span> */}
//         Name: {props.name}
//       </h3>
//       <h4>Population: {props.population}</h4>
//     </div>
//   );
// }

export default App;
