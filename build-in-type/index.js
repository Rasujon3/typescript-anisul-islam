// build-in type: number ,string , boolean, void(return na krte chaile), undefined null
// let id = [1,2,3]
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Anisul";
lastName = " Islam";
isActivated = true;
fullName = firstName.concat(lastName);
// fullName = firstName + lastName;
function display() {
    console.log("Hi I am display");
}
display();
console.log("Your id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userId.toLowerCase());
