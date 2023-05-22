import { useEffect, useState } from "react";
type CountryType = {
  name: CountryNameType;
  flags: FlagsType;
  currencies: CurrencyType;
  capital: string[];
  area: number;
  borders: string[];
  id: number;
};
type CountryNameType = {
  common: string;
  official: string;
};
type FlagsType = {
  alt: string;
  png: string;
};
type CurrencyType = {
  [currency: string]: {
    name: string;
    symbol: string;
  };
};

const Europe = () => {
  const [country, setCountry] = useState<CountryType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [dataBySearch, setDataBySearch] = useState<CountryType[]>([]);

  const getCountries = () => {
    fetch(`https://restcountries.com/v3.1/region/europe`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setCountry(jsonData);
      })
      .catch((error) => console.error(error));
  };
  const handleSearch = (searchValue: string) => {
    fetch(`https://restcountries.com/v3.1/region/search?query=${searchValue}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setSearchData(jsonData);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div>
      <h1>Search</h1>
      <div>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={() => handleSearch(searchValue)}>Search</button>
      </div>
      <div>
        {dataBySearch.length > 0 ? (
          dataBySearch.map((country: CountryType) => {
            return <div key={country.id}>{country.name.common}</div>;
          })
        ) : (
          <div>
            Nisam pronašao niti jednu državu s imenom: {searchValue}, probaj
            upisati neku poznatiju
          </div>
        )}
      </div>
      <h1>Countries in Europe</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Flag</th>
            <th>Currency</th>
            <th>Capital city</th>
            <th>Area</th>
            <th>Bordering countires</th>
          </tr>
        </thead>
        <tbody>
          {country.map((country: CountryType) => {
            return (
              <tr>
                <td>{country.name.common}</td>
                <td>
                  <img src={country.flags.png} alt={country.flags.alt} />
                </td>
                <td>
                  {Object.keys(country.currencies).map((currency) => {
                    return country.currencies[currency].symbol;
                  })}
                </td>
                <td>
                  {country.capital.map((capital) => {
                    return capital;
                  })}
                </td>
                <td>{country.area}</td>
                <td>{country.borders}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Europe;
function setSearchData(jsonData: any) {
  throw new Error("Function not implemented.");
}
