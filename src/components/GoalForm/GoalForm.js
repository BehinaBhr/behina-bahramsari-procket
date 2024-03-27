import "./GoalForm.scss";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import FormField from "../../components/FormField/FormField";
import EditAndBackButtonHeader from "../../components/EditAndBackButtonHeader/EditAndBackButtonHeader";

const GoalForm = ({ formSubmitHandler, goal }) => {
  const { goalId } = useParams();
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (goal) {
      setDescription(goal.description);
      setStartDate(goal.start_date);
      setEndDate(goal.end_date);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!description || !startDate || !endDate) {
      console.error(
        "Please fill out all fields and provide a valid email address and phone number."
      );
      return;
    }

    try {
      formSubmitHandler({ description, startDate, endDate });
      setSubmitSuccess(true);
      setTimeout(() => {
        navigate(`/goals/${goalId}`);
      }, 3000);
    } catch (error) {
      console.error(error);
      setSubmitSuccess(false);
    }
  };

  return (
    <section className="goal-form">
      <EditAndBackButtonHeader
        title="Edit Goal"
        back_button_to={`/goals/${goalId}`}
        edit_button_to={null}
      />

      <hr className="goal-form__divider" />

      <form onSubmit={onSubmit}>
        <div className="goal-form__details">
          <h2>Warehouse Details</h2>
          <FormField
            className="goal-form__input"
            field_name="description"
            errors={[]}
            value={description}
            valueSetter={setDescription}
          />
          <div className="goal-form__input-group">
            <FormField
              className="goal-form__input"
              field_name="start_date"
              errors={[]}
              value={startDate}
              valueSetter={setStartDate}
            />
            <FormField
              className="goal-form__input"
              field_name="end_date"
              errors={[]}
              value={endDate}
              valueSetter={setEndDate}
            />
          </div>
        </div>

        <div className="goal-form__buttons-group">
          <Link
            className="goal-form__button goal-form__button-cancel"
            onClick={() => navigate(-1)}
          >
            {" "}
            Cancel
          </Link>
          <button className="goal-form__button goal-form__button-add">
            Save
          </button>
        </div>
        {submitSuccess && (
          <div className="goal-form__success-message">
            The goal is successfully updated!
          </div>
        )}
      </form>
    </section>
  );
};

export { GoalForm };
