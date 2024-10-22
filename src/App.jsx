import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes/recipes"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {


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
          <Recipes></Recipes>
          {/* sidebar*/}
          <Sidebar></Sidebar>
        </section>
    </div>
    </>
  )
}

export default App
