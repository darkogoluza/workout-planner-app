const isAllNumeric = (inputtxt) => {
  if (inputtxt === undefined || inputtxt === null) return;
  var numbers = /^[0-9]+$/;
  return inputtxt.match(numbers);
};

export default isAllNumeric;
