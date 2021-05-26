const getDayOfTheWeekIndex = () => {
  const d = new Date();

  const wrapArray = (length, index) => {
    return ((index % length) + length) % length;
  };

  return wrapArray(7, d.getDay() - 1);
};

export default getDayOfTheWeekIndex;
