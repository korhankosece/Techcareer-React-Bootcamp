import { useContext, useState } from "react"
import ToDoContext from "../contexts/TodoContext"

const AddTodo = () => {
    const { todoList, setTodoList } = useContext(ToDoContext)
    const [todo, setTodo] = useState({ title: '', description: '' })

    const addTodo = () => {
        const { title, description } = todo;
        if (title && description) {
            const _todo = { title, description }
            // setTodoList(prev => [...todoList, _todo])
            setTodoList([...todoList, _todo])
            // setTodoList(prev => [...prev, _todo])
        }
    }

    return (
        <>
            <div>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTodo(prev => { return { ...prev, title: e.target.value } })} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => setTodo(prev => { return { ...prev, description: e.target.value } })} />
            </div>
            <div>
                <button onClick={addTodo}>Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo