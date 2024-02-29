const printAsyncName = (callback,string) => {
    
    setTimeout(callback,1000);
    setTimeout(()=>console.log(string),2000);
}
let printHello = () => console.log("Hello ")


printAsyncName(printHello,"Doraemon")