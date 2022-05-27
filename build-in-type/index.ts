// build-in type: number ,string , boolean, void(return na krte chaile), undefined null

// let id = [1,2,3]
let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Anisul";
lastName = " Islam";
isActivated = true;
fullName = firstName.concat(lastName);
// fullName = firstName + lastName;

function display(): void {
  console.log("Hi I am display");
}

display();

console.log(
  `Your id: ${userId}, username: ${fullName}, account activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userId.toLowerCase());
