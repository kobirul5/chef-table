

const Sidebar = ({ recipeCook, handleDeleteWantToCook, currentlyCook, handleTimeCalories, totalTime, totalCalories }) => {

    return (
        <div className="md:w-1/3">
            <div className="card border">
                <div className="card-body items-center text-center px-0">
                    <h2 className="card-title font-bold">Want to Cook:- {recipeCook.length}</h2>
                    <hr className="w-10/12" />
                    {/* want to cook  */}
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        recipeCook.map((recipe, idx)=><tr key={idx} className="hover">
                                        <th>{idx+1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time} min</td>
                                        <td>{recipe.calories} calories</td>
                                        <td><button onClick={()=>{handleDeleteWantToCook(recipe.recipe_id),handleTimeCalories(recipe.preparing_time,recipe.calories)}}
                                        className="btn bg-green-500 rounded-full">Processing</button></td>
                                    </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* complete */}
                    <div className="card-body items-center text-center px-0">
                    <h2 className="card-title font-bold">Currently Cooking:- {recipeCook.length}</h2>
                    <hr className="w-10/12" />
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        currentlyCook.map((recipe, idx)=><tr key={idx} className="hover">
                                        <th>{idx+1}</th>
                                        <td>{recipe.recipe_name}</td>
                                        <td>{recipe.preparing_time} min</td>
                                        <td>{recipe.calories} calories</td>
                                        
                                    </tr>)
                                    }
                                    <tr className="hover">
                                        <th></th>
                                        <td></td>
                                        <td>Total Time: {totalTime}</td>
                                        <td>Total calories: {totalCalories}</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;