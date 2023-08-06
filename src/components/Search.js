import SearchCountry from "./search/SearchCountry";
import SelectCountry from "./search/SelectCountry";

function Search({ onHandleSelect, onHandleSearchCountry }) {
  return (
    <div className="search-container">
      <SelectCountry onHandleSelect={onHandleSelect} />
      <SearchCountry onHandleSearchCountry={onHandleSearchCountry} />
    </div>
  );
}

export default Search;
