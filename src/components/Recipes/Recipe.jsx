import { IoMdTime } from "react-icons/io";

const Recipe = ({ recipe, handelWantToCook}) => {
    const { recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories } = recipe


    return (
        <div >
            <div className="card border ">
                <figure className="px-5 pt-5">
                    <img
                        src={recipe_image}
                        alt={recipe_name}
                        className="rounded-xl h-48 w-full" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-2xl">{recipe_name}</h2>
                    <p className="text-[#878787]">{short_description}</p>
                    <hr />
                    <h2 className="text-xl font-semibold">Ingredients: {ingredients.length}</h2>
                    <ul className=" list-disc ml-6 text-[#878787] ">
                        {
                            ingredients.map(ingredient=> <li>{ingredient}</li>)
                        }
                    </ul>
                    <hr />
                    <div className="flex text-[#878787]">
                        <p ><i className="fa-regular fa-clock"></i> {preparing_time} min</p>
                        <p><i className="fa-solid fa-fire"></i> {calories} calories</p>
                    </div>
                    <div className="card-actions mt-4">
                        <button onClick={()=>handelWantToCook(recipe)}
                         className="btn px-10 bg-green-500 rounded-full font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;