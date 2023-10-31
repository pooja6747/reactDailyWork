import { useEffect, useState } from "react";
import { Countries } from "../Data/Countries";


export default function App() {
  // state to store the value of the country
  const [country, setCountry] = useState([]);

  useEffect(() => {
    console.log(country[0]);
    console.log(country[1]);
  }, [country]);

  return (
    <div className="App">
      {/* 1st DropDown */}
      <select
        value={country}
        onChange={(e) => {
          console.log(e.target.value);
          setCountry([e.target.value]);
        }}
      >
        {Countries.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* 2nd DropDown */}

      <select>
        {Countries[country] &&
          Countries[country].cities.map((item, index) => {
            return <option value={index}>{item}</option>;
          })}
      </select>
    </div>
  );
}