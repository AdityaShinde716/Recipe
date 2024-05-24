// src/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-item">
          {recipe.title}
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
