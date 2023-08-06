import Country from "./country/Country";

function Content({ countries }) {
  return (
    <div className="content-container">
      {countries.length === 0 ? (
        <p className="no-countries">
          There are no countries that match your filter or your search. Please
          check your spelling.
        </p>
      ) : (
        <ul className="content-container-list">
          {countries.map((country) => (
            <li key={country.cca2}>
              <Country country={country} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Content;
