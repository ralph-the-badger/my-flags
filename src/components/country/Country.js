function Country({ country }) {
  const population = country.population.toLocaleString("de-DE");
  const osmLink = country.maps.openStreetMaps;
  return (
    <div className="country">
      <img src={country.flags.png} alt={country.name.official} />
      <h2>{country.name.official}</h2>
      <p>
        <strong>Capital</strong>: {country.capital}
      </p>
      <p>
        <strong>Continent</strong>: {country.continents[0]}
      </p>
      <p>
        <strong>Population</strong>: {population}
      </p>
      <p>
        <strong>Map</strong>: Show{" "}
        <a href={`${osmLink}`} target="_blank" rel="noopener noreferrer">
          OpenStreetMap
        </a>
      </p>
    </div>
  );
}

export default Country;
