// Primitives: number, string, boolean

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//More complex types: arrays, objects

let hobbies: string[]; // we want to have ana array of strings
hobbies = ["Cooking", "Coding", "more"];

let person: {
	name: string;
	age: number;
};
person = {
	name: "John",
	age: 18,
};

// Type inference
let course = "React - The Complete Guide";
//the variable is automaticaly assigned a type according to the type its value is assigned from typescript, so we can not assign an other type

// We can have multiple types on a variable:
// The Union type
let course2: string | number = "React - The Complete Guide";
course2 = 321321;

// Type Aliases
//define the alias
type Person = {
	name: string;
	age: number;
};

let person2: Person;
let people2: Person[];

// Functions & types

function adding(a: number, b: number): number {
	return a + b;
}

function printOutput(value: any) {
	console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // output: [-1, 1, 2, 3]

updatedArray[0].split(""); // gives no error

//defining generic type
function insertAtBeginning2<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}
const demoArray2 = [1, 2, 3];
const updatedArray2 = insertAtBeginning2(demoArray2, -1); // output: [-1, 1, 2, 3]

// updatedArray2[ 0 ].split( '' ); // gives error
