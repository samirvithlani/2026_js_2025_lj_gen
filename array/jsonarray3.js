var employees = [
  {
    id: 1,
    name: "Amit Sharma",
    salary: 45000,
    gender: "Male",
    city: "Ahmedabad",
    expYear: 2,
  },
  {
    id: 2,
    name: "Priya Patel",
    salary: 60000,
    gender: "Female",
    city: "Mumbai",
    expYear: 4,
  },
  {
    id: 3,
    name: "Rahul Verma",
    salary: 75000,
    gender: "Male",
    city: "Delhi",
    expYear: 6,
  },
  {
    id: 4,
    name: "Neha Shah",
    salary: 50000,
    gender: "Female",
    city: "Ahmedabad",
    expYear: 3,
  },
  {
    id: 5,
    name: "Vikram Singh",
    salary: 90000,
    gender: "Male",
    city: "Pune",
    expYear: 8,
  },
  {
    id: 6,
    name: "Kavita Joshi",
    salary: 65000,
    gender: "Female",
    city: "Bangalore",
    expYear: 5,
  },
  {
    id: 7,
    name: "Arjun Mehta",
    salary: 35000,
    gender: "Male",
    city: "Surat",
    expYear: 1,
  },
  {
    id: 8,
    name: "Sneha Reddy",
    salary: 80000,
    gender: "Female",
    city: "Hyderabad",
    expYear: 7,
  },
  {
    id: 9,
    name: "Rohan Kumar",
    salary: 55000,
    gender: "Male",
    city: "Delhi",
    expYear: 4,
  },
  {
    id: 10,
    name: "Anjali Gupta",
    salary: 70000,
    gender: "Female",
    city: "Mumbai",
    expYear: 6,
  },
];

//find all employees from ahm and print salary

var ahmempsalary = employees
  .filter((emp) => emp.city == "Ahmedabad")
  .map((emp) => emp.salary);
console.log(ahmempsalary);

var femalempcity = employees
  .filter((emp) => emp.gender == "Female")
  .map((emp) => emp.city.toUpperCase());
console.log(femalempcity);

var filtdata = employees
  .filter((emp) => emp.expYear > 4)
  .map((emp) => {
    return { name: emp.name, salary: emp.salary };
  });
console.log(filtdata);
