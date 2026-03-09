import { useNavigate } from "react-router-dom";

function Card({ producto }) {

    const precioFormateado = Number(producto.precio).toFixed(2);
    const [enteros, decimales] = precioFormateado.split(".");

    const navigate = useNavigate();

    return (
        <article className="bg-white shadow-lg mt-5 overflow-hidden w-full max-w-sm rounded-4xl p-10 text-center pt-10 outline-hidden hover:scale-105 hover:shadow-md hover:shadow-primary/40 transition duration-1000">

            {/* Imagen */}
            <img
                src={producto.img}
                alt={producto.nombre}
                className="h-60 mx-auto"
            />

            <h2 className="font-cornelia text-3xl text-primary mb-4 mt-3">
                {producto.nombre}
            </h2>

            <p className="text-gray-500 text-base mt-2 font-montserrat">
                ESTILO: {producto.descripcionCorta}
            </p>
            <div className="flex items-end justify-evenly mt-4 font-montserrat">
                <p className="line-through text-md text-soft">
                    S/. {producto.precioTachado}
                </p>
                <p className="text-3xl font-semibold text-primary">
                    <span className="text-lg align-top">S/. </span>
                    {enteros}
                    <span className="text-base align-end">.{decimales}</span>
                </p>
            </div>
            <button
                onClick={() => navigate(`/productos/${producto.slug}`)}
                className="text-base mt-8 inline-flex font-montserrat items-center gap-2 font-semibold bg-primary text-white px-10 py-5 rounded-2xl text-md hover:scale-102 transition duration-700 cursor-pointer"
            >
                Ver más
            </button>
        </article>
    )
}

export default Card;
