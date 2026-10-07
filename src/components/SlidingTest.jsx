import { useState } from "react";

function SlidingTest() {
  const [countLeft, setCountLeft] = useState(50);
  const [countRight, setCountRight] = useState(50);

  const reset = () => {
    setCountLeft(50);
    setCountRight(50);
  };

  const toLeft = () => {
    if (countLeft < 100) {
      setCountLeft(countLeft + 1);
      setCountRight(countRight - 1);
    }
  };
  const toRight = () => {
    if (countRight < 100) {
      setCountLeft(countLeft - 1);
      setCountRight(countRight + 1);
    }
  };

  return (
    <div className="counter-container">
      <div className="count-display">
        {countLeft}-----{countRight}
      </div>
      <button onClick={toLeft}>Left Slide</button>
      <button onClick={reset}>Balance</button>
      <button onClick={toRight}>Right Slide</button>
    </div>
  );
}

// export the component
export default SlidingTest;
