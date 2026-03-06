import atencion from "../../assets/imagenes/icons/atencionIcon.png";
import calidad from "../../assets/imagenes/icons/calidadIcon.png";
import seleccion from "../../assets/imagenes/icons/seleccionIcon.png";
import iconRosa from "../../assets/imagenes/icons/rosa_icon.png"

function Caracteristicas() {
    return (
        <section className="pt-24 font-montserrat">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-3 gap-2 md:gap-20 text-center pr-3">

                    {/* ITEM 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden mb-6">
                            <img
                                src={calidad}
                                alt="Calidad Premium"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-primary text-[8px] md:text-xs md:tracking-[0.25em] uppercase font-bold md:font-extrabold">
                            CALIDAD <br className="md:block" /> PREMIUM
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-24 h-12 md:h-24 mb-6">
                            <img
                                src={seleccion}
                                alt="Seleccionamos cada tallo a tu mano"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <p className="text-primary text-[8px] md:text-xs  md:tracking-[0.25em] font-bold md:font-extrabold uppercase leading-relaxed">
                            SELECCIONAMOS CADA <br />
                            TALLO A MANO
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 md:w-24 h-12 md:h-24 mb-6">
                            <img
                                src={atencion}
                                alt="Atención personalizada"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <p className="text-primary text-[8px] md:text-xs  md:tracking-[0.25em] font-bold md:font-extrabold uppercase leading-relaxed">
                            ATENCIÓN <br />
                            PERSONALIZADA
                        </p>
                    </div>
                </div>
            </div>

            {/* Divisor inferior */}
            <div className="relative ml-10 md:ml-0 my-20 flex items-center justify-center">

                <div className="absolute w-full hidden md:block md:h-1.25 bg-primary"></div>

                <div className="relative z-10 bg-background px-8 flex items-center -ml-8">
                    <img src={iconRosa} className="h-8 md:h-14  -ml-4" />
                    <h2 className="text-primary mt-2 md:mt-0 text-lg md:text-3xl font-cornelia font-normal tracking-wide">
                        TE RECOMENDAMOS
                    </h2>
                </div>

            </div>
        </section>
    )
}

export default Caracteristicas;