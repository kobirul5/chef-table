import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes/recipes"
import Sidebar from "./components/Sidebar/Sidebar"



function App() {
  const [recipeCook, setRecipeCook] = useState([])
  const [currentlyCook, setCurrentlyCook] = useState([])
  const [totalTime, setTime] = useState(0)
  const [totalCalories, setCalories] = useState(0)
  const handelWantToCook = recipe => {
    const isExit = recipeCook.find(pre => pre.recipe_id === recipe.recipe_id)
    if (!isExit) {
      setRecipeCook([...recipeCook, recipe])
    } else {
      alert('Already Exist in cooking items')
    }
  }
  const handleDeleteWantToCook = id => {
    const deleteRecipe = recipeCook.find(recipe=> recipe.recipe_id=== id)
    const updatedRecipe = recipeCook.filter(recipe=> recipe.recipe_id !==  id)
    setRecipeCook(updatedRecipe)
    setCurrentlyCook([...currentlyCook, deleteRecipe])
  }

  // time
 const handleTimeCalories = (time, calories) => {
  setTime(totalTime + parseInt(time))
  setCalories(totalCalories + parseInt(calories))
 }


  return (
    <>
      <div className="container mx-auto px-4">
        {/* header */}
        <Header></Header>
        {/* banner  */}
        <Banner></Banner>
        {/* Our Recipes */}
        <OurRecipes></OurRecipes>
        {/* cards */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* cards */}
          <Recipes handelWantToCook={handelWantToCook}></Recipes>
          {/* sidebar*/}
          <Sidebar recipeCook={recipeCook} 
                handleDeleteWantToCook={handleDeleteWantToCook}
                currentlyCook={currentlyCook}
                handleTimeCalories = {handleTimeCalories}
                totalTime={totalTime}
                totalCalories={totalCalories}
          ></Sidebar>
        </section>
      </div>
    </>
  )
}

export default App
