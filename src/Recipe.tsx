import React from 'react';
import { IRecipeProps } from './types';

//receipty data
const Recipe : React.FC<IRecipeProps > =({ recipeData  }) =>{
    console.log("recipe data single: ",recipeData);
    
    return(
        <div>
            <h3>{recipeData.name}</h3>
            <p><strong>Ingrediences</strong></p>
            //get the ingredience from the view_array and display the details in unordered array
            <ul>
                {recipeData.ingredients.map(i =>(
                    <li key={i}>{i}</li>
                ))}
            </ul>
            //get the instructions to a ordered array
            <ul>
                {recipeData.instructions.map(instruction =>(
                     <li key={instruction}>{instruction}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;