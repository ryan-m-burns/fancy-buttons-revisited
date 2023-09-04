import { useState } from "react";

const TextRepeaterButton = (props) => {
  const [repetitions, setRepetitions] = useState(1);
  const textArray = [];

  const handleClick = () => setRepetitions(repetitions + 1);

  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text </span>);
  }
  return <button onClick={handleClick} className="TextRepeaterButton">{textArray}</button>;
};

export default TextRepeaterButton;
