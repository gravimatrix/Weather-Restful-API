const delayedColorChange = (color, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, delay);
};

delayedColorChange("red", 2000, () => {
  delayedColorChange("green", 2000, () => {
    delayedColorChange("blue", 2000, () => {
      delayedColorChange("violet", 2000, () => {
        delayedColorChange("yellow", 2000, () => {
          delayedColorChange("indigo", 2000, () => {
            delayedColorChange("orange", 2000);
          });
        });
      });
    });
  });
});
