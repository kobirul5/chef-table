
const Recipe = ({ recipe }) => {
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
                        <p>{preparing_time} min</p>
                        <p>{calories} calories</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn bg-green-500 font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;