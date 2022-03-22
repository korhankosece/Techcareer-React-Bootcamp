import { useContext } from "react"
import ToDoContext from "../contexts/TodoContext"

const TodoList = () => {
    const { todoList } = useContext(ToDoContext)

    return (
        <ul>
            {todoList.length > 0 ? todoList.map((todo, key) => (
                <li key={key}>{todo?.title} - {todo?.description}</li>
            )) : 'ToDo ekleyiniz...'}
        </ul>
    )
}

export default TodoList