import ramo from "../../assets/imagenes/ramo.webp";
import icon from "../../assets/imagenes/icons/rosa_icon.png"
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Nosotros() {
    return (
        <section className="relative bg-background pt-16 overflow-hidden">

            {/* Contenido */}
            <div className="mx-auto grid max-w-7xl xl:grid-cols-2 grid-cols-1 md:gap-16 px-6 items-center">

                {/* Texto */}
                <div className="max-w-xl mb-15 mx-auto text-center xl:text-left">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl text-primary font-cornelia tracking-wide">
                        Donde el diseño se encuentra<br className="hidden sm:block" /> con la <br className="hidden sm:block" /> naturaleza
                    </h2>
                    <p className="mt-6 md:mt-10 max-w-md mx-auto xl:mx-0 text-secondary text-base md:text-lg font-montserrat font-normal">
                        Creamos piezas florales únicas, diseñadas para transformar tus emociones en un gesto de absoluta sofisticación.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-start justify-center xl:justify-start items-center gap-4 mt-8 md:mt-12 font-montserrat">
                        <NavLink
                            to="/productos"
                            className="border border-primary rounded-xl py-3 px-6 md:py-4 md:px-8 text-primary text-base md:text-lg font-semibold transition duration-700 hover:bg-primary hover:text-white"
                        >
                            <span>Ver Colección</span>
                        </NavLink>
                        <a
                            href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                `Hola, quiero comprar un ramo para alguien especial`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 md:gap-3 py-3 px-6 md:py-4 md:px-7 bg-primary text-white rounded-xl text-base md:text-lg font-semibold hover:scale-104 transition-all duration-700"
                        >
                            <FaWhatsapp size={22} />
                            COMPRAR
                        </a>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex md:hidden xl:flex justify-center md:justify-end pb-7 md:pb-0 -mt-7 md:mt-0">
                    <img
                        src={ramo}
                        alt="Ramo"
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain"
                    />
                </div>
            </div>

            {/* Divisor inferior */}
            <div className="relative -mt-7 mb-20 flex items-center justify-center">
                {/* Línea izquierda */}
                <div className="absolute left-0 right-0 top-1/2 h-1 md:h-1.25 -translate-y-1/2 bg-primary" />

                {/* Ícono */}
                <div className="relative hidden md:block z-10 bg-background px-6">
                    <img
                        src={icon}
                        alt="Decoración Floral"
                        className="h-14 w-auto"
                    />
                </div>

                {/* Línea derecha */}
                <div className="absolute left-0 right-0 top-1/2 h-1 md:h-1.25 -translate-y-1/2 bg-primary" />
            </div>
        </section>
    )
}

export default Nosotros;