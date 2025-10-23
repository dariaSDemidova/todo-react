import { useNavigate, useParams } from "react-router-dom";
import { ToDo } from "../models/todo-item";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewListItem = () => {
  const todolist = useSelector((state: RootState) => state.todoList.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const searchTodo = todolist.find((todo) => String(todo.id) === id);

    if (searchTodo) {
      setTodo(searchTodo);
    } else {
      navigate("/404");
    }
  }, [todolist, id, navigate]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
