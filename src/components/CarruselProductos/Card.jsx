import { useNavigate } from "react-router-dom";

function Card({ producto }) {
    const precioFormateado = Number(producto.precio).toFixed(2);
    const [enteros, decimales] = precioFormateado.split(".");

    const navigate = useNavigate();

    return (
        <article className="w-full max-w-90 p-2">
            <div className="bg-white border border-primary overflow-hidden transition rounded-xl duration-500 hover:scale-[1.02] origin-center">

                {/* Contenedor imagen */}
                <div className="relative">

                    {/* borde interno */}
                    <div className="absolute inset-3 border-2 border-white pointer-events-none z-10" />

                    {/* imagen */}
                    <div className="w-full h-110 overflow-hidden">
                        <img
                            src={producto.img}
                            alt={producto.nombre}
                            className="
                w-full
                h-full
                object-cover
                object-top
            "
                        />
                    </div>

                </div>

                {/* Contenido */}
                <div className="bg-white text-center px-6 py-3">

                    <h2 className="font-cornelia text-2xl text-primary uppercase tracking-wide py-1">
                        {producto.nombre}
                    </h2>

                    <div className="flex justify-center items-end gap-3 font-montserrat">

                        <span className="text-gray-500 uppercase text-xs tracking-wider">
                            Precio:
                        </span>

                        <p className="text-xl text-gray-700">
                            <span className="text-2xl">S/. </span>
                            {enteros}
                            <span className="text-xl">
                                .{decimales}
                            </span>
                        </p>

                        <p className="line-through text-gray-400 text-sm">
                            S/. {producto.precioTachado}
                        </p>
                    </div>
                </div>
            </div>
            {/* Botón */}
            <button
                onClick={() =>
                    navigate(`/productos/${producto.slug}`)
                }
                className="w-full text-sm bg-primary text-white py-2 mt-2 tracking-[0.2em] rounded-xl uppercase underline underline-offset-4 font-semibold hover:scale-[1.02] transition cursor-pointer font-poppins"
            >
                Comprar
            </button>
        </article>
    );
}

export default Card;