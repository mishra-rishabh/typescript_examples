var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    EmployeeClass.prototype.getSalary = function () {
        return 10000;
    };
    return EmployeeClass;
}());
var emp1 = new EmployeeClass("JW123", "Joe West");
console.log(emp1);
console.log(emp1.empName);
console.log(emp1.empCode);
console.log(emp1.getSalary());
