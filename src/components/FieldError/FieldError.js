import ErrorIcon from "../../assets/images/error-24px.svg";
import "./FieldError.scss";

// Error message shows below each form field in the case of errors
function FieldError({ message = "This field is required" }) {
  return (
    <div className="empty-field">
      <img className="empty-field__icon" src={ErrorIcon} alt="error icon" />
      <span className="empty-field__text">{message}</span>
    </div>
  );
}

export default FieldError;
