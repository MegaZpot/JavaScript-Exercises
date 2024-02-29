function multiplyByTwo(value) {
  let number = 2;
  const inner = () =>{
    console.log(value*number);
  }
  inner();
}


multiplyByTwo(4);