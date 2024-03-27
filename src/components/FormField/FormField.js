import "./FormField.scss";
import FieldError from "../FieldError/FieldError";
import "./FormField.scss";

const FormField = ({
  field_name,
  errors,
  value,
  valueSetter,
  className = "",
}) => {
  const field_label = field_name;

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={field_name} className="form-field__label">
        {field_label}
      </label>
      <input
        className={`${
          errors.includes(field_name) ? "form-field__error" : ""
        } form-field__input`}
        placeholder={field_label}
        type="text"
        id="warehouse-name"
        value={value}
        onChange={(e) => valueSetter(e.target.value)}
      />
      {errors.includes(field_name) && <FieldError />}
    </div>
  );
};

export default FormField;
