import { createContext, useState } from "react";

const ToDoContext = createContext(null);

export const ToDoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])

    const values = {
        todoList, setTodoList
    }


    return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>
}

export default ToDoContext;