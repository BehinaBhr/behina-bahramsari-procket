import "./FormError.scss";

const FormError = ({ error }) => {
  return (
    <div className="form-error">
      <div className="form-error__message">{error}</div>
    </div>
  );
};

export default FormError;
