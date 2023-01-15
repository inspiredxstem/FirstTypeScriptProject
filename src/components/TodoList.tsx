import React, { useRef } from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default TodoList;
