import React, { useState } from 'react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://wf-backend.onrender.com/recipes?ingredient=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      console.log(data);
      setRecipes(data);
      setShow(true);
      setError(null); // Reset error state if fetch is successful
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
      setError('No recipes found for the provided ingredient');
      // You can choose to reset recipes or not, based on your requirement
      setRecipes([]); // Reset recipes to an empty array
      setShow(false); // Hide the recipes list
    }
  };
  

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
      <div>
        {error && <p>{error}</p>}
        {recipes.length === 0 && show && !error ? (
          <div>
            <p>No recipes found for the provided ingredient</p>
          </div>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <li>{recipe.title}</li>
              <h6>Ingredients</h6>
              <ul>
                {recipe.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
        
      </ul>
    </div>
  );
};

export default RecipeSearch;
