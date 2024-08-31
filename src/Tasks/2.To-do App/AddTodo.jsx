import { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={handleChange}
      />
      <button onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}

export default AddTodo;
