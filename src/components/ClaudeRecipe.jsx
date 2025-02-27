export default function ClaudeRecipe({recipeFromMistral}) {
  return (
    <section className="suggested-recipe-container" arial-live="polite">
      <h2>Chef Claude Recommends:</h2>
      {recipeFromMistral}
    </section>
  );
}
