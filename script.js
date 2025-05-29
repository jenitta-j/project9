const recipes = [
  {
    title: "Spaghetti Bolognese",
    ingredients: ["Spaghetti", "Minced Meat", "Tomato Sauce", "Onions", "Garlic"],
    instructions: "Boil spaghetti. Cook meat with onions and garlic. Add tomato sauce. Mix together and serve."
  },
  {
    title: "Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Butter", "Sugar"],
    instructions: "Mix all ingredients. Pour batter into pan and cook both sides until golden. Serve with syrup."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter the bread. Place cheese between slices. Grill until golden brown on both sides."
  }
];

function displayRecipeList() {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.textContent = recipe.title;
    card.onclick = () => showRecipe(index);
    recipeList.appendChild(card);
  });
}

function showRecipe(index) {
  const detail = document.getElementById("recipeDetail");
  const recipe = recipes[index];

  detail.innerHTML = `
    <h2>${recipe.title}</h2>
    <h3>Ingredients:</h3>
    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
    <h3>Instructions:</h3>
    <p>${recipe.instructions}</p>
  `;
}

window.onload = displayRecipeList;
