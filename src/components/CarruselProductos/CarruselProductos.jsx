import { useEffect, useState } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useVisibleCards from '../../hooks/useVisibleCards';
import useSwipe from "../../hooks/useSwipe";
import useIsMobile from "../../hooks/useIsMobile";

function CarruselProductos({ productos, mostrarFlechas = true, mostrarTitulo = true }) {

    const [index, setIndex] = useState(0);
    const visibleCards = Math.min(useVisibleCards(), 3);

    const maxIndex = productos.length - visibleCards;


    const next = () => {
        setIndex((prev) =>
            prev >= maxIndex
                ? 0
                : prev + 1
        )
    }

    const prev = () => {
        setIndex((prev) =>
            prev <= 0 ? maxIndex : prev - 1
        )
    }

    const isMobile = useIsMobile();

    const swipeHandlers = useSwipe({
        onSwipeLeft: isMobile ? next : null,
        onSwipeRight: isMobile ? prev : null,
    })

    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setIndex(prev => prev >= maxIndex ? 0 : prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, [isMobile, maxIndex]);

    return (
        <>
            <section className="relative max-w-6xl mx-auto mb-20">
                {mostrarTitulo && (
                    <h2 className="text-xl md:text-3xl text-center md:text-left md:pl-5 text-secondary font-cornelia tracking-wide mb-8">
                        NUESTRA COLECCIÓN
                    </h2>
                )}

                {/* Izquierda */}
                {mostrarFlechas && (
                    <button
                        onClick={prev}
                        className="hidden md:flex absolute p-2 top-1/2 left-1 xl:-left-12 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full shadow-md cursor-pointer"
                    >
                        <ChevronLeft className="text-4xl text-primary hover:scale-110 transition duration-700" />
                    </button>
                )}
                {/* Carrusel */}
                <div className="overflow-hidden max-w-full h-160"
                    {...swipeHandlers}
                >
                    <div
                        className="flex transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `translateX(-${(100 / visibleCards) * index}%)`,
                        }}
                    >
                        {productos.map((producto) => (
                            <div
                                key={producto.id}
                                className="px-4 flex shrink-0 justify-center"
                                style={{ width: `${100 / visibleCards}%` }}
                            >
                                <Card producto={producto} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Derecha */}
                {mostrarFlechas && (
                    <button
                        onClick={next}
                        className="hidden md:flex absolute right-1 xl:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur rounded-full p-2 shadow-md cursor-pointer"
                    >
                        <ChevronRight className="text-4xl text-primary hover:scale-110 transition duration-700" />
                    </button>
                )}
            </section>
        </>
    )
}

export default CarruselProductos;