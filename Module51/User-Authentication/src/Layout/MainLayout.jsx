import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

function MainLayout() {
  return (
    <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </section>
  )
}

export default MainLayout
