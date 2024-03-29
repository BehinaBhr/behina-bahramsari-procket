import "./ConnectionError.scss";
import errorConnection from"../../assets/images/connection-error.png"

const ConnectionError = ({ error="Unable to access the server right now. Please try again later." }) => {
  return (
    <div className="error">
      <img className="error__image" src={errorConnection} alt="no connection" />
      <div className="error__message">{error}</div>
    </div>
  );
};

export default ConnectionError;
