// src/App.js
import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import './App.css';

const App = () => {
  const recipes = [
    { id: 1, title: 'Chicken Biryani' },
    { id: 2, title: 'Paneer Butter Masala' },
    { id: 3, title: 'Masala Dosa' },
    { id: 4, title: 'Rogan Josh' },
    { id: 5, title: 'Chole Bhature' },
    { id: 6, title: 'Palak Paneer' },
    { id: 7, title: 'Butter Chicken' },
    { id: 8, title: 'Aloo Gobi' },
    { id: 9, title: 'Fish Curry' },
    { id: 10, title: 'Lamb Vindaloo' },
    { id: 11, title: 'Samosa' },
    { id: 12, title: 'Gulab Jamun' },
  ];

  return (
    <div className="App">
      <Header />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

