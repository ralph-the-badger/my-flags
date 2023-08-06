import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";
import Loading from "./UI/Loading";
import Error from "./UI/Error";

import { filterCountries } from "./helpers/filterFunction";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [searchedCountry, setSearchedCountry] = useState("");

  function handleSelect(e) {
    e.preventDefault();
    setSelectedCountry(e.target.value);
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    setSearchedCountry(e.target.value);
  }

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        if (response.statusText !== "OK") {
          throw new Error("Something went wrong with fetching countries data!");
        }
        if (response.status === 200) {
          setCountries(response.data);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountriesData();
  }, []);

  const filteredCountries = filterCountries(
    countries,
    selectedCountry,
    searchedCountry
  );

  return (
    <div className="App">
      <Header />
      <Search
        onHandleSelect={handleSelect}
        onHandleSearchCountry={handleSearchCountry}
      />
      {error && <Error message={error} />}
      {isLoading && <Loading />}
      {!isLoading && !error && <Content countries={filteredCountries} />}
    </div>
  );
}

export default App;
