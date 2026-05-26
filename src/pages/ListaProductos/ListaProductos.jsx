import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import productos from "../../assets/data/productos";
import Card from "../../components/CarruselProductos/Card";
import bg_producto from "../../assets/imagenes/bg_productos.webp";
import HeroCarrusel2 from "../../components/Hero/HeroCarrusel2";
import Beneficios2 from "../../components/Beneficios/Beneficios2";

export default function ListaProductos() {
    const [categoriaActiva, setCategoriaActiva] = useState("todos");

    const categorias = [
        { id: "todos", label: "VER TODO" },
        { id: "lanzamiento", label: "COLECCIÓN DE LANZAMIENTO" },
        { id: "cumpleanos", label: "COLECCIÓN FELIZ CUMPLEAÑOS" },
        { id: "verano", label: "COLECCIÓN VERANO" }
    ];

    const productosFiltrados =
        categoriaActiva === "todos"
            ? productos
            : productos.filter((producto) =>
                producto.categoria.includes(categoriaActiva)
            );

    return (
        <section className="relative min-h-screen bg-[#f8f8f8] overflow-hidden font-montserrat">

            {/* HERO */}
            <HeroCarrusel2 />

            {/* SUBMENU */}
            <div className="relative z-20 w-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)]">

                <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-start lg:justify-center gap-6 md:gap-8 lg:gap-14 xl:gap-18 h-17.5 overflow-x-auto scrollbar-hide whitespace-nowrap">

                        {/* TEXTO */}
                        <span className="hidden lg:block text-gray-400 uppercase tracking-[0.2em] text-[11px] shrink-0">
                            Categorías:
                        </span>

                        {/* BOTONES */}
                        <div className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 shrink-0">

                            {categorias.map((categoria) => (
                                <button
                                    key={categoria.id}
                                    onClick={() => setCategoriaActiva(categoria.id)}
                                    className={`
                            relative py-2 uppercase transition duration-300 hover:text-[#C74765] cursor-pointer whitespace-nowrap text-[10px] sm:text-[11px] md:text-[10px] lg:text-[11px] tracking-[0.12em] md:tracking-[0.15em] lg:tracking-[0.2em]

                            ${categoriaActiva === categoria.id
                                            ? "text-[#C74765] font-semibold"
                                            : "text-[#57614c]"
                                        }
                        `}
                                >
                                    {categoria.label}

                                    {/* LÍNEA */}
                                    {categoriaActiva === categoria.id && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#C74765]"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* PRODUCTOS */}
            <div className="relative py-20 bg-white">
                <div className="relative z-10 max-w-300 mx-auto px-6">

                    <h2 className="text-2xl mb-14 text-left font-poppins">
                        selecciona tu diseño favorito y personaliza tu entrega con solo un click
                    </h2>

                    {/* GRID ANIMADO */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-6 max-w-262.5 mx-auto"
                    >
                        <AnimatePresence mode="wait">
                            {productosFiltrados.map((producto) => (
                                <motion.div
                                    key={producto.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <Card producto={producto} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}