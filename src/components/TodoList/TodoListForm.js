import React, { useState } from "react"
import './style.css'

const TodoListForm = (props) => {

    const [task, setTask] = useState()

    const handleChange = (event) => {
        let newTask = event.target.value
        setTask(newTask)
    }

    const handleAddTaskLis = () => {
        if (task !== "") {
            props.addTaskList(task)
            setTask('')
        }

    }

    return (
        <div>
            <form >
                <input type="text" placeholder="Adicionar tarefas"
                    value={task} onChange={handleChange}
                    className="input-task"
                />
                <button type="button" onClick={handleAddTaskLis}
                    className="button-task">
                    Adicionar
                </button>
            </form>
        </div>
    )
}

export default TodoListForm