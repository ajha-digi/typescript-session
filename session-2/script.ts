// boolean => yes/ no true/false 1/0

const isAdmin: boolean = true;
const isGuestUser: boolean = false;
const isOddNo: boolean = true;

// string

const test: string = "Ajeet";

// number

const age: number = 28;
const salary: number = 1000;

// object

type FullName = {
  name: string;
  address: string
}

type Person = {
  name: string;
  age: number;
  isAdmin: boolean;
  gender: string;
  fullName: FullName
};

const user: Person = {
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

const numbArray: [number, string, number] = [1, "two", 3];

const testArry: string[] = ["a", "b", "c", "d", "e"];

const test2Arry: (number | string)[] = [1, "one"];

// numbArray.push(5)

// union
let randomString: number | string | boolean;
randomString = 65;
randomString = "six";
randomString = false;

// enum
enum Color {
  red,
  blue,
  yellow,
}

const favColor: Color = Color.yellow;
