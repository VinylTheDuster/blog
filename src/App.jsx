import { Outlet } from "react-router"
import Header from "./components/Header/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">
        <Outlet /> {/* Chemin de router => affiche la page actuel */}
      </div>
      <Footer />
    </div>
  )
}

export default App