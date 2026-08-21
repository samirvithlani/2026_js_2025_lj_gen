var employees = [
  {
    "id": 1,
    "name": "Amit Sharma",
    "salary": 45000,
    "gender": "Male",
    "city": "Ahmedabad",
    "expYear": 2
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "salary": 60000,
    "gender": "Female",
    "city": "Mumbai",
    "expYear": 4
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "salary": 75000,
    "gender": "Male",
    "city": "Delhi",
    "expYear": 6
  },
  {
    "id": 4,
    "name": "Neha Shah",
    "salary": 50000,
    "gender": "Female",
    "city": "Ahmedabad",
    "expYear": 3
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "salary": 90000,
    "gender": "Male",
    "city": "Pune",
    "expYear": 8
  },
  {
    "id": 6,
    "name": "Kavita Joshi",
    "salary": 65000,
    "gender": "Female",
    "city": "Bangalore",
    "expYear": 5
  },
  {
    "id": 7,
    "name": "Arjun Mehta",
    "salary": 35000,
    "gender": "Male",
    "city": "Surat",
    "expYear": 1
  },
  {
    "id": 8,
    "name": "Sneha Reddy",
    "salary": 80000,
    "gender": "Female",
    "city": "Hyderabad",
    "expYear": 7
  },
  {
    "id": 9,
    "name": "Rohan Kumar",
    "salary": 55000,
    "gender": "Male",
    "city": "Delhi",
    "expYear": 4
  },
  {
    "id": 10,
    "name": "Anjali Gupta",
    "salary": 70000,
    "gender": "Female",
    "city": "Mumbai",
    "expYear": 6
  }
]

//  {
//     "id": 1,
//     "name": "Amit Sharma",
//     "salary": 45000,
//     "gender": "Male",
//     "city": "Ahmedabad",
//     "expYear": 2
//   },

// var maleemployees = []

// for(i=0;i<employees.length;i++){
//     if(employees[i].gender=="Male"){
//         maleemployees.push(employees[i])
//     }
// }
//console.log(maleemployees)

// var maleemployees = employees.filter((emp)=>{
//     return emp.gender == "Male"
// })
var maleemployees = employees.filter((emp)=>emp.gender=="Male")
console.log(maleemployees)

//find--->

var firstemp = employees.find((emp)=>emp.city=="Ahmedabad")
console.log(firstemp)