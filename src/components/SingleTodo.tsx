import React, { useRef, useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const inputRef = useRef<HTMLInputElement>(null)
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((td) => {
        return td.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };
  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((td) => {
        return td.id !== id;
      })
    );
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((td) => {
        return td.id === id ? { ...todo, todo: editTodo } : todo;
      })
    );
    setEdit(false);
  };
  useEffect(()=> {
    inputRef.current?.focus();
  }, [edit])

  return (
    <form
      className="singleTodo"
      onSubmit={(e) => {
        handleEdit(e, todo.id);
      }}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => {
            setEditTodo(e.target.value);
          }}
          className="singleTodoText"
        />
      ) : todo.isDone ? (
        <s className="singleTodoText">{todo.todo}</s>
      ) : (
        <span className="singleTodoText">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
