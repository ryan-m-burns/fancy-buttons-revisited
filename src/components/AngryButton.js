import { useState } from "react";

const AngryButton = (props) => {
  const { anger, setAnger } = props;

  const handleClick = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    } else {
      setAnger(0);
    }
  };
  return (
    <button
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={handleClick}
      className="AngryButton"
    >
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger > 1 && <span>Rawr!</span>}
    </button>
  );
};

export default AngryButton;
