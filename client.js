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

// new array to house all of the employee bonus objects.
let employeeBonus = [ ];

// let worker = {
//   name: name,
//   bonusPercentage: 0,
//   totalCompensation: annualSalary + worker.totalBonus,
//   totalBonus: annualSalary * worker.bonusPercentage,
// };

function bonus(name, employeeNum, annualSalary, rating ) {
  let worker = {
    name: name,
  };

  if( rating <= 2 ) {
    worker.bonusPercentage = 0;
  } else if( rating === 3 ) {
    worker.bonusPercentage = .04;
  } else if( rating === 4 ) {
    worker.bonusPercentage = .06;
  } else if( rating === 5 ) {
    worker.bonusPercentage = .10;
  } if( employeeNum >= 1000 ) {
    worker.bonusPercentage = worker.bonusPercentage + .05;
  } if( annualSalary > 65000 ) {
    worker.bonusPercentage = worker.bonusPercentage - .01;
  } if( 0 > worker.bonusPercentage){
    worker.bonusPercentage = 0;
  } if( .13 < worker.bonusPercentage ){
    worker.bonusPercentage = .13;
  }
  
  worker.totalBonus = annualSalary * worker.bonusPercentage,
  worker.totalCompensation = annualSalary + worker.totalBonus,
  employeeBonus.push(worker);
  
} //end bonusCalculation

bonus("mayella", 89086, 35000, 1 );
bonus("robert", 26835, 66000,  )
console.log(employeeBonus);


// function bonusCalculation( rating, income, employeeNum ) {
//   if( rating <= 2 ) {
//     worker.bonusPercentage = 0;
//   } else if( rating === 3 ) {
//     worker.bonusPercentage = .04;
//   } else if( rating === 4 ) {
//     worker.bonusPercentage = .06;
//   } else if( rating === 5 ) {
//     worker.bonusPercentage = .10;
//   } if( employeeNum >= 1000 ) {
//     worker.bonusPercentage = worker.bonusPercentage + .05;
//   } if( income > 65000 ) {
//     worker.bonusPercentage = worker.bonusPercentage - .01;
//   } 

// } //end of bonusCalculation



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
