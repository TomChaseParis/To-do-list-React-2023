import React, { useRef, useState } from 'react'

function TodoForm(props) {

  // Déclaration du useSTate
  const [input, setInput] = useState();

  // Créer une référence à un élément DOM (champ de formulaire)
  const inputRef = useRef(null);

  // Fonction mettant a jour la valeur de l'input qui sera saisie par l'utilisateur
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  // Fonction qui sera appelée lorsque l'utilisateur soumettra le formulaire
  const handleSubmit = (e) => {

    e.preventDefault();
    // L'appel de e.preventDefault() dans cette fonction de rappel est utilisé pour empêcher le comportement par défaut de l'événement. Par exemple, si la fonction de rappel est appelée lorsqu'un formulaire est soumis, le comportement par défaut serait de recharger la page. En appelant e.preventDefault(), cela empêchera la page de se recharger, ce qui peut être utile pour exécuter une logique personnalisée avant de soumettre le formulaire ou pour empêcher les utilisateurs de soumettre le formulaire par accident.


    // Fonction de rappel de onSubmit en passant deux propriétés.    
    props.onSubmit({

      // Fonction permettant de générer un nombre aléatoire en l'arrondissant à l'entier le plus bas et de créer une identité unique pour chaque élement dans une liste.
      id:Math.floor(Math.random() * 10000),
      text:input,
    })
    //  Cette ligne réinitialise la valeur de la variable input en lui assignant une chaîne de caractères vide. 
    setInput("");
  }

  return (
    <form>
      <>
      <input
            placeholder="Add your plan to list"
            value={input}
            onChange={handleChange}
            name="text"
            className="input-add"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="add-button">
            Add
          </button>
      </>
    </form>
  )
}

export default TodoForm