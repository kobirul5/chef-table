import Banner from "./components/Banner"
import Header from "./components/Header"
import OurRecipes from "./components/OurRecipes"


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
    </div>
    </>
  )
}

export default App
