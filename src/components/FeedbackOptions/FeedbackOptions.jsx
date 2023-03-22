import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(option => {
        return (
          <li key={option} className={css.item}>
            <button
              className={css.btn}
              onClick={onLeaveFeedback}
              option={option}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
