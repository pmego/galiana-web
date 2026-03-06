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
                    <li className="border-primary pr-5">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-bold transition-all duration-700"
                                    : "text-primary/30 transition-all duration-700"
                            }
                        >
                            Home

                        </NavLink>

                    </li>
                    <div className="hidden md:block w-0.5 h-4 bg-primary mx-6"></div>

                    <li className="flex items-center justify-center">

                        <NavLink
                            to="/productos"
                            className={({ isActive }) =>
                                `flex items-center gap-1 transition-all duration-500 ${isActive
                                    ? "opacity-100 text-primary font-bold"
                                    : "opacity-20 text-primary"
                                }`
                            }
                        >
                            <img
                                src={bolso}
                                alt="icono colección"
                                className="w-9 h-6"
                            />
                            <span>Nuestra colección</span>
                        </NavLink>
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
                className={`md:hidden bg-white shadow-lg transition-all duration-1500 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                                className="w-5 h-5"
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