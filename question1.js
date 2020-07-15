//console.log()
console.log('hello letsupgrader');
//console.error()
console.error('an error occured');
//console.warn()
console.warn('This is a warning.');  
//console.table()
console.table({'sri':1, 'pk':2});
// console.count() method 
for(let i=0;i<5;i++){ 
    console.count(i); 
}
// console.time() and console.timeEnd() method  
console.time(); 
 let fun1 =  function(){ 
    var num_1 = 80;
    var num_2 = 90;
    var addition = num_1 + num_2 ;
    console.log("Addition = ",addition);
 } 
 let fun2 = function(){ 
    var num_1 = 80;
    var num_2 = 90;
    var multiply= num_1 * num_2 ;
    console.log("multiplication = ",multiply); 
 } 
 fun1(); // calling fun1(); 
 fun2(); // calling fun2(); 
console.timeEnd(); 