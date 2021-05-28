import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import clamp from "../utils/clamp";
import isAllNumeric from "../utils/isAllNumeric";

const RangeSlider = ({ value, setValue, min, max, title }) => {
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography id="range-slider" className="text-gray-700" gutterBottom>
        {title}
      </Typography>
      <div className="flex space-x-2 items-center">
        <p className="text-xs text-gray-500">{min}</p>
        <Slider
          value={value}
          onChange={handleChangeValue}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={min}
          max={max}
        />
        <p className="text-xs text-gray-500">{max}</p>
        <div>
          <div className="flex items-center space-x-1 w-24 justify-end">
            {value[0] === value[1] ? (
              <input
                type="text"
                value={value[0]}
                onChange={(e) => {
                  const targetValue = e.target.value;
                  if (targetValue === "") {
                    setValue([min, min]);
                  } else {
                    if (isAllNumeric(targetValue)) {
                      setValue([
                        clamp(targetValue, min, max),
                        clamp(targetValue, min, max),
                      ]);
                    }
                  }
                }}
                className="text-xs ml-4 text-center w-8 hover:bg-gray-100 text-gray-500 rounded-md outline-none focus:ring-1 focus:ring-offset-3"
              />
            ) : (
              <>
                <input
                  type="text"
                  value={value[0]}
                  onChange={(e) => {
                    const targetValue = e.target.value;
                    if (targetValue === "") {
                      setValue([min, value[1]]);
                    } else {
                      if (isAllNumeric(targetValue))
                        setValue([clamp(targetValue, min, value[1]), value[1]]);
                    }
                  }}
                  className="text-xs text-center w-8 hover:bg-gray-100 text-gray-500 rounded-md outline-none focus:ring-1 focus:ring-offset-3"
                />
                <p className="text-xl text-gray-500">-</p>
                <input
                  type="text"
                  value={value[1]}
                  onChange={(e) => {
                    const targetValue = e.target.value;
                    if (targetValue === "") {
                      setValue([value[0], min]);
                    } else {
                      if (isAllNumeric(targetValue))
                        setValue([value[0], clamp(targetValue, value[0], max)]);
                    }
                  }}
                  className="text-xs ml-4 text-center w-8  hover:bg-gray-100 text-gray-500 rounded-md outline-none focus:ring-1 focus:ring-offset-3"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
