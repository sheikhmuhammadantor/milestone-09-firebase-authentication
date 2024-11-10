import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Home"

function MainLayout() {
  return (
    <section className="container mx-auto">
      <Header></Header>
      <section className="min-h-[60vh]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </section>
  )
}

export default MainLayout
