import { useState } from 'react'

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const TodoApp = () => {
    const [todoList, setTodoList] = useState([{ id: 1, title: 'Temizlik', description: 'Odayı toplamalısın', isCompleted: false }]);
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })

    const addTodo = () => {
        const { title, description } = todo;
        const newTodo = {
            id: uuidv4(),
            title: title,
            description: description,
            isCompleted: false
        }

        setTodoList(prev => [...prev, newTodo])
    }

    const deleteTodo = (id) => {
        if (id) {
            const filteredData = todoList.filter(q => q.id !== id)
            setTodoList([...filteredData])
        }
    }

    const deleteAll = () => {
        // setTodoList(null)
        setTodoList([])
    }

    const completeTodo = (id) => {
        let toDo = todoList.find(q => q.id === id)
        toDo.isCompleted = !toDo.isCompleted
        setTodoList([...todoList])

        //Bakılacak
        // setTodoList(prev => {
        //     let toDo = prev.find(q => q.id === id)
        //     console.log(toDo);
        //     toDo.isCompleted = !toDo.isCompleted
        //     return [...prev]
        // })
    }

    const completeAll = () => {
        const _todoList = todoList.map((todo) => {
            todo.isCompleted = true;
            return todo
        })

        setTodoList([..._todoList])
    }

    return (
        <>
            <div>
                <label htmlFor="">Title:</label>
                <input type="text" onChange={(e) => setTodo(prevState => { return { ...prevState, title: e.target.value } })} />
            </div>

            <div>
                <label htmlFor="">Description:</label>
                <input type="text" onChange={(e) => setTodo(prevState => { return { ...prevState, description: e.target.value } })} />
            </div>

            <div>
                <button onClick={addTodo}>Add Todo</button>
                <button onClick={completeAll}>Complete All</button>
                <button onClick={deleteAll}>Delete All</button>
            </div>

            <ul>
                {
                    todoList && todoList.map((todo, key) => (
                        <li key={key} style={{ backgroundColor: todo.isCompleted ? 'tomato' : null }}>
                            {todo.title} / {todo.description}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => completeTodo(todo.id)}>Complete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default TodoApp