import React, { useState } from 'react';

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Make API request with searchTerm
    // Replace API_KEY with your actual API key
    fetch(`https://api.example.com/recipes?search=${searchTerm}&apiKey=APIKEY`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.results))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter ingredients or dietary preferences"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeFinder;
