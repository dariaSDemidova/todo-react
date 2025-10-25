import { ToDo } from "../../models/todo-item";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDoContainer, ToDoListStyled } from "./ToDoList.styled";

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const uncheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <ToDoContainer>
      <ToDoListStyled>{checkedList()}</ToDoListStyled>
      <ToDoListStyled>{uncheckedList()}</ToDoListStyled>
    </ToDoContainer>
  );
};
