import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function MainLayout() {
  return (
    <section className="container mx-auto">
      <Navbar></Navbar>
      <section className="min-h-[70vh]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </section>
  )
}

export default MainLayout
