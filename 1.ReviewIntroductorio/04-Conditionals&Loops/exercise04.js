function sumUntil(maxValue) {
  let sum=0;
  for(i=1; i<maxValue+1 ; i++){
    sum=sum+i;    
  };
  return sum
}

console.log(sumUntil(4));