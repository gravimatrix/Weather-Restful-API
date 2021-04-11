const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 2000)
  .then(() => delayedColorChange("blue", 2000))
  .then(() => delayedColorChange("green", 2000))
  .then(() => delayedColorChange("orange", 2000))
  .then(() => delayedColorChange("violet", 2000))
  .then(() => delayedColorChange("indigo", 2000))
  .then(() => delayedColorChange("yellow", 2000))
