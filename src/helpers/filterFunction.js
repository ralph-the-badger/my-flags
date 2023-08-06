export const filterCountries = (
  countries,
  filteredContinent,
  searchedCountry
) => {
  const filteredData = countries.filter((country) => {
    if (country.continents[0] === filteredContinent) {
      if (
        country.name.official
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      ) {
        return country;
      }
    } else if (filteredContinent === "All") {
      if (
        country.name.official
          .toLowerCase()
          .includes(searchedCountry.toLowerCase())
      ) {
        return country;
      }
    }
  });
  return filteredData;
};
