"use strict";
// boolean => yes/ no true/false 1/0
const isAdmin = true;
const isGuestUser = false;
const isOddNo = true;
// string
const test = "Ajeet";
// number
const age = 28;
const salary = 1000;
const user = {
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
const numbArray = [1, "two", 3];
const testArry = ["a", "b", "c", "d", "e"];
const test2Arry = [1, "one"];
// numbArray.push(5)
// union
let randomString;
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
const favColor = Color.yellow;
const test1 = false;
