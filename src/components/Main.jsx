import { useState, useRef, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";
import Markdown from "react-markdown";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeFromMistral, setRecipeFromMinstral] = useState("");
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipeFromMistral && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeFromMistral]);

  // Add ingredients to list of ingredients
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    newIngredient &&
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // Get recipe from Mistral
  async function getRecipe(currentIngredients) {
    try {
      const response = await getRecipeFromMistral(currentIngredients);
      setRecipeFromMinstral(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      console.log("Response completed");
    }
  }

  // Components to be rendered
  return (
    <main>
      <form
        action={addIngredient}
        className="add-ingredient-form"
        autoComplete="off"
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
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={() => getRecipe(ingredients)}
        />
      )}

      {recipeFromMistral ? (
        <ClaudeRecipe
          recipeFromMistral={<Markdown>{recipeFromMistral}</Markdown>}
        />
      ) : null}
    </main>
  );
}
