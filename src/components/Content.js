import Country from "./country/Country";

function Content({ countries }) {
  return (
    <div className="content-container">
      <ul className="content-container-list">
        {countries.map((country) => (
          <li key={country.cca2}>
            <Country country={country} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
