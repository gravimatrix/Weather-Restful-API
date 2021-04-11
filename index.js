const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    var toChange = true;
    if (color === "red") {
      reject("I don't like fucking red");
      toChange = false;
    }
    setTimeout(() => {
      if (toChange) document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const rainbow = async () => {
  try {
    await delayedColorChange("violet", 2000);
    await delayedColorChange("indigo", 2000);
    await delayedColorChange("blue", 2000);
    await delayedColorChange("green", 2000);
    await delayedColorChange("red", 2000);
    await delayedColorChange("yellow", 2000);
    await delayedColorChange("orange", 2000);
  } catch (error) {
    return "I don't like fucking red, and won't change color to and after red";
  }
  return "Changing BG color to rainbow";
};

rainbow()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
