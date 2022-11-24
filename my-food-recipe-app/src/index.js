import ReactDOM from 'react-dom/client';
import React,{useEffect,useState} from "react";
import Recipe from './recipe';
import './App.css';

const App = () => {

  const APP_ID = "af0418f0";
  const APP_KEY = "0b232f021ed22a658278dcc5ead31f5f";
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] =useState('chicken');

  
  useEffect(() =>{
    getRecipes();
    console.log("effect only runs 1 time now");
  },[query]);
  
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} ></input>
          <button className="search-button" type="submit">
            fesf 
          </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label} // to avoid re-rendering the whole thing we assing a key value
        title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );

};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);