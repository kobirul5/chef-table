import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handelWantToCook}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('./recipes.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
            {
                recipes.map(recipe=> <Recipe key={recipe.recipe_id}
                    recipe={recipe}
                    handelWantToCook={handelWantToCook}
                    ></Recipe>)
            }
        </div>
    );
};

export default Recipes;