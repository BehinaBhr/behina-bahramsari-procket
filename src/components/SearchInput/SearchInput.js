import "./SearchInput.scss";

//search bar component 
function SearchInput() {
  return (
    <form className="search">
      <input
        type="text"
        id="search-bar"
        name="searchBar"
        placeholder="Search..."
        className="search__input"
      />
    </form>
  );
}

export default SearchInput;
