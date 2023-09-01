import { useState } from "react";

const CounterButton = (props) => {
  const [clickAmount, setClickAmount] = useState(0);
  return (
    <button className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  );
};

export default CounterButton;
