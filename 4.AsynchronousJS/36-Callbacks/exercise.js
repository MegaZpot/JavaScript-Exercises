function repeatHello(callback) {
    const intervalID = setInterval(()=>{
        callback();
    },1000)

    setTimeout(()=>{
        clearInterval(intervalID);
    },5500)
}

printHello = () => console.log("Hello");

repeatHello(printHello);