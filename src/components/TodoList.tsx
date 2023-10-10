import React from "react";
import { Todo } from "../models/model";
import SingleTodos from "./SingleTodos";
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  //setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  //CompletedTodos: Array<Todo>;
}
const TodoList = ({ todos, setTodos }: props) => {
  return (
    <div>
      {todos?.map((todo, index) => (
        <SingleTodos
          //index={index}
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
