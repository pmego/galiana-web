import img1 from "../../assets/imagenes/galeria/img1.webp"
import img2 from "../../assets/imagenes/galeria/img2.webp"
import img4 from "../../assets/imagenes/galeria/img4.webp"
import img5 from "../../assets/imagenes/galeria/img5.webp"
import img6 from "../../assets/imagenes/galeria/img6.webp"

export default function Galeria() {
    return (
        <section className="w-full px-4 md:py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

                {/* Fila 1 - Imagen que ocupa 2 columnas */}
                <div className="md:col-span-2 overflow-hidden shadow-md">
                    <img
                        src={img1}
                        alt=""
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>

                {/* Fila 1 - imagen que ocupa 2 filas */}
                <div className="md:row-span-2 overflow-hidden shadow-md">
                    <img
                        src={img2}
                        alt=""
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>

                {/* Fila 2 - Imagen que ocupa 2 columna */}
                <div className="md:row-span-2 overflow-hidden shadow-md">
                    <img
                        src={img5}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>

                {/* Fila 2 - 1 imagen que ocupa 1 columna cada 1 */}
                <div className="overflow-hidden shadow-md">
                    <img
                        src={img4}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>



                {/* Fila 3 - Imagen que ocupa 2 columnas */}
                <div className="md:col-span-2 overflow-hidden shadow-md">
                    <img
                        src={img6}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-700 hover:scale-110"
                    />
                </div>
            </div>
        </section>
    )
}
