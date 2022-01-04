var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Pending"] = 3] = "Pending";
})(Status || (Status = {}));
console.log(Status.Active);
console.log(Status['Inactive']);
console.log(Status[2]); // print Inactive
console.log(Status.Pending);
