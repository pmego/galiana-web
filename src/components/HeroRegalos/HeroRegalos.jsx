import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import bg from "../../assets/imagenes/heroRegalos.jpg";

function HeroRegalos() {
    return (
        <section
            className="relative h-162.5 sm:h-187.5 md:h-200 lg:h-212.5 bg-center bg-cover overflow-hidden"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Contenido */}
            <div className="relative z-10 h-full max-w-400 mx-auto flex items-center justify-center md:justify-end px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">

                {/* Contenedor texto */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right">

                    {/* Título */}
                    <h1 className="font-cornelia text-white leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[320px] sm:max-w-112.5 md:max-w-155">
                        El Arte de <br />
                        Regalar
                        <br />
                        (o Regalarte)
                        <br />
                        Algo
                        <br />
                        Extraordinario
                    </h1>

                    {/* Descripción */}
                    <p className="text-white text-sm sm:text-lg lg:text-xl mt-5 max-w-[320px] sm:max-w-125 font-montserrat leading-[1.4]">
                        Explora nuestra colección exclusiva y encuentra
                        el arreglo perfecto para ese momento inolvidable.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row items-center md:items-stretch gap-4 sm:gap-5 mt-8 sm:mt-10">

                        {/* Botón colección */}
                        <NavLink
                            to="/productos"
                            className="bg-white border border-primary text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold hover:scale-105 transition duration-500 cursor-pointer"
                        >
                            <span>Ver Colecciones</span>
                        </NavLink>

                        {/* Botón WhatsApp */}
                        <a
                            href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                `Hola, quiero comprar un ramo para alguien especial`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-8 sm:px-10 py-4 rounded-xl font-semibold flex items-center justify-center gap-4 hover:scale-105 transition duration-500 cursor-pointer"
                        >
                            <FaWhatsapp size={22} />
                            COMPRAR
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroRegalos;