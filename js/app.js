// Object 1
let name = {
  firstName: 'John',
  lastName: 'Doe',
};

// Normal function (not inside object)
let printFullName = function (hometown, state) {
  // 'this' will point to the object we provide using .call()
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state
  );
};

// Object 2
let name2 = {
  firstName: 'Lorem',
  lastName: 'ipsum',
};

// Borrowing the same function for another object

// Using .call() → Borrowing the function for 'name'
printFullName.call(name, 'Patna', 'Bihar'); // Output: John Doe from Delhi

// Using .apply() → Borrowing the function for 'name2'
printFullName.apply(name2, ['Mumbai', 'Maharastra']); // Output: Lorem ipsum from Mumbai

// Using .bind() → Borrowing the function for 'name'
let printMyName = printFullName.bind(name, 'bind', 'bond'); // Output: John Doe from Delhi

printMyName();
