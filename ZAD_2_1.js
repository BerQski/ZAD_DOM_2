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
//#1
// var ar=[1,"s",23,8,4,7,"o",7];
// const arFilltered=ar.filter(function(arVal){
//     return !isNaN(arVal);}
// );
// const f=ar.reduce(function(a,b){
//      return a+b;
// });
// const d=arFilltered.reduce(function(a,b){
//     return a+b;
// });
// console.log("Suma tabeli="+ d, "i jest to zmienna typu:"+ typeof d);
// console.log(f, typeof f);// ex: sumuje do momentu az napotka string, potem agreguje, zwraca jako string

//#2
// var array=[6,6,23,8,4,8,3,99];
// //const first=aray[0], last=aray[aray.length-1];
//  function arGay(a=[]){
//      first=a[0];
//      last=a[a.length-1];
// return first+last;
//     }
// //console.log(first+last);

// console.log(arGay(array));

//#3

// var aray=[6,2,4,3];
// aray.forEach(function(element) {
  
//   i = 1;
//   b = 1;
//   while (i < element) {
//     b = b + (b * i);
//     i = i + 1;
//     }
//     console.log(b);
// });
 
//#4
// let array = [7, 1, 2, 5, 10];

// function revPopPush(arrPop){
//   let arrPush = [], i=arrPop.length;

//   while (i>0){arrPush.push(arrPop.pop());--i;}

// return arrPush;
// }
// // console.log(array);
// console.log(array+" ======> "+revPopPush(array));

//#5

// let array = [7, 1, 2, 5, 10, 11];
// function par(dyn) {
// //   let dyna = [],i=dyn.length;

// //    while (i>0){function sUm(a,b){a+b [(dyn.splice(0,2))]};--i;}
// // console.log(dyn);
// // }

// // console.log(par(array))
// // console.log(array.splice(0,2),array)
// let i=0,a=0,b=1,z=[];
// while (i<=(dyn.length-1)/2){z.push(dyn[a]+dyn[b]);a=a+2, b=b+2, i++}
//   return z;
 
// }
// console.log(par(array))
// console.log(z)

// #6

// let array = [7, 1, 2, 5, 10];
 
// function srif(z)
//  let a=0
//  let b=0

// {if (dyn.length%2 !==0 || a==dyn.length-1) {
//   return push(dyn[a]+dyn[a]);}
//     else {
//       return push(dyn[a]+dyn[b]);}
// }
// function par(dyn) {

//  let i=0,a=0,b=1,z=[];

//   while (i<=(dyn.length-2)/2) {srif(z);a=a+2, b=b+2, i++};
  
//   return z;
 
// }
// console.log(par(array));
//console.log(z);

//7

// let array = [7, 1, 2, 5, 10, 111, 121, 23, 45, 77];

// function getaRa(arA) {
//   // let a=[];
//   min=0;
//   max=arA.length-1;
//   return arA[Math.floor(Math.random()*(max-min+1))+min]
// }
// console.log(getaRa(array));

//8

// let array = [7, 1, 2, 5, 10, 111, 121, 23, 45, 77];

// let cOunter=3;

// function untillcOu(aRa,cOu) {
//   i=0;
//   z=[]
//   while (i<cOu) {
//       min=0;
//       max=aRa.length-1;
//       z.push(aRa[Math.floor(Math.random()*(max-min+1))+min]); i++;
//     }
//     //return z;
//     console.log(Math.min(...z));
//     return z;

//   }

// console.log(untillcOu(array,cOunter);

//9 sumting wrong

// let array = [7, 1, 2, 5, 10, 77];

// function untillEnd(aRa) {
//   end=1;
//   i=0;
//   z=[]
//   while (end>0) {
//       end=aRa.length-1;
//       min=0;
//       max=aRa.length-1; 
//       z.push(aRa.splice(([Math.floor(Math.random()*(max-min+1))+min]),1)); i++;
//     }
//     // return Array.flatt(z);
//     // console.log(Array.flatt(z));
//     return (z);

//   }
//   console.log(untillEnd(array));

//11

let dniTyg = ["Niedziela", "Nieszczesliwnik", "Wt", "Połmetek", "Czw", "Piatunio", "Sobota"]


function dzienTyg() {
  var dzien = new Date();
  var n = dniTyg[dzien.getDay()];
  return n;
}

// var Xmas95 = new Date('December 25, 1995 23:15:30');
// var weekday = Xmas95.getDay();
// var options = { weekday: 'long'};
// console.log(new Intl.DateTimeFormat('en-PL', options));

console.log("Dzisiaj jest :"+dzienTyg());