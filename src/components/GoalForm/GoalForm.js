import "./GoalForm.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";
import FailedSubmitError from "../FailedSubmitError/FailedSubmitError";
import SuccessfulSubmitMessage from "../SuccessfulSubmitMessage/SuccessfulSubmitMessage";

// A form used in both edit and add goal
const GoalForm = ({ title, formSubmitHandler, goal = null }) => {
  const { goalId } = useParams();
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (goal) {
      setDescription(goal.description);
      setStartDate(goal.start_date);
      setEndDate(goal.end_date);
    }
  }, [goal]);

  const onSubmit = async (e) => {
    setSubmitError("");

    e.preventDefault();
    let errors = {};
    if (description === "") {
      errors["description"] = ["This field is required"];
    }
    if (startDate === "") {
      errors["start_date"] = ["This field is required"];
    }
    if (endDate === "") {
      errors["end_date"] = ["This field is required"];
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await formSubmitHandler({
          description: description,
          start_date: startDate,
          end_date: endDate,
        });

        setSubmitSuccess(true);
        setTimeout(() => {
          goal ? navigate(`/goals/${goalId}`) : navigate(`/goals`);
        }, 3000);
      } catch (error) {
        console.error(error);
        setSubmitSuccess(false);
      }
    }
  };

  return (
    <section className="goal-form">
      <EditAndBackButtonHeader title={title} edit_button_to={null} />

      <hr className="goal-form__divider" />

      <form onSubmit={onSubmit}>
        <div className="goal-form__details">
          <FormField
            className="goal-form__input"
            field_name="description"
            errors={errors}
            errorSetter={setErrors}
            value={description}
            valueSetter={setDescription}
          />
          <div className="goal-form__input-group">
            <FormField
              className="goal-form__input"
              key="start_date"
              field_name="start_date"
              errors={errors}
              errorSetter={setErrors}
              value={startDate}
              valueSetter={setStartDate}
              type="date"
            />
            <FormField
              className="goal-form__input"
              key="end_date"
              field_name="end_date"
              errors={errors}
              errorSetter={setErrors}
              value={endDate}
              valueSetter={setEndDate}
              type="date"
            />
          </div>
        </div>

        <div className="goal-form__buttons-group">
          <Link className="goal-form__button goal-form__button-cancel" onClick={() => navigate(-1)}>
            Cancel
          </Link>
          <button className="goal-form__button goal-form__button-add">Save</button>
        </div>
        {submitSuccess && <SuccessfulSubmitMessage message="The new task is successfully created!" />}
        {submitError && <FailedSubmitError error={submitError} />}
      </form>
    </section>
  );
};

export { GoalForm };
