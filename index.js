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
    const resolvedMsg = await delayedColorChange("violet", 2000);
    //console.log(resolvedMsg);
    await delayedColorChange("indigo", 2000);
    await delayedColorChange("blue", 2000);
    await delayedColorChange("green", 2000);
    await delayedColorChange("red", 2000);
    await delayedColorChange("yellow", 2000);
    await delayedColorChange("orange", 2000);
  } catch (error) {
    throw new Error(error + ", and won't change color to and after red");
  }
  return "Changing BG color to rainbow";
};

rainbow()
  .then((msg) => console.log("inside then\n", msg))
  .catch((err) => console.log(err));
