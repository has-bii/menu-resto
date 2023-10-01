import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"

export default function Navbar() {
    const location = useLocation()
    const [showNav, setShowNav] = useState(false)

    return (
        <div className="flex flex-row items-center gap-4 justify-between py-6 px-4 lg:px-0 overflow-hidden">
            {/* Logo */}
            <Logo />

            {/* Navlist */}
            <ul className={`navlist ${showNav ? "show-nav" : ""}`}>
                <li className="block lg:hidden text-white">
                    <button onClick={() => setShowNav(!showNav)}>
                        <FontAwesomeIcon icon={faBars} size="xl" />
                    </button>
                </li>
                <li>
                    <Link
                        to={"/"}
                        className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
                    >
                        <span>home</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/feature"}
                        className={`nav-item ${location.pathname === "/feature" ? "active" : ""}`}
                    >
                        <span>feature</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/pricing"}
                        className={`nav-item ${location.pathname === "/pricing" ? "active" : ""}`}
                    >
                        <span>pricing</span>
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/developer"}
                        className={`nav-item ${location.pathname === "/developer" ? "active" : ""}`}
                    >
                        <span>developer</span>
                    </Link>
                </li>
                <li className="block lg:hidden">
                    <Link
                        to={"/auth"}
                        className="capitalize px-4 py-2 rounded-full font-semibold border border-white text-white hover:bg-white hover:text-orange-500 transition-colors duration-150 ease-in"
                    >
                        sign in
                    </Link>
                </li>
            </ul>

            <button className="lg:hidden block" onClick={() => setShowNav(!showNav)}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </button>

            {/* Signin */}
            <Link
                to={"/auth"}
                className="capitalize hidden lg:block px-4 py-2 rounded-full font-semibold border border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 transition-colors duration-150 ease-in"
            >
                sign in
            </Link>
        </div>
    )
}