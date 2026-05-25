import atencion from "../../assets/imagenes/icons/atencionIcon.png";
import calidad from "../../assets/imagenes/icons/calidadIcon.png";
import seleccion from "../../assets/imagenes/icons/seleccionIcon.png";

function Experiencia() {
    return (
        <section className="w-full bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* TITULO */}
                <div className="text-center max-w-7xl mx-auto">
                    <h2 className="text-5xl font-poppins font-semibold text-black mb-10">
                        ¿Por qué elegir la experiencia Galiana?
                    </h2>

                    <p className="text-black text-2xl font-poppins">
                        En Galiana no enviamos arreglos comunes; entregamos piezas de alta
                        calidad floral diseñadas para impresionar de verdad. Desde nuestras
                        exclusivas colecciones de temporada hasta composiciones de gran
                        formato, cada diseño de autor está pensado para provocar un impacto
                        sofisticado e inmediato.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">

                    {/* CARD IZQUIERDA */}
                    <div className="border-2 border-primary rounded-xl p-14 flex items-center min-h-107.5 px-30">
                        <h3
                            className="
                text-primary
                uppercase
                text-5xl
                leading-none
                font-cornelia
                max-w-md
              "
                        >
                            Diseños sofisticados, frescos y listos para impresionar
                        </h3>
                    </div>

                    {/* CARD DERECHA */}
                    <div className="flex flex-col gap-6">

                        {/* TEXTO */}
                        <div className="border-2 border-secondary rounded-xl p-10 flex-1">
                            <p className="text-secondary font-poppins p-2">
                                No vendemos arreglos comunes; creamos piezas de alta costura floral diseñadas para transformar espacios,
                                evocar emociones y asegurar que tu gesto sea inolvidable. Cada composición combina frescura excepcional,
                                texturas sofisticadas y una atención al detalle milimétrica.
                                Comprar en nuestro atelier digital es rápido, seguro y exclusivo. Elige el diseño perfecto para hoy,
                                personaliza tu dedicatoria y nosotros nos encargamos de que la experiencia de entrega sea tan perfecta como el arreglo mismo.
                            </p>
                        </div>

                        {/* ICONOS */}
                        <div className="border-2 border-secondary rounded-xl p-8 font-poppins font-semibold">
                            <div className="grid grid-cols-3 gap-6 text-center">

                                {/* ITEM */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={calidad}
                                        alt=""
                                        className="w-16 h-16 object-contain mb-3"
                                    />

                                    <p className="text-[#c94d68] text-sm font-semibold uppercase leading-3">
                                        Calidad <br /> Premium
                                    </p>
                                </div>

                                {/* ITEM */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={seleccion}
                                        alt=""
                                        className="w-16 h-16 object-contain mb-3"
                                    />

                                    <p className="text-[#c94d68] text-sm font-semibold uppercase leading-3">
                                        Seleccionamos cada tallo a mano
                                    </p>
                                </div>

                                {/* ITEM */}
                                <div className="flex flex-col items-center">
                                    <img
                                        src={atencion}
                                        alt=""
                                        className="w-16 h-16 object-contain mb-3"
                                    />

                                    <p className="text-[#c94d68] text-sm font-semibold uppercase leading-3">
                                        Atención personalizada
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiencia;