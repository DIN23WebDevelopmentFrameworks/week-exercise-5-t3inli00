// define the interface for the receipe object
export interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

//interface for the receipe props
export interface IRecipeProps {
    recipeData: IRecipe;
}

//interface for receipe list
export interface IRecipeListProps {
    recipes: IRecipe[];
}

//interface for receipe tag
export interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

//interface for receipe tag list
export interface IRecipeTagListProps { 
    tagList: string[]; 
    onSelectTag: (tagName: string) => void; 
}
