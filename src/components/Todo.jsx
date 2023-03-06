import React, { useState } from "react"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

function Todo() {
  // Utilisation du hook useState pour créer une variable d'état todos qui contiendra une liste de tâches à faire. La valeur initiale de todos est un tableau vide, et setTodos est une fonction qui peut être utilisée pour mettre à jour la valeur de todos.
  const [todos, setTodos] = useState([])

  //Création d'une fonction addTodo qui prend un argument todo et ajoute cet élément à la liste todos en utilisant la méthode Array.unshift() pour insérer l'élément au début de la liste. Ensuite, la fonction met à jour la valeur de todos en appelant la fonction setTodos avec la nouvelle liste de tâches.
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  // Cette fonction permet de mettre à jour la liste des todos. Elle utilise la méthode map() pour parcourir chaque élément de la liste et retourne une nouvelle liste avec la modification souhaitée.
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  // Fonction permettant de supprimer un élément spécifique dans la liste de todos.
  const removeTodo = (id) => {
    // La syntaxe ...todos signifie qu'une copie superficielle (shallow copy) de la liste originale est créée. Cela garantit que la liste originale n'est pas modifiée directement.

    //Enfin, la fonction de rappel setTodos est appelée avec le nouvel array créé par la méthode filter(). Cela met à jour la liste de tâches (todos) dans le state de la composante React, ce qui déclenchera une mise à jour de l'interface utilisateur.
    const removeArr = [...todos].filter((todo) => todo.id !== id)
    setTodos(removeArr)
  }

  // La fonction commence par créer une variable updatedTodos en utilisant la méthode map() sur la liste de tâches à faire todos. La méthode map() crée une nouvelle liste en appliquant une fonction à chaque élément de la liste originale.

  //La fonction passée à map() prend chaque élément de todos en tant que paramètre (nommé todo dans ce cas) et vérifie si l'id de cet élément correspond à l'id passé en paramètre de la fonction completeTodo. Si l'id correspond, la propriété isComplete de l'élément todo est inversée (passée de true à false ou vice versa) en utilisant l'opérateur de négation logique !.

  // Enfin, la fonction map() renvoie l'élément todo, qu'il soit modifié ou non, et cette valeur est stockée dans la variable updatedTodos.

  //Finalement, la fonction setTodos() est appelée avec la variable updatedTodos en tant que paramètre pour mettre à jour l'état de la liste de tâches à faire. En d'autres termes, la fonction completeTodo() met à jour l'état de la tâche spécifiée par l'id pour marquer la tâche comme terminée ou non terminée.

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h1 className="header">Add your to do list here</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completedTodo={completeTodo}
      />
    </div>
  )
}

export default Todo
