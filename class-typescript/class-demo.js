var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name : anisul islam , age: 25
// user2 - name : Rabeya islam , age: 21
var user1 = new User("Anisul Islam", 23);
user1.display();
var user2 = new User("Rabeya Islam", 33);
user2.display();
