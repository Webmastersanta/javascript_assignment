var my_arry = ["shimu", "titu", "hossain", "altaf mahmud"];

function tinyFriend(names) {
    var smallname= names[0].lenght;
    for(var i=0; i< names.length; i++){
    var currentname=names[i].length; 
		if (currentname <smallname) {
			smallname= currentname;
        }
    }
		
			return smallname;
    
}
var result= tinyFriend(my_arry);
 console.log("The tiny name is :");
 console.log(result);
