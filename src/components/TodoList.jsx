import React, { useState } from "react"
import TodoForm from "./TodoForm"
import { GrEdit } from "react-icons/gr"
import { RiDeleteBin5Fill } from "react-icons/ri"

function TodoList({ todos, updateTodo, removeTodo, completeTodo }) {

  // Permet d'éditer la valeur stockée dans la liste
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  })


  // Permet de réinintialiser le formulaire une fois la tâche modifiée
  const submitUpdate = (value) => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: "",
    })
  }

  //cette ligne de code permet de vérifier si un élément a été sélectionné pour modification, et si oui, de rendre un formulaire pré-rempli avec les informations de cet élément pour permettre à l'utilisateur de le modifier.
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) => (
    <>
      <div
        className={todo.isComplete ? "todo-complete" : "todo-container"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>

        <div className="icons">
          <RiDeleteBin5Fill
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <GrEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    </>
  ));
}


export default TodoList
