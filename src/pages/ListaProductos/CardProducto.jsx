import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function CardProducto({ slug, nombre, descripcionCorta, precio, precioTachado, img }) {

    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-10 gap-6 hover:shadow-primary/30 transition duration-500">

            {/* Imagen */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt={nombre}
                    className="h-52 sm:h-60 md:h-64 object-contain"
                />
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">

                <h2 className="text-2xl sm:text-3xl text-primary font-cornelia leading-tight">
                    {nombre}
                </h2>

                <p className="text-xs sm:text-sm text-secondary tracking-wide mt-2">
                    ESTILO: {descripcionCorta}
                </p>

                {/* Precio */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
                    {precioTachado && (
                        <span className="text-soft line-through text-sm">
                            S/. {precioTachado}
                        </span>
                    )}

                    <span className="text-primary text-lg sm:text-xl font-semibold">
                        S/. {precio}
                    </span>
                </div>

                {/* Botones */}
                <div className="flex flex-col xl:flex-row items-center md:items-start gap-3 mt-5">

                    <button
                        onClick={() => navigate(`/productos/${slug}`)}
                        className="w-full sm:w-auto px-5 py-2 border border-primary text-primary text-sm rounded-xl hover:bg-primary hover:text-white transition font-semibold cursor-pointer"
                    >
                        Ver Más
                    </button>

                    <a
                        href={`https://wa.me/51926955567?text=${encodeURIComponent(
                            `Hola, quiero comprar un ramo de ${nombre}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium bg-primary text-white rounded-xl hover:scale-101 transition duration-700"
                    >
                        <FaWhatsapp size={18} />
                        COMPRAR
                    </a>
                </div>

            </div>
        </div>
    );
}

export default CardProducto;