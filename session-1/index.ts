const input1 = document.getElementById("input1")! as HTMLInputElement;
const input2 = document.getElementById("input2")! as HTMLInputElement;
const button = document.getElementById("button")!;

function add(n1: number, n2: number): number {
  const result = n1 + n2;
  // return `Final output is ${result}`
  return result;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
