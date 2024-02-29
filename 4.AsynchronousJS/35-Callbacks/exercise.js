function repeatHello(callback) {
    setInterval(callback,1000);
}

printHello = () => console.log("Hello");

repeatHello(printHello);