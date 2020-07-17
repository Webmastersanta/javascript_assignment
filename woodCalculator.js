function woodCalculator(chairamount,tableamount,bedamount) {
   var wood_for_chair= chairamount*1;
   var wood_for_table= tableamount*3;
   var wood_for_bed= bedamount*5;
   return total_wood= wood_for_chair+wood_for_table+wood_for_bed;
  } 
var result= woodCalculator(1,2,3);
console.log("The number of wood you have needed :");
console.log(result);