import React, { useEffect } from 'react'
import './Todos.css'

const Todos = (props) => {
    console.log('props Todos', props)

    const { setState } = props

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => {
                const fiveFirstTodos = data.slice(0, 5);
                setState((state) => ({ ...state, todos: fiveFirstTodos }))
            })
    }, [])

    const renderTodos = () => (
        props.todos.map((todo, i) => (
            <li className="todos-widget-list-item" key={todo.id}>
                - {todo.title}
            </li>
        ))
    )

    return (
        <div className="todos-widget">
            <ul className="todos-widget-list">
                {renderTodos()}
            </ul>
        </div>
    )
}

export default Todos