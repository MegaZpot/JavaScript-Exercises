function printName(){
    let helloName = `"Hello John"`;
    function inner(){
        console.log(helloName);
    }
    inner();
}

setTimeout(printName,1000);
