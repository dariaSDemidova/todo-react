import { ToDo } from "../../models/todo-item";
import { ListItemContainer } from "./ListItem.styled";

export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemContainer
      $isDone={todo.isDone}
      target="_blank"
      rel="noreferrer"
      href={`list/${todo.id}`}
    >
      {todo.text}
    </ListItemContainer>
  );
};
