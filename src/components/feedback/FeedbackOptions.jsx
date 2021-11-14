import React from 'react';
import PropTypes from 'prop-types';
import s from "./FeedbackOptions.module.css"

export default function FeedbackOptions({options}) {
  return (
      <ul className={s.feedbackList}>
        {options.map(item => (
          <li key={Object.keys(item)[0]}>
            <button className={s.btn}
              type="button"
              onClick={Object.values(item)[0]}
              >
              {Object.keys(item)[0].toUpperCase()}
            </button>
            </li>
        ))}
      </ul>
  );

}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
}


