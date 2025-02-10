import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  /* 
    Challenge:
    * Using conditional rendering, only render new <section>
   * If there are ingredients added to the list of ingredients.
   */

  return (
    <main>
      <form
        action={addIngredient}
        className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul
            className="ingredients-list"
            aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length > 3 && <div className="get-recipe-container">
            <div>
              <h3>Ready for a reciper?</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button>Get a recipe</button>
          </div>}
        </section>
      )}
    </main>
  );
}
