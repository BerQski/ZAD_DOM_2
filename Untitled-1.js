// var adder = {
//     base: 1,
  
//     add: function(a) {
//       var f = v => v + this.base;
//       return f(a);
//     },
  
//     addThruCall: function(a) {
//       var f = v => v + this.base;
//       var b = {
//         base: 2
//       };
  
//       return f.call(b, a);
//     }
//   };
  
//   console.log(adder.add(1));         // This would log 2
//   console.log(adder.addThruCall(1)); // This would log 2 still

//let ar=[1,6,23,8,4,8,s,7];
// var a=[1,6,23,8,4,8,6,7]
// function sum(){
//     var args = [].slice.call(arguments);
//     return args.reduce(function(z,h){
//       if(!isNaN(h)){
//         return z+h;
//       }
//       else
//       {
//        throw console.log("Non-Numeric arguments"+h);
//       }
//    },0)
//    }
//        var result = sum(1,6,23,8,4,8,6,7); //pass any number of parameter to sum
//        console.log("Sum Is:"+result);
// console.log()

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

var ar=[1,"e",23,8,4,"J",4,7];
const arFilltered=ar.filter(function(arVal){
    return isNaN(arVal);}
);
const f=ar.reduce(function(a,b){
     return a+b;
});
const d=arFilltered.reduce(function(a,b){
    return a+b;
});
console.log("Suma tabeli="+ d, "i jest to zmienna typu:"+ typeof d);
console.log(f, typeof f);// ex: sumuje do momentu az napotka string, potem agreguje, zwraca jako string

//const newArray = oldArray.filter( value => !Number.isNaN(value) );
// var ar=[1,"e",23,8,4,"J",4,7];
// const newArray = ar.filter( x => {
//     return !isNaN(x);
// } );
// console.log(newArray);
// const newArray = [1,"e",23,8,4,"J",4,7].filter(function (hfff) {
//     return !Number.isNaN(hfff);
// });
// console.log(newArray);