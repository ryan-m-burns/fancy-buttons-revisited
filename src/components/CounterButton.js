import { useState } from "react";

const CounterButton = (props) => {
  const { clickAmount, setClickAmount }= props;

  const handleClick = () => setClickAmount(clickAmount + 1);

  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  );
};

export default CounterButton;
