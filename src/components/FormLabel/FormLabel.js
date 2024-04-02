import "./FormLabel.scss";

const FormLabel = ({ field_name }) => {
  const convertToTitleCase = str => str.split('_').map(word =>  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  const field_label = convertToTitleCase(field_name);
  return (
    <label htmlFor={field_name} className="form-label">
      {field_label}
    </label>
  );
};

export default FormLabel;
