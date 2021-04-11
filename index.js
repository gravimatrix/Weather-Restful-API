const delayedColorChange = (color,delay,doNext) => {
    setTimeout(()=>{
        document.body.style.backgroundColor = color;
        doNext && doNext();
    },delay);
};

delayedColorChange("red",2000,()=>{
    delayedColorChange("green",2000,()=>{
        delayedColorChange("blue",2000);
    })
})
