const float = (to, from) => {
  return (Math.random() * (to - from) + from).toFixed(4) * 1;
}

const int = (min, max) => {
  return Math.random() * (max - min) + min;
}

module.exports = {
  float,
  int
};
