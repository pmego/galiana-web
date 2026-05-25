import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_galiana.png"
import bolso from "../../assets/imagenes/bolso.png"
import { useState } from "react";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import fb from "../../assets/imagenes/icons/footer/facebook.png";
import tiktok from "../../assets/imagenes/icons/footer/tiktok.png";
import ig from "../../assets/imagenes/icons/footer/instagram.png";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-white shadow-xl z-50">
            <nav className="flex items-center justify-between px-8 max-w-7xl mx-auto py-4">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Galiana Boutique Floral"
                            className="h-6 md:h-10 w-auto cursor-pointer transition duration-700 hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Menú */}
                <div className="hidden md:flex items-center gap-8">

                    {/* MENÚ */}
                    <ul className="flex items-center gap-10 text-md font-bold tracking-wide font-montserrat">

                        <li className="relative group pr-5">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-primary font-bold`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Home

                                        <span
                                            className={`
                        absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left transition-transform duration-1000 ease-out
                        ${isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                                }
                    `}
                                        />
                                    </>
                                )}
                            </NavLink>
                        </li>

                        <li className="relative group flex items-center justify-center">
                            <NavLink
                                to="/productos"
                                className={({ isActive }) =>
                                    `group flex items-center gap-1 border px-6 py-4 rounded-xl transition duration-700
                                    ${isActive
                                        ? "bg-primary text-white"
                                        : "text-primary hover:bg-primary hover:text-white"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <div
                                            className={`
                                                    w-7 h-7 transition duration-700
                                                    ${isActive
                                                    ? "bg-white"
                                                    : "bg-primary group-hover:bg-white"
                                                }
                `}
                                            style={{
                                                WebkitMaskImage: `url(${bolso})`,
                                                maskImage: `url(${bolso})`,
                                                WebkitMaskRepeat: "no-repeat",
                                                maskRepeat: "no-repeat",
                                                WebkitMaskSize: "contain",
                                                maskSize: "contain",
                                                WebkitMaskPosition: "center",
                                                maskPosition: "center",
                                            }}
                                        />

                                        <span>Nuestra colección</span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>

                    {/* REDES */}
                    <div className="flex items-center gap-4">

                        <a
                            href="https://www.facebook.com/profile.php?id=61585243520080"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition duration-500 hover:scale-110"
                        >
                            <img src={fb} className="w-8 h-8 object-contain" />
                        </a>

                        <a
                            href="https://www.tiktok.com/@galiana.boutique"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition duration-500 hover:scale-110"
                        >
                            <img src={tiktok} className="w-8 h-8 object-contain" />
                        </a>

                        <a
                            href="https://www.instagram.com/galiana.floreria/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition duration-500 hover:scale-110"
                        >
                            <img src={ig} className="w-8 h-8 object-contain" />
                        </a>

                    </div>
                </div>

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