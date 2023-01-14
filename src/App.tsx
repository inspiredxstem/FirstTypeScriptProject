import React from 'react';
import InputField from './components/InputField'
import './App.css';

// Types that TypeScript allows - Strict Type Checking
/* eslint-disable  */
let name: string;
let age: number | string; // | -> Union Type 
let isChecked: boolean;
let hobbies: string[]; // array of strings
let role: [number, string]; // Tuple

// TypeScript Alias: type and interface
type Person = {
  name: string;
  age?: number; // ? makes property optional
}
let person: Person = {
  name: "Steven",
  age: 22,
};

let lotsOfPeople: Person[];

// difference between void and never: void returns undefined, never doesn't return anything
let printName: (name: string) => void;

// function printName(name: string) {
//   console.log(name)
// }
// printName("Steven")

interface newPerson {
  name: string;
  age?: number;
}

interface Guy extends newPerson{
  profession: string;
}

type X = Person & {
  a: string;
  b: number;
}
/* eslint-disable*/

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
}

export default App;
