import React from 'react';
import Recipe from './Recipe';
import { IRecipeListProps } from './types';


const RecipeList : React.FC<IRecipeListProps> =({ recipes }) =>{
    console.log("display recipe list ",recipes);
    
    return(
        <div>
            {recipes.map((r) =>(
               <Recipe key={r.id} recipeData={r} />
            ))}
        </div>
    )
}

export default RecipeList;