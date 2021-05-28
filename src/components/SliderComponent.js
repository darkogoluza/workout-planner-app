import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import isAllNumeric from "../utils/isAllNumeric";
import clamp from "../utils/clamp";

const SliderComponent = ({ value, setValue, min, max, title }) => {
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <div className="flex space-x-2 items-center">
        <p className="text-xs text-gray-500">{min}</p>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
          min={min}
          max={max}
        />
        <p className="text-xs text-gray-500">{max}</p>
        <div>
          <div className="flex items-center space-x-1 w-24 justify-end">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                const targetValue = e.target.value;
                if (targetValue === "") {
                  setValue(min);
                } else {
                  if (isAllNumeric(targetValue)) {
                    setValue(clamp(targetValue, min, max));
                  }
                }
              }}
              className="text-xs ml-4 text-center w-8 hover:bg-gray-100 text-gray-500 rounded-md outline-none focus:ring-1 focus:ring-offset-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
