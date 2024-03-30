import "./SuccessfulSubmitMessage.scss";

const SuccessfulSubmitMessage = ({ message, className = "" }) => {
  return (
    <div className={`successfull-submit-message ${className}`}>
      <div className="successfull-submit-message__message">{message}</div>
    </div>
  );
};

export default SuccessfulSubmitMessage;
