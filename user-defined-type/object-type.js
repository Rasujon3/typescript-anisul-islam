var users;
// users = [{ name: "111" }, { name: "111" }, { name: "111" }];
users = [];
var user1;
user1 = { userName: "anisul", userId: 101 };
// console.log(user1);
users.push(user1);
// console.log(users);
var user2;
user2 = { userName: "rabu", userId: 102 };
// console.log(user2);
users.push(user2);
// console.log(users);
for (var key in users) {
    console.log(users[key]["userName"]);
}
