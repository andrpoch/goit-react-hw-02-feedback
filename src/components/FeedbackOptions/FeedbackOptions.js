import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
   return options.map((option) => (
      <button
         type="button"
         className={s.button}
         onClick={onLeaveFeedback}
         key={option}
      >
         {option}
      </button>));
};

FeedbackOptions.propTypes = {
   onClick: PropTypes.func.isRequired,
   options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default FeedbackOptions;

