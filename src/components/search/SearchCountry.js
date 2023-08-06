function SearchCountry({ onHandleSearchCountry }) {
  return (
    <div className="search-form-container">
      <form onChange={(e) => onHandleSearchCountry(e)}>
        <label htmlFor="search-country">
          Search state:{" "}
          <input type="text" name="search-country" id="search-country" />
        </label>
      </form>
    </div>
  );
}

export default SearchCountry;
