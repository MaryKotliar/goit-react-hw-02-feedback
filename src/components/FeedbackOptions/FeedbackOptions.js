export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, index) => (
        <button key={index} option={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}

      {/* <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button> */}
    </>
  );
};
