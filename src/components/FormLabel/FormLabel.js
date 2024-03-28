import "./FormLabel.scss";

const FormLabel = ({ field_name }) => {
  const field_label = field_name;
  return (
    <label htmlFor={field_name} className="form-label">
      {field_label}
    </label>
  );
};

export default FormLabel;
