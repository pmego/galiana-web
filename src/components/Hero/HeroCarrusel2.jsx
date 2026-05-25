import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";

import banner1 from "../../assets/imagenes/productos/CarruselLista/heroCarrusel1.webp";
import banner2 from "../../assets/imagenes/productos/CarruselLista/heroCarrusel2.webp";

function HeroCarousel() {

    const navigate = useNavigate();
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                className="w-full h-200"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={banner1}
                            alt="Banner 1"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-end justify-start pb-50 pl-112">
                            <button
                                onClick={() => navigate("/productos/rubi_floral")}
                                className="
                                    border-2 border-black
                                    text-black
                                    px-30 py-3
                                    rounded-2xl
                                    uppercase
                                    tracking-[0.2em]
                                    font-semibold
                                    backdrop-blur-[2px]
                                    hover:bg-white
                                    hover:text-primary
                                    transition
                                    duration-700
                                    cursor-pointer
                                "
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={banner2}
                            alt="Banner 2"
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={() => navigate("/productos/l_amor_box")}
                                className="
                                    border-2 border-white
                                    text-white
                                    px-30 py-3
                                    rounded-2xl
                                    uppercase
                                    tracking-[0.2em]
                                    font-semibold
                                    backdrop-blur-[2px]
                                    hover:bg-white
                                    hover:text-primary
                                    transition
                                    duration-700
                                    cursor-pointer
                                "
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default HeroCarousel;