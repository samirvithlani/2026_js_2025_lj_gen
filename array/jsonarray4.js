var data =[
    {
        name:"India",
        states:[
            {
                name:"gujarat",
                cities:["Ahmedabad","Rajkot","Surat"],
                population:20000000
            },
            {
                name:"mah",
                cities:["Mumbai","Pune","Nashik"],
                population:25000000
            },
        ]
    },
    {
        name:"USA",
        states:[
            {
                name:"california",
                cities:["LA","San Fra","San DIAGO"],
                population:30000000
            },
            {
                name:"Texas",
                cities:["Houston","Austin","San Antonio"],
                population:5000000
            },
        ]
    }
]

var india = data.find((c)=>c.name =="India")
console.log(india)

var indianStates = data.find((c)=>c.name =="India").states.map((s)=>s.name)
console.log(indianStates)

// var indianCities = data.find((c)=>c.name=="India").states.map((s)=>s.cities) 2d array
var indianCities = data.find((c)=>c.name=="India").states.map((s)=>s.cities).flatMap((c)=>c)
console.log(indianCities)


var data1 = [
    {
        name: "Tata Consultancy Services",
        employees: [
            {
                name: "Rahul Sharma",
                position: "Software Developer",
                salary: 800000
            },
            {
                name: "Priya Patel",
                position: "Project Manager",
                salary: 1500000
            },
            {
                name: "Amit Kumar",
                position: "QA Engineer",
                salary: 700000
            }
        ]
    },
    {
        name: "Infosys",
        employees: [
            {
                name: "Neha Shah",
                position: "Frontend Developer",
                salary: 750000
            },
            {
                name: "Rohit Verma",
                position: "Backend Developer",
                salary: 900000
            },
            {
                name: "Sneha Joshi",
                position: "HR Manager",
                salary: 1200000
            }
        ]
    },
    {
        name: "Reliance Industries",
        employees: [
            {
                name: "Vikas Mehta",
                position: "Data Analyst",
                salary: 850000
            },
            {
                name: "Kajal Singh",
                position: "Business Analyst",
                salary: 1000000
            },
            {
                name: "Arjun Desai",
                position: "Senior Manager",
                salary: 1800000
            }
        ]
    }
];


// Find the company whose name is "Infosys".
// Get all employees from all companies into a single array.
// Find the employee whose name is "Neha Shah".
// Get all employees whose salary is greater than 1000000.
// Get all employees whose position contains "Developer".
// Create an array containing every company's name and total number of employees.

var employees = data1.flatMap((e)=>e.employees).map((x)=>x.name)
console.log(employees)

var nehashah= data1.flatMap((e)=>e.employees).find((emp)=>emp.name=="Neha Shah")
console.log(nehashah)

var salaryfilt = data1.flatMap((e)=>e.employees).filter((emp)=>emp.salary>1000000)
console.log(salaryfilt)

var developers = data1.flatMap((e)=>e.employees).filter((emp)=>emp.position.includes("Developer"))
console.log(developers)

var detail =data1.map((d)=>{
    return {
        name:d.name,
        size:d.employees.length
    }
})
console.log(detail)