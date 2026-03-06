import { useParams, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import { productos } from "../../assets/data/productos";

import Caracteristicas from "../../components/Caracteristicas/Caracteristicas";
import CarruselProductos from "../../components/CarruselProductos/CarruselProductos";

import rosaVerde from "../../assets/imagenes/icons/rosa_verde.png";


function ProductoDetalle() {

    const { slug } = useParams();
    const producto = productos.find(p => p.slug === slug);
    const productosRecomendados = productos.filter(p => p.slug !== slug);

    if (!producto) return <div>Producto no encontrado</div>

    const [searchParams, setSearchParams] = useSearchParams();
    const color = searchParams.get("color");

    const colorActivo = color || "blanco";

    const tieneVariantes = !!producto.colores;

    //Si tiene variantes como el producto Bunny
    let dataProducto = producto;

    if (tieneVariantes) {

        dataProducto =
            producto.colores[colorActivo] ||
            producto.colores["blanco"];
    }

    return (
        <>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

                    {/* IMAGEN PRINCIPAL */}

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={colorActivo}
                            src={dataProducto.imgPrincipal}
                            alt={producto.nombre}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>


                    {/* COLUMNA DERECHA */}
                    <div className="flex flex-col">
                        <div className="px-12 py-16">

                            {/* TÍTULO */}
                            <h1 className="text-4xl lg:text-5xl text-primary tracking-wide mb-6 font-cornelia uppercase">
                                {producto.nombre}
                            </h1>

                            {/* VERIFICAR SI EL PRODUCTO TIENE VARIANTES */}
                            {tieneVariantes && (
                                <div className="flex items-center gap-6 mb-6">
                                    <span className="text-primary text-[10px] font-medium">
                                        COLOR A ELEGIR:
                                    </span>

                                    {/* BLANCO */}
                                    <div className="flex items-center gap-2 text-secondary">
                                        <span>Blanco</span>
                                        <button
                                            onClick={() => setSearchParams({ color: "blanco" })}
                                            className={`w-6 h-6 rounded-full border-2 transition-all duration-1500 cursor-pointer
                                                ${colorActivo === "blanco"
                                                    ? "bg-white border-gray-300 border-4"
                                                    : "bg-white border-gray-300 opacity-50 scale-50"
                                                }`}
                                        />
                                    </div>

                                    {/* ROSADO */}
                                    <div className="flex items-center gap-2 text-secondary">
                                        <span>Rosado</span>
                                        <button
                                            onClick={() => setSearchParams({ color: "rosado" })}
                                            className={`w-6 h-6 rounded-full border-2 transition-all duration-1500 cursor-pointer
                                                ${colorActivo === "rosado"
                                                    ? "bg-pink-300 border-pink-100 border-4"
                                                    : "bg-pink-200 border-gray-300 opacity-50 scale-50"
                                                }`}
                                        />

                                    </div>
                                </div>
                            )
                            }

                            {/* PRECIO */}
                            <div className="flex items-center gap-4 mb-8 font-montserrat">
                                <p className="text-2xl lg:text-4xl font-semibold text-primary">
                                    S/. {producto.precio}
                                </p>
                                <p className="line-through text-md lg:text-xl text-soft font-normal">
                                    S/. {producto.precioTachado}
                                </p>
                                <span className="text-lg text-secondary font-light hidden sm:block md:hidden xl:block">
                                    (Hasta agotar stock)
                                </span>
                            </div>

                            {/* BOTÓN */}
                            <a
                                href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                    `Hola, quiero comprar ${producto.nombre}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-primary md:bg-white justify-center gap-3 border border-primary text-white md:text-primary py-4 rounded-xl text-lg font-montserrat font-semibold hover:bg-primary hover:text-white transition-all duration-700"
                            >
                                <FaWhatsapp size={28} />
                                COMPRAR AHORA
                            </a>
                        </div>

                        {/* DESCRIPCIÓN */}
                        <div className="border-t border-primary">
                            <div className="border-b border-primary px-12 py-2 border-r">
                                <h2 className="font-inter font-medium text-primary tracking-wide text-lg">
                                    DESCRIPCIÓN
                                </h2>
                            </div>
                            <div className="px-20">

                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={colorActivo}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-primary/80 text-base py-6 font-inter font-light"
                                    >
                                        {dataProducto.descripcionLarga}
                                    </motion.p>
                                </AnimatePresence>

                            </div>

                        </div>

                        {/* DETALLES */}
                        <div className="bg-[#F0EADE] border-t border-secondary font-poppins">
                            <div className="border-b border-secondary px-12 py-2 border-r">
                                <h2 className="font-medium text-secondary tracking-wide text-xl">
                                    DETALLES
                                </h2>
                            </div>

                            <div className="px-11 py-10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={colorActivo}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 text-secondary"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={{
                                            hidden: { opacity: 0 },
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    staggerChildren: 0.08,
                                                    delayChildren: 0.1,
                                                },
                                            },
                                            exit: {
                                                opacity: 0,
                                                transition: { duration: 0.2 }
                                            },
                                        }}
                                    >
                                        {dataProducto.detalles?.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start gap-4"
                                                variants={{
                                                    hidden: { opacity: 0, y: 15 },
                                                    visible: { opacity: 1, y: 0 },
                                                    exit: { opacity: 0, y: -10 },
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                    ease: [0.22, 1, 0.36, 1], // easing elegante
                                                }}
                                            >
                                                <img
                                                    src={rosaVerde}
                                                    alt=""
                                                    className="w-6 shrink-0 opacity-80 pt-1"
                                                />
                                                <div>
                                                    <p className="font-semibold">
                                                        {item.label}:
                                                    </p>
                                                    <p className="text-sm opacity-80">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Galería */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={colorActivo}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-5 py-5"
                    >
                        {dataProducto.galeria?.map((img, index) => (
                            <div
                                key={index}
                                className={`h-100 
                                    ${img.span === 2 ? "md:col-span-2" : ""}
                                    ${index === 2 ? "hidden md:block" : ""}
                                    `}
                            >
                                <img
                                    src={img.src}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* CARACTERÍSTICAS */}
            <Caracteristicas />

            {/* CARRUSEL PRODUCTOS */}
            <CarruselProductos 
            productos={productosRecomendados} 
            mostrarFlechas={false}
            />
        </>
    )
}

export default ProductoDetalle;