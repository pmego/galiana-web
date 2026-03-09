import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_galiana.png"
import bolso from "../../assets/imagenes/bolso.png"
import { useState } from "react";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-white shadow-xl z-50">
            <nav className="flex items-center justify-between px-8 max-w-7xl mx-auto">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Galiana Boutique Floral"
                            className="h-14 md:h-20 w-auto cursor-pointer transition duration-700 hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Menú */}
                <ul className="hidden md:flex items-center gap-10 text-md font-bold tracking-wide font-montserrat">
                    <li className="relative group pr-5">
                        <NavLink
                            to="/"
                            className="text-primary font-bold"
                        >
                            Home
                        </NavLink>

                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-100"></span>
                    </li>
                
                    <li className="relative group flex items-center justify-center">
                        <NavLink
                            to="/productos"
                            className="flex items-center gap-1 text-primary font-bold"
                        >
                            <img
                                src={bolso}
                                alt="icono colección"
                                className="w-9 h-6"
                            />
                            <span>Nuestra colección</span>
                        </NavLink>

                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-x-0 origin-left transition-transform duration-1000 ease-out group-hover:scale-x-110"></span>
                    </li>
                </ul>

                {/* MENÚ MOBILE */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <HiOutlineX size={28} />
                    ) : (
                        <HiOutlineMenu size={28} />
                    )}
                </button>
            </nav>

            {/* MENÚ MOBILE */}
            <div
                className={`md:hidden bg-white shadow-lg transition duration-1000 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold text-primary">
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li onClick={() => setIsOpen(false)}>
                        <NavLink
                            to="/productos"
                            className="flex items-center gap-2"
                        >
                            <img
                                src={bolso}
                                alt="ícono colección"
                                className="w-6 h-4"
                            />
                            Nuestra Colección
                        </NavLink>
                    </li>
                </ul>

            </div>

        </header>
    )
}

export default Header;