import { useState } from "react"
import { toast } from "react-toastify";
import AddReaction from "./AddReaction";

const TodoAnimation = () => {

    const [todoTitle, SetTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);

     const onAddTodo = () => {
        if(!todoTitle) {
            toast.error("Enter TodoTitle");
            return;
        }
        setTodoList((prevData) => [...prevData, todoTitle]);
        SetTodoTitle("");

     }
    return(
        <>
        <div>
            <p>Todo List</p>
            <input type="text"
            placeholder="Enter Todo here"
            value={todoTitle}
            onChange={(e) => SetTodoTitle(e.target.value)} />
            <button onClick={onAddTodo}>Add Todo</button>
        </div>
        <div>
            <h3>My Todo List</h3>
            {todoList?.length > 0 ? (
                <ul>
                {
                    todoList.map((item,index) => {
                       return <li key={index}>
                        {item}
                        <AddReaction />
                       </li>
                    })
                }
                </ul>
            ) :(
                <p>No Todo available</p>
            )}
            
        </div>
        </>
    )
} 

export default TodoAnimation;