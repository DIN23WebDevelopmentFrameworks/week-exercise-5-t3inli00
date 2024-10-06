import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import RecipeTagList from "./RecipeTagList";
import { IRecipe } from "./types";

const App = () => {
//declare the states
const [tags,setTags] =useState<string []>([]);
const [selectedTag,setSelectedTag] =useState<string | null>(null);
const [recipes,setRecipes] =useState<IRecipe []>([]);

//load the recipe tags when the component is mount
useEffect(()=>{
  const fetchTags = async () => {
    const response = await fetch('https://dummyjson.com/recipes/tags');
    const data = await response.json();
    setTags(data);
  };

  fetchTags();
},[]);

//load the recipes when the tag is selected
const handleTagSelect = async (tagName: string) => {
  setSelectedTag(tagName);
  const response = await fetch(`https://dummyjson.com/recipes/tag/${tagName}`);
  const data = await response.json();
  setRecipes(data.recipes);
};

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        <RecipeTagList tagList={tags} onSelectTag={handleTagSelect} />
        {selectedTag && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default App;
