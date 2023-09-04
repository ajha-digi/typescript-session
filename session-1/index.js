var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById("button");
function add(n1, n2) {
    var result = n1 + n2;
    // return `Final output is ${result}`
    return result;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
