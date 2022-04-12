import React from "react";
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
   return (
      <>
         <ul className={s.list}>
            <li className={s.item}><p className={s.text}>Good:{good}</p></li>
            <li className={s.item}><p className={s.text}>Neutral:{neutral}</p></li>
            <li className={s.item}><p className={s.text}>Bad:{bad}</p></li>
            <li className={s.item}><p className={s.text}>Total:{total}</p></li>
            <li className={s.item}><p className={s.text}>Positive feedback:{positivePercentage}</p></li>
      </ul>
      </>
   )
}

Statistics.propTypes = {
   bad: PropTypes.number.isRequired,
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,
};


export default Statistics;