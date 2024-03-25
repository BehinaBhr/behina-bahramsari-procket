import "./EditAndBackButtonHeader.scss";

import ArrowBack from "../../components/ArrowBack/ArrowBack";
import EditButton from "../../components/EditButton/EditButton";

export default function EditAndBackButtonHeader({
  title,
  edit_button_to,
  back_button_to,
}) {
  return (
    <section className="edit_and_back_button_header">
      <div className="edit_and_back_button_header__section">
        <ArrowBack to={back_button_to} />
        <div className="edit_and_back_button_header__name">{title}</div>
      </div>
      <div className="edit_and_back_button_header__section">
        <EditButton to={edit_button_to} />
      </div>
    </section>
  );
}
