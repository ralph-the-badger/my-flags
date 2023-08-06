function SelectCountry({ onHandleSelect }) {
  return (
    <div className="select-form-container">
      <form onChange={(e) => onHandleSelect(e)}>
        <label htmlFor="select-country">
          Choose continent:{" "}
          <select id="select-country" name="select-country">
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default SelectCountry;
