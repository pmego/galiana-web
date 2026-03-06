import rosa from "../../assets/imagenes/icons/rosa_icon.png";
import faqs from "../../assets/data/faqs";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import galeria from "../../assets/imagenes/preguntas/preguntas_galeria.png"

function PreguntasFrecuentes() {

    //PREGUNTAS FRECUENTES
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    return (
        <section className="bg-white py-20 font-montserrat">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start md:items-center">

                {/* IZQUIERDA */}
                <div className="">
                    <div className="flex items-center gap-0 md:gap-3 mb-10">
                        <img src={rosa} alt="" className="w-20" />
                        <h2 className="text-lg md:text-2xl font-semibold text-primary tracking-wide">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={faq.id}>
                                <button
                                    onClick={() => toggle(index)}
                                    className="flex items-center gap-4 text-left w-full cursor-pointer"
                                >
                                    {/* <div className="h-8 md:h-8 md:w-8 rounded-full bg-muted flex items-center justify-center"> */}
                                        <ChevronRight
                                            size={35}
                                            className={`text-secondary shrink-0 transition-transform duration-700 ${activeIndex === index ? "rotate-90" : ""
                                                }`}
                                        />
                                    {/* </div> */}

                                    <span className="text-secondary text-sm md:text-base font-medium">
                                        {faq.pregunta}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-700 ${activeIndex === index
                                        ? "max-h-40 mt-3 opacity-100 border-b border-secondary"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-secondary text-sm leading-relaxed pb-1.5">
                                        {faq.respuesta}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DERECHA */}
                <div className="">
                    <img
                        src={galeria}
                        alt="Galería de fotos"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default PreguntasFrecuentes;