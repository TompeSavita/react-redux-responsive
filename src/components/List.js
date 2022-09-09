import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodos } from "../store/slice/todolist";
import './TodoItem.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, status } = useSelector((state) => state.todoList);
  return (
    <div >
    <div  className="main">
      <h1 className="header">Todo-list</h1>
      <button
        onClick={() => {
          dispatch(getTodos());
        }}
      >
        Get Todos
      </button>
      </div>
      <p> {status}</p>
      <div className="todolist">
        {todos.map((todo, i) => {
          return <TodoItem {...todo} key={i} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
