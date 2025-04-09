import React, { useEffect, useState } from 'react';
import { MAX, MIN } from "./constant";

function Progress({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(Math.max(value, MIN), MAX));
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div style={{ width: "100%", backgroundColor: "green",
        height: "100%",
        width: "50%",
        transform: `scaleX(${percent / MAX})`,
        transformOrigin: "left",
        transition: "transform 0.3s ease",
        marginLeft:"25%",
        marginRight:"25%",
        borderRadius:"50px"
        }}>
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>

    </div>
  );
}

export default Progress;
