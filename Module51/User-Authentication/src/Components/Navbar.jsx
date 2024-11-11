import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";

function Navbar() {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="login">Log In</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
    </>

    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-lg">
                        <FaBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">UserAuthentication</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button ><Link className="btn">Sign Out</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Navbar
