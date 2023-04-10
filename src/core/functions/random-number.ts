const randomNumber = (max: number, min: number = 0) => {
  const range = max - min;
  return Math.floor(Math.random() * range + min);
};

export default randomNumber;
