import "./FormSelect.scss";
import FieldError from "../FieldError/FieldError";
import FormLabel from "../FormLabel/FormLabel";

const FormSelect = ({ field_name, options, errors=[], errorSetter=()=>{}, valueSetter, className = "", with_title = true }) => {
  const onOptionChangeHandler = (event) => {
    valueSetter(event.target.value);
    const updatedErrors = { ...errors };
    delete updatedErrors[field_name];
    errorSetter(updatedErrors);
  };

  return (
    <div className={`form-select ${className}`}>
      {with_title && <FormLabel field_name={field_name} />}
      <select
        onChange={onOptionChangeHandler}
        className={`${errors[field_name] !== undefined ? "form-select__error" : ""} form-select__input`}
      >
        <option value="">Please choose one option</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {errors[field_name] !== undefined &&
        errors[field_name].map((error) => <FieldError message={error} key={`${field_name} ${error}`} />)}
    </div>
  );
};

export default FormSelect;
