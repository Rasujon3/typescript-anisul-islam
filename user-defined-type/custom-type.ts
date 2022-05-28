type User = { userName: string; userId: number };

let users: User[];
// users = [{ name: "111" }, { name: "111" }, { name: "111" }];
users = [];

let user1: User;
user1 = { userName: "anisul", userId: 101 };
// console.log(user1);
users.push(user1);
// console.log(users);

let user2: User;
user2 = { userName: "rabu", userId: 102 };
// console.log(user2);
users.push(user2);
// console.log(users);

let user3: User;
user3 = { userName: "lucky", userId: 103 };
// console.log(user2);
users.push(user3);
// console.log(users);

type RequestTypes = "GET" | "POST";
let getRequest: RequestTypes;
getRequest = "GET";

function requestHandler(requestTypes: RequestTypes) {
  console.log(requestTypes);
}

requestHandler("GET");
