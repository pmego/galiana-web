import { FaWhatsapp } from "react-icons/fa";
import bg from "../../assets/imagenes/heroRegalos2.webp";
import { NavLink } from "react-router-dom";

function HeroRegalos() {
    return (
        <section
            className="relative h-275 bg-center bg-cover overflow-hidden"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {/* Contenido */}
            <div className="relative z-10 h-full mx-auto flex justify-between items-center px-40">

                {/* Lado izquierdo */}
                <div className="relative flex justify-center">
                    {/* Doble marco
                    <div className="absolute w-117.5 h-120 border-[3px] border-white rounded-2xl z-30" />

                    <div className="absolute w-121.25 h-123.75 border-[3px] border-white rounded-2xl translate-x-2 translate-y-2 z-10" /> */}
                </div>

                {/* Lado derecho */}
                <div className="flex flex-col text-right">

                    <h1 className="font-cornelia text-white leading-[1.20] text-6xl max-w-155 text-right">
                        El Arte de <br />
                        Regalar
                        <br />
                        (o Regalarte)
                        <br />
                        Algo
                        <br />
                        Extraordinario
                    </h1>

                    <p className="text-black text-xl mt-5 max-w-125 font-montserrat">
                        Explora nuestra colección exclusiva y encuentra
                        el arreglo perfecto para ese momento inolvidable.
                    </p>

                    {/* Botones */}
                    <div className="flex gap-5 mt-10 justify-end">
                        <NavLink
                            to="/productos"
                            className="bg-white border border-primary text-primary px-8 py-5 rounded-xl font-semibold hover:scale-102 transition duration-500 cursor-pointer"
                        >
                            <span>Ver Colecciones</span>
                        </NavLink>
                        <a
                            href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                `Hola, quiero comprar un ramo para alguien especial`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-4 hover:scale-102 transition duration-500 cursor-pointer"
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