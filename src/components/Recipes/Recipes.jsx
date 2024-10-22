import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-6">
            {
                recipes.map(recipe=> <Recipe key={recipe.recipe_id}
                    recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;