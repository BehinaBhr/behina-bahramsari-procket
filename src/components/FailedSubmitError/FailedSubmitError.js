import "./FailedSubmitError.scss";

const FailedSubmitError = ({ error, className = "" }) => {
  return (
    <div className={`failed-submit-error ${className}`}>
      <div className="failed-submit-error__message">{error}</div>
    </div>
  );
};

export default FailedSubmitError;
