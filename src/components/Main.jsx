import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  // State variables
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato pasta",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  // Eventhandler function
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function getRecipe() {
    setRecipeShown((prevShown) => !prevShown);
  }

  // Components to be rendered
  return (
    <main>
      <form
        action={addIngredient}
        className="add-ingredient-form"
      >
        <input
          type="text"
          placeholder="e.g oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
