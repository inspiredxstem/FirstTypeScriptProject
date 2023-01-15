import React, {useState} from 'react';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from './model'
import './App.css';


/* 
// Types that TypeScript allows - Strict Type Checking
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

function printName(name: string) {
  console.log(name)
}
printName("Steven") 

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
} */

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("") //define a string with the brackets <>
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
    setTodo("")
  };

  console.log(todo)
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
