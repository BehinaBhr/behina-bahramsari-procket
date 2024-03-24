import AddButton from "../AddButton/AddButton";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchAndAddButtonHeader.scss";

// For displaying search input and add button on header of table
export function SearchAndAddButtonHeader({ title, add_button_target, add_button_link }) {
  return (
    <>
      <section className="search_and_add_button_header">
        <h1 className="search_and_add_button_header__title">{title}</h1>
        <div className="search_and_add_button_header__actions">
          <SearchInput />
          <AddButton target={add_button_target} link_to={add_button_link} />
        </div>
      </section>
    </>
  );
}
