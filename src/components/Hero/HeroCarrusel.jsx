import { useEffect, useState } from "react";
import HeroSlide from "./HeroSlide";

import bg from "../../assets/imagenes/productos/CarruselLista/bg_carrusel2.jpg"
import img1 from "../../assets/imagenes/productos/CarruselLista/img_carrusel1.webp";
import img2 from "../../assets/imagenes/productos/CarruselLista/img_carrusel2.webp";
import img3 from "../../assets/imagenes/productos/CarruselLista/img_carrusel3.webp";
const slides = [
  {
    id: 1,
    bg: bg,
    slug: "rouge",
    image: img1,
    title: "Momentos que Florecen",
    subtitle: {
      normal: "La ",
      bold: "Sofisticación ",
      normal2: "de galiana ",
      bold2: "en cada detalle"
    },
    reverse: true,
  },
  {
    id: 2,
    bg: bg,
    slug: "grand_amour",
    image: img2,
    title: "Temporada de Lanzamiento",
    subtitle: {
      normal: "Disfruta las ",
      bold: "ofertas ",
      normal2: "en nuestra selección ",
      bold2: "de temporada"
    },
    reverse: false,
  },
  {
    id: 3,
    bg: bg,
    slug: "bush_amour",
    image: img3,
    title: "Sorprende hoy mismo",
    subtitle: {
      normal: "Envíos express ",
      bold: "en toda lima ",
      normal2: "con la delicadeza que ",
      bold2: "nos distingue"
    },
    reverse: false,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-200 bg-cover bg-center z-10"
      style={{ backgroundImage: `url(${slides[current].bg})` }}
    >
      {/* key fuerza re-montaje y dispara animación */}
      <HeroSlide slide={slides[current]} key={current} />
    </section>
  );
}