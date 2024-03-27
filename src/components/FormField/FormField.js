import "./FormField.scss";
import FieldError from "../FieldError/FieldError";
import "./FormField.scss";

const FormField = ({ field_name, errors, errorSetter, value, valueSetter, className = "" }) => {
  const field_label = field_name;
  function onChange(e) {
    valueSetter(e.target.value);
    delete errors[field_name]
    errorSetter(errors)
  }
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={field_name} className="form-field__label">
        {field_label}
      </label>
      <input
        className={`${errors[field_name] !== undefined ? "form-field__error" : ""} form-field__input`}
        placeholder={field_label}
        type="text"
        id="warehouse-name"
        value={value}
        onChange={onChange}
      />
      {errors[field_name] !== undefined &&
        errors[field_name].map((error) => <FieldError message={error} key={`${field_name} ${error}`} />)}
    </div>
  );
};

export default FormField;
