var Users = /** @class */ (function () {
    function Users() {
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is added");
    };
    return Users;
}());
var User1 = new Users;
var result = User1.addUser("Vicky");
console.log(result);
