import AddButton from "../AddButton/AddButton";
import SearchInput from "../SearchInput/SearchInput";
import "./SearchAndAddButtonHeader.scss";
import { Link } from "react-router-dom";

// For displaying search input and add button on header of table
export function SearchAndAddButtonHeader({ title, button_text, link_to }) {
  return (
    <>
      <section className="search_and_add_button_header">
        <h1 className="search_and_add_button_header__title">{title}</h1>
        <div className="search_and_add_button_header__actions">
          <SearchInput />
          <Link to={link_to}>
            <AddButton
              className="search_and_add_button_header__add-button"
              message={button_text}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
