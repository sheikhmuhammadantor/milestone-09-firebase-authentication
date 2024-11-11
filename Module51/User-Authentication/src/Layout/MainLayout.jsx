import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function MainLayout() {
  return (
    <section className="container mx-auto flex flex-col justify-between min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  )
}

export default MainLayout
