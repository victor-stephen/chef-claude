<<<<<<< HEAD
export default function Main() {
  return (
    <main>
      <form className="add-ingredient-form">
=======
import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
>>>>>>> draft/heuristic-fog
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
<<<<<<< HEAD
        />
        <button>Add ingredient</button>
      </form>
=======
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul id="ingredients-list">{ingredientsListItems}</ul>
>>>>>>> draft/heuristic-fog
    </main>
  );
}
