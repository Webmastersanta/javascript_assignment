function brickCalculator(n) {
   
   if (n<=10)
   {
       brickamount= n*15*1000;
   }
   else if(n>10 && n<20)
   {
    brickamount_tenfloor= 10*15*1000;
    brickamount_twentyfloor= (n-10)*12*1000;
    brickamount=brickamount_tenfloor+brickamount_twentyfloor;
   }
   else{
    brickamount_tenfloor= 10*15*1000;
    brickamount_twentyfloor= 10*12*1000;
    brickamount_thirtyfloor= (n-20)*10*1000;
    brickamount=brickamount_tenfloor+brickamount_twentyfloor+ brickamount_thirtyfloor;
   }
   
   return brickamount;
  } 
var result= brickCalculator(25);
console.log("The result of brick calculator is :");
console.log(result);