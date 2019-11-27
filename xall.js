//1
// let obj = {
//     id:1,
//     getId: function(){
//         return this.id;
//     }
// }

// let contextObject = {id:2};
// console.log(obj.getId());
// console.log(obj.getId.call(contextObject));

//2
// let obj = {
//     id:1,
//     getId: function(par1, par2){
//         return par1+ this.id+par2;
//     }
// }

// let contextObject = {id:2};

// console.log(obj.getId('p','s'));
// console.log(obj.getId.apply(contextObject,
// ['prefix ',' sufix']));

const tab = new Array(10);

//forEach i map pomijają puste miejsca, dlatego musimy tablicę wypełnić
const nr = tab.fill(0).map((el, i) => i);
console.log(nr); //[0,1,2,3,4,5,6,7,8,9];

const randomTab = tab.fill(0).map(el => Math.floor(Math.random() * 10) + 1);
console.log(randomTab);
