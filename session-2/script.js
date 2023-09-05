// boolean => yes/ no true/false 1/0
var isAdmin = true;
var isGuestUser = false;
var isOddNo = true;
// string
var test = "Ajeet";
// number
var age = 28;
var salary = 1000;
var user = {
    name: "sai",
    age: 21,
    isAdmin: false,
    gender: "male",
    fullName: {
        name: "Ajeet kumar jha",
        address: "Patna"
    }
};
// Array = [1,2]
var numbArray = [1, "two", 3];
var testArry = ["a", "b", "c", "d", "e"];
var test2Arry = [1, "one"];
// numbArray.push(5)
// union
var randomString;
randomString = 65;
randomString = "six";
randomString = false;
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
var favColor = Color.yellow;
