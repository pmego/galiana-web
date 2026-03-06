import derecha from "../../assets/imagenes/ramo_derecha.png";
import izquierda from "../../assets/imagenes/ramo_izquierda.png";

 function CintaDecorativa() {
    return (
        <section className="relative w-full bg-[#F0EADE] overflow-hidden mb-20 font-cornelia">

            {/* CONTENEDOR INTERNO */}
            <div className="relative flex items-center justify-center h-32">

                {/* IMAGEN IZQUIERDA */}
                <img
                    src={izquierda}
                    alt="Decoración florar izquierda"
                    className="absolute hidden xl:block left-0 top-30 -translate-y-1/2 h-28 md:h-90 object-contain pointer-events-none select-none"
                />

                {/* IMAGEN DERECHA */}
                <img
                    src={derecha}
                    alt="Decoración floral derecha"
                    className="absolute hidden xl:block right-5 top-1/2 -translate-y-1/2 h-28 md:h-36 object-contain pointer-events-none select-none"
                />

                {/* TEXTO */}
                <h2 className="text-center text-[#496048] tracking-[0.25em] text-xs md:text-lg font-medium px-10">
                    CAPTURANDO LA EFÍMERA PERFECCIÓN DE CADA PÉTALO
                </h2>
            </div>
        </section>
    )
}

export default CintaDecorativa;
