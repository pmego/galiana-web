import { useParams, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

import { productos } from "../../assets/data/productos";
import Caracteristicas from "../../components/Caracteristicas/Caracteristicas";
import CarruselProductos from "../../components/CarruselProductos/CarruselProductos";
import wsp from "../../assets/imagenes/icons/wsp_rosa.png";
import rosa from "../../assets/imagenes/icons/rosa_verde.png";
import { div } from "framer-motion/client";

function ProductoDetalle() {


    const [imagenActiva, setImagenActiva] = useState(0);
    const { slug } = useParams();
    const producto = productos.find(p => p.slug === slug);

    const productosRecomendados = productos.filter(p => p.slug !== slug);

    const [searchParams, setSearchParams] = useSearchParams();
    const color = searchParams.get("color");
    const colorActivo = color || "blanco";

    const tieneVariantes = !!producto?.colores;

    let dataProducto = producto;

    if (tieneVariantes) {
        dataProducto =
            producto.colores[colorActivo] ||
            producto.colores["blanco"];
    }

    // ACCORDION (abiertos por defecto)
    const [openDesc, setOpenDesc] = useState(true);
    const [openDetails, setOpenDetails] = useState(true);

    if (!producto) return <div>Producto no encontrado</div>;

    return (
        <>
            <section className="bg-white -mt-10">

                {/* ===== TOP SECTION ===== */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 pt-10">

                    {/* ===== IZQUIERDA: CARRUSEL REAL ===== */}
                    <div className="relative w-full">

                        {/* array de imágenes */}
                        {(() => {
                            const imagenes = [
                                dataProducto.imgPrincipal,
                                ...(dataProducto.galeria?.map(img => img.src) || [])
                            ].slice(0, 3);

                            return (
                                <>
                                    {/* imagen principal */}
                                    <div className="relative h-200 overflow-hidden bg-[#f7f7f7]">

                                        <AnimatePresence mode="wait">
                                            <motion.img
                                                key={imagenActiva}
                                                src={imagenes[imagenActiva]}
                                                alt={producto.nombre}
                                                className="w-full h-full object-cover"
                                                initial={{ opacity: 0, x: 40 }}
                                                animate={{ opacity: 0.88, x: 0 }}
                                                exit={{ opacity: 0, x: -40 }}
                                                transition={{ duration: 0.35 }}
                                            />
                                        </AnimatePresence>

                                        {/* flecha izquierda */}
                                        <button
                                            onClick={() =>
                                                setImagenActiva(prev =>
                                                    prev === 0
                                                        ? imagenes.length - 1
                                                        : prev - 1
                                                )
                                            }
                                            className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 shadow-md w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition z-20 cursor-pointer"
                                        >
                                            <FaChevronLeft className="text-primary" />
                                        </button>

                                        {/* flecha derecha */}
                                        <button
                                            onClick={() =>
                                                setImagenActiva(prev =>
                                                    prev === imagenes.length - 1
                                                        ? 0
                                                        : prev + 1
                                                )
                                            }
                                            className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 shadow-md w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition z-20 cursor-pointer"
                                        >
                                            <FaChevronRight className="text-primary" />
                                        </button>

                                        {/* indicadores abajo */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                            {imagenes.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setImagenActiva(index)}
                                                    className={`h-1.5 rounded-full transition-all duration-300
                                    ${imagenActiva === index
                                                            ? "w-14 bg-primary"
                                                            : "w-10 bg-white"
                                                        }
                                `}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </div>

                    {/* ===== DERECHA: INFO ===== */}
                    <div className="flex flex-col justify-center px-4 max-w-lg text-center md:text-left mx-auto md:mx-0 mb-7 md:mb-0 -mt-15">

                        {/* NOMBRE */}
                        <h1 className="text-4xl lg:text-8xl font-cornelia uppercase text-primary mb-6 md:max-w-3xs">
                            {producto.nombre}
                        </h1>

                        {/* COLORES */}
                        {tieneVariantes && (
                            <div className="flex items-center gap-4 mb-6">

                                <span className="text-primary font-medium">
                                    Color:
                                </span>

                                {Object.keys(producto.colores).map((nombreColor) => (
                                    <button
                                        key={nombreColor}
                                        onClick={() =>
                                            setSearchParams({ color: nombreColor })
                                        }
                                        className={`
                                                px-4 py-2 rounded-xl border transition duration-300 capitalize cursor-pointer
                                                ${colorActivo === nombreColor
                                                ? "bg-primary text-white border-primary"
                                                : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                                            }
                `}
                                    >
                                        {nombreColor}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* PRECIO */}
                        <div className="flex items-center gap-4 mb-6 font-montserrat">
                            <p className="text-3xl font-semibold text-primary">
                                S/. {producto.precio}
                            </p>
                            <p className="line-through text-gray-400">
                                S/. {producto.precioTachado}
                            </p>
                            <span className="text-sm text-gray-500">
                                (Hasta agotar stock)
                            </span>
                        </div>

                        <div className="w-full h-1 bg-primary mb-8" />

                        {/* DESCRIPCIÓN CORTA */}
                        <p className="text-secondary mb-8 font-light font-inter">
                            {dataProducto.descripcionCorta}
                        </p>

                        {/* BOTÓN WHATSAPP */}
                        <a
                            href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                `Hola, quiero comprar ${producto.nombre}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 border border-primary text-primary py-4 rounded-xl font-semibold transition font-montserrat"
                        >
                            <img src={wsp} alt="" className="w-6" />
                            COMPRAR AHORA
                        </a>
                    </div>
                </div>

                {/* DESCRIPCIÓN Y DETALLES */}
                <div className="bg-background px-5 2xl:px-0">
                    <div className="max-w-7xl mx-auto">

                        {/* DESCRIPCIÓN */}
                        <div className="border-b-2 border-white">

                            <button
                                onClick={() => setOpenDesc(!openDesc)}
                                className="w-full flex items-center gap-3 py-5 font-semibold text-primary cursor-pointer"
                            >
                                <span
                                    className={`transition-transform duration-300 text-lg
                        ${openDesc ? "rotate-90" : "rotate-0"}
                    `}
                                >
                                    🡲
                                </span>

                                <span className="tracking-wide">
                                    DESCRIPCIÓN
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openDesc && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 text-secondary font-light">
                                            {dataProducto.descripcionLarga}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* DETALLES */}
                        <div className="border-b-2 border-white">

                            <button
                                onClick={() => setOpenDetails(!openDetails)}
                                className="w-full flex items-center gap-3 py-5 font-semibold text-primary cursor-pointer"
                            >
                                <span
                                    className={`transition-transform duration-300 text-lg
                        ${openDetails ? "rotate-90" : "rotate-0"}
                    `}
                                >
                                    🡲
                                </span>

                                <span className="tracking-wide">
                                    DETALLES
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openDetails && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 text-secondary">

                                            {dataProducto.detalles?.map((item, i) => (
                                                <div key={i}>
                                                    {/* <p className="font-medium">
                                                            {item.label}
                                                        </p> */}

                                                    <p className="font-light">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXTRAS ===== */}
            <Caracteristicas />

            <CarruselProductos
                productos={productosRecomendados}
                mostrarFlechas={false}
                mostrarTitulo={false}
            />
        </>
    );
}

export default ProductoDetalle;