import React from 'react'

function TodoList({todos}) {
  return (
    <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <div key={todo.id}>{todo.text}</div>
          </div>
        ))}
    </div>
  )
}

export default TodoList