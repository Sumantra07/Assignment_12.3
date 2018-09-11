/*
 *
 * function which invokes a callback on all items of the array
 * 
 * 
 * 
 */
function map(arr,routine) {

    // double the array
    var customer_operation_arr = arr.map(routine);
     return customer_operation_arr;
}
// invoking map
var arr = [10,8,12,36];

 console.log(map(arr,function (num) {
    return num * 2;
}));

 


