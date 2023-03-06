import React, {  useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';

function Todo() {

  // Cette ligne utilise le hook useState pour créer une variable d'état todos qui contiendra une liste de tâches à faire. La valeur initiale de todos est un tableau vide, et setTodos est une fonction qui peut être utilisée pour mettre à jour la valeur de todos.
  const [todos, setTodos] = useState([]);

  //Cette ligne définit une fonction addTodo qui prend un argument todo et ajoute cet élément à la liste todos en utilisant la méthode Array.unshift() pour insérer l'élément au début de la liste. Ensuite, la fonction met à jour la valeur de todos en appelant la fonction setTodos avec la nouvelle liste de tâches.
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  return (
    <div>
      <h1>Add your to do list here</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default Todo