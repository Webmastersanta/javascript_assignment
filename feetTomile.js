function feetToMile(feet) {
    if(feet>0){
   var mile= feet*0.00018939;
   return mile;
  } 
  else{
    console.log("Sorry!The value should be a positive number.");
  }
}
var result= feetToMile(10);
console.log("The result is:");
console.log(result);
