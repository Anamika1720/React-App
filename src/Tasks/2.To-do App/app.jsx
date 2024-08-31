import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import TaskList from './TaskList.jsx';

let nextId = 3;

const TaskApp = () => {
  const [todos, setTodos] = useState([
    { id: 0, title: 'Apple', done: true },
    { id: 1, title: 'Litchi', done: false },
    { id: 2, title: 'Mango', done: false }
  ]);

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title,
        done: false
      }
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(todos.map(t => t.id === nextTodo.id ? nextTodo : t));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter(t => t.id !== todoId));
  };

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default TaskApp;
