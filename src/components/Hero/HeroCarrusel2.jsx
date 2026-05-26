import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";

import banner1 from "../../assets/imagenes/productos/CarruselLista/heroCarrusel1.webp";
import banner2 from "../../assets/imagenes/productos/CarruselLista/heroCarrusel2.webp";
import banner3 from "../../assets/imagenes/productos/CarruselLista/heroCarrusel3.webp";

function HeroCarousel() {
    const navigate = useNavigate();

    const slides = [
        {
            image: banner1,
            title: "DISEÑADOS PARA EMOCIONAR",
            description:
                "Personaliza cada detalle con flores seleccionadas y empaques de lujo hechos a mano.",
            route: "/productos/galia_sol",
        },

        {
            image: banner2,
            title: "CREA EL REGALO PERFECTO",
            description:
                "Descubre nuestras colecciones premium que tocan tu corazón.",
            route: "/productos/rubi_floral",
        },

        {
            image: banner3,
            title: "TEMPORADA DE LANZAMIENTO",
            description:
                "Disfruta las ofertas en nuestra selección de temporada.",
            route: "/productos/l_amor_box",
        },
    ];

    return (
        <section className="w-full font-cornelia">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                speed={1200}
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-125 sm:h-150 lg:h-180 overflow-hidden">

                            {/* Imagen */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/15"></div>

                            {/* ========================= */}
                            {/* TERCER BANNER */}
                            {/* ========================= */}
                            {index === 2 ? (
                                <div className="absolute inset-0 z-10 flex flex-col items-center text-center pt-33 sm:pt-16 lg:pt-45 px-6">

                                    {/* Título */}
                                    <h2
                                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] uppercase tracking-[-1px] text-black"
                                    >
                                        {slide.title}
                                    </h2>

                                    {/* Descripción */}
                                    <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl text-black">
                                        {slide.description}
                                    </p>

                                    {/* Botones */}
                                    <div className="flex items-center justify-center gap-3 mt-6">

                                        {/* Flecha */}
                                        <button
                                            onClick={() => navigate(slide.route)}
                                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white text-primary text-xl flex items-center justify-center hover:scale-105 transition duration-500 cursor-pointer"
                                        >
                                            →
                                        </button>

                                        {/* Comprar */}
                                        <button
                                            onClick={() => navigate(slide.route)}
                                            className="border-2 border-white text-white px-8 sm:px-22 h-12 sm:h-14 rounded-xl uppercase tracking-[0.25em] font-semibold font-poppins text-xs sm:text-sm hover:bg-white hover:text-primary transition duration-500 cursor-pointer"
                                        >
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* ========================= */
                                /* BANNERS 1 Y 2 */
                                /* ========================= */
                                <div className="relative z-10 h-full max-w-7xl mx-auto md:mr-auto md:ml-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 sm:px-10 lg:px-20 xl:px-28">

                                    <div className="max-w-[90%] sm:max-w-125 lg:max-w-130 xl:max-w-162.5">

                                        {/* Título */}
                                        <h2
                                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] uppercase font-semibold tracking-[-1px] text-black"
                                            style={{
                                                fontFamily: "Cormorant Garamond",
                                            }}
                                        >
                                            {slide.title}
                                        </h2>

                                        {/* Descripción */}
                                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.2] text-black max-w-125">
                                            {slide.description}
                                        </p>

                                        {/* Botones */}
                                        <div className="flex items-center justify-center md:justify-start gap-3 mt-8 flex-wrap">

                                            {/* Flecha */}
                                            <button
                                                onClick={() => navigate(slide.route)}
                                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary text-white text-xl flex items-center justify-center hover:scale-105 transition duration-500 cursor-pointer"
                                            >
                                                →
                                            </button>

                                            {/* Comprar */}
                                            <button
                                                onClick={() => navigate(slide.route)}
                                                className="border border-primary text-primary px-8 sm:px-22 h-12 sm:h-14 rounded-xl uppercase tracking-[0.25em] font-semibold font-poppins text-xs sm:text-sm hover:bg-primary hover:text-white transition duration-500 cursor-pointer"
                                            >
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default HeroCarousel;