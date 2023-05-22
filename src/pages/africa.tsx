import { useEffect, useState } from "react";
import UserIcon from "./../assets/user.svg";
import RoadIcon from "../assets/RoadIcon";
import RoadIconLeft from "../assets/RoadIconLeft";
type AfricaType = {
  name: AfricaNameType;
  maps: MapsType;
  population: PopulationType;
  borders: string[];
  car: CarType;
  flags: FlagsType;
};
type AfricaNameType = {
  common: string;
  official: string;
};
type MapsType = {
  googleMaps: string;
  openStreetMaps: string;
};
type CurrencyType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};
type PopulationType = {
  population: number;
};
type CarType = {
  side: "left" | "right";
  signs: string[];
};
type FlagsType = {
  png: string;
  alt: string;
};

const Africa = () => {
  const [country, setCountry] = useState<AfricaType[]>([]);

  const getCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/africa`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setCountry(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>Countries in Africa</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Map</th>
            <th>Population</th>
            <th>Bordering countries</th>
            <th>Cars</th>
          </tr>
        </thead>
        <tbody>
          {country.map((country: AfricaType) => {
            return (
              <tr>
                <td>{country.name.common}</td>
                <td>
                  <img src={country.flags.png} alt={country.flags.alt} />
                </td>
                <td>
                  <a href={country.maps.googleMaps}>Google Maps View</a>
                </td>
                <td>
                  <>
                    <img
                      src={UserIcon}
                      alt="User icon.svg"
                      height={20}
                      width={20}
                    />
                    {country.population}
                  </>
                </td>
                <td>{country.borders + ", "}</td>
                <td>
                  <>
                    {country.car.side === "left" ? (
                      <RoadIconLeft />
                    ) : (
                      <RoadIcon />
                    )}
                    {country.car.signs.map((CountrySign) => {
                      return CountrySign + ", ";
                    })}
                  </>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Africa;
