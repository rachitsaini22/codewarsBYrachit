
// let rach = {name:"Rachit", 
//             surename:"Saini",
//             age:20,
//             gender: "Male",
//            }
        
// //console.log(Object.keys(rach));


// const person= {
//     food:490,
//     movie :200,
//     travle:300,
//     shopping:null,
// }

// let ww= JSON.stringify(person, (key, value) =>{
//     if(value === null) return undefined ;
//     else 
//         return value;
// },2);

// let arr= Object.values(person);
// let sum=0;
// for (let i in arr){
//     sum= sum+arr[i];
// }

// ww.total= sum;
// console.log(ww);
// let TOobj={};

// let all = Object.entries(person);
// modify= [];
// for (let i in all){
//     if (all[i][1] !== null){
//         modify.push(all[i]);
//     }
    
// }
// TOobj=Object.fromEntries(modify);
// console.log(JSON.stringify(TOobj, null, 1));


console.log({name: "rachit"}+{age : 21});