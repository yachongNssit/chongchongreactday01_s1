// ***************************************
// Create ColorPicker.jsx

import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#4c10b4ff");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="color-picker-container card">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </>
  );
}

export default ColorPicker;
