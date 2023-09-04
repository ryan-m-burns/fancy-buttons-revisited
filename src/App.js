import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";

function App() {
  const [light, setLight] = useState("off");
  const [anger, setAnger] = useState(0);
  const [clickAmount, setClickAmount] = useState(0);
  const [repetitions, setRepetitions] = useState(1);

  const dark = (light === 'off') ? 'dark' : '';

  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton anger={anger} setAnger={setAnger} />
        <CounterButton
          clickAmount={clickAmount}
          setClickAmount={setClickAmount}
        />
        <LightSwitchButton light={light} setLight={setLight} />
        <TextRepeaterButton
          repetitions={repetitions}
          setRepetitions={setRepetitions}
        />
      </section>
    </div>
  );
}

export default App;
