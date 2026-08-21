var users = [
  { id: 1, name: "amit", age: 23, salary: 12000 },
  { id: 2, name: "raj", age: 21, salary: 22000 },
  { id: 3, name: "parth", age: 24, salary: 32000 },
  { id: 4, name: "sumit", age: 21, salary: 19000 },
  { id: 5, name: "kunal", age: 40, salary: 85000 },
  { id: 6, name: "ajay", age: 25, salary: 45000 },
];

console.log(users);
console.log(users[0]);

// for(i=0;i<users.length;i++){
//     console.log(users[i].id , users[i].name)
// }

// users.forEach((user)=>{
//     console.log(user.id,user.name)
// })

//task:
// var usersname =[]
// // for(i=0;i<users.length;i++){
// //     usersname.push(users[i].name)
// // }

var usersname = users.map((u) => {
  return u.name;
});
console.log(usersname);

// var users = [

//     {id:1001,name:"AMIT",age:24,salary:12000},
//     {id:1002,name:"raj",age:21,salary:22000},
//     {id:3,name:"parth",age:24,salary:32000},
//     {id:4,name:"sumit",age:21,salary:19000},
//     {id:5,name:"kunal",age:40,salary:85000},
//     {id:6,name:"ajay",age:25,salary:45000},
// ]

//id+1000, name =upper, age+1,salary+5k

// var updatedUsers = users.map((u)=>{
//     //return u
//     return {id:u.id+1000,name:u.name.toUpperCase(),age:u.age+1,salary:u.salary+5000,bonus:(u.salary+5000)*0.1}
// })
// console.log(updatedUsers)

users.push({id:1,name:"priya",age:23,salary:45000})

var updatedUsers = users.map((u) => {
  //return u
  return {
    id: u.id + 1000,
    name: u.name.toUpperCase(),
    age: u.age + 1,
    salary: u.salary + 5000,
    bonus: (u.salary + 5000) * 0.1,
    sym:(u.salary + 5000)>=50000 ? "valid":"not valid",
    school:"DPS"
  };
});
console.log(updatedUsers);
