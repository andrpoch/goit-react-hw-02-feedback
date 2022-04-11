import PropTypes from 'prop-types';
import s from './Feedbac kOptions.module.css';

function FeedbackOptions({ options, onClick }) {
   return options.map((option) => (
      <button
         type="button"
         className={s.button}
         onClick={onClick}
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

