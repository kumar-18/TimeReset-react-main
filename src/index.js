import React, {useState} from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <select id="selectTime">
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
      </select>
      <button onClick={props.onClickReset}>Reset</button>
    </div>
  );
};

function App() {
  const [key, setKey] = useState(0);
  const [duration,setDuration]=useState(10);
  const onClickReset = () => {
    setKey(prevKey => prevKey + 1)
    let e=document.getElementById("selectTime");
    setDuration(parseInt(e.value));
  };
  
  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={duration}
          onComplete={() => [true, 1000]}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        >
          {renderTime}
        </CountdownCircleTimer>
        <SetlectReset onClickReset={onClickReset}/>
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);