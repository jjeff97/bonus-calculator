const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

let threeBonus = .04;
let fourBonus = .06;
let fiveBonus = .10;
let revisedEmployees = [];

function employeesLoop() {
  for (let index = 0; index < employees.length; index++) {
    ratingEval(employees[index]); 
  } 
}


function ratingEval (employeeObject){
  console.log ('You are in the function!');
//   //create a variable!
// //   for (let index = 0; index < employees.length; index++) {
//     let bonusAmount = null;
    
    
//     const intSalary = parseInt(employeeObject.annualSalary);
//     const object = {
//       bonusPercentage: 0,
//       name: employees.name,
//       totalBonus: 0,
//       totalCompensation: 0,
//     }

//     revisedEmployees.push(object)

//     //console.log(employees[index].reviewRating);

//     // switch (employeeObject.reviewRating) {
//     //   case 3:
//     //     if(employeeObject.employeeNumber.length>= 4){
//     //       threeBonus+=.05
//     //     }
//     //   bonusAmount = intSalary * threeBonus;
//     //   object.totalBonus = bonusAmount
//     //   object.bonusPercentage = threeBonus;
//     //   object.totalCompensation = bonusAmount + intSalary
//     //     break;
//     //     // set the variable here! :D
//     //   case 4:
//     //       if(employeeObject.employeeNumber.length>= 4){
//     //         fourBonus+=.05
//     //       }
//     //     bonusAmount =  intSalary * fourBonus;
//     //     revisedEmployees[index].totalBonus = bonusAmount
//     //     revisedEmployees[index].bonusPercentage = fourBonus;
//     //     revisedEmployees[index].totalCompensation = bonusAmount + intSalary
//     //     break;
          
//     //   case 5:
//     //       if(employeeObject.employeeNumber.length>= 4){
//     //         fiveBonus+=.05
//     //       }
//     //     bonusAmount = intSalary * fiveBonus;
//     //     revisedEmployees[index].totalBonus = bonusAmount
//     //     revisedEmployees[index].bonusPercentage = fiveBonus;
//     //     revisedEmployees[index].totalCompensation = bonusAmount + intSalary
//     //     break;
    
//     //   default: bonusAmount =  0;
//     //   revisedEmployees[index].totalBonus = bonusAmount
//     //   revisedEmployees[index].bonusPercentage = 0;
//     //   revisedEmployees[index].totalCompensation = bonusAmount + intSalary
//     //     break;
//     }
//     console.log(object);
//     // console.log(bonusAmount);
  }
  
employeesLoop();



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//console.log( employees );

