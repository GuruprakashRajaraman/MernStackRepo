// //step 1: Create a XHR object
// var request = new XMLHttpRequest();
// // step 2: opening a connection to the server
// request.open("GET","https://restcountries.com/v3.1/all",true)
// // step 3: initialting a bridge to the server / sending a request / sending a connection
// request.send();
// //step 4: server response
// request.onload = function(){
//     var data = request.response;
//     //console.log(data);
//     var result = JSON.parse(data);
//     console.log(result);
//     for(var i=0;i<result.length;i++){
//         console.log(result[i].area)
//     }
// }


// activities
// 1. compare two ojects/json with same properties without order
// let obj1 ={name : "person1", age:5};
// let obj2 ={age:5,name :"person1"}
// //convert obj to JSON
// let json1=JSON.stringify(obj1);
// let json2=JSON.stringify(obj2);
// if(json1===json2){
//     console.log("both are equal")
// }
// else console.log("both are different");
//--Answer: it is always not equal if order is different.

//2.display all country names,region, sun-region and populations
//step 1: Create a XHR object
var request1 = new XMLHttpRequest();
// step 2: opening a connection to the server
request1.open("GET","https://restcountries.com/v3.1/all",true)
// step 3: initialting a bridge to the server / sending a request / sending a connection
request1.send();
//step 4: server response
request1.onload = function(){
    var data1 = request1.response;
    //console.log(data1);
    var result1 = JSON.parse(data1);
    console.log(result1);
    for(var i=0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population)
    }
}
