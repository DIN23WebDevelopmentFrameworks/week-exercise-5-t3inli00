import React from 'react';
import { IRecipeTagProps } from './types';

const RecipeTag : React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) =>{
    return(
        <div>
            <button onClick={ () => onSelectTag(tagName)}> { tagName } </button>
        </div>
    );
}

export default RecipeTag;