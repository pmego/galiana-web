import tiktokRosado from "../../assets/imagenes/icons/footer/tiktok.png";
import instagramRosado from "../../assets/imagenes/icons/footer/instragram.png";
import facebookRosado from "../../assets/imagenes/icons/footer/facebook.png";

import tiktokBlanco from "../../assets/imagenes/icons/footer/tiktokBlanco.png";
import instagramBlanco from "../../assets/imagenes/icons/footer/instagramBlanco.png";
import facebookBlanco from "../../assets/imagenes/icons/footer/facebookBlanco.png";

import { NavLink } from "react-router-dom";

export default function HeroSlide({ slide }) {
  return (
    <div className="max-w-7xl mx-auto w-full h-full px-6 flex items-center">
      <div
        className={`grid md:grid-cols-2 items-center gap-10 w-full ${slide.reverse ? "md:flex md:flex-row-reverse md:grid-cols-none" : ""
          }`}
      >
        <div className="absolute inset-0 -z-10 md:hidden">
          <img
            src={slide.image}
            alt="ramo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        {/* Imagen animada */}
        <div className="md:flex justify-center hidden md:justify-start">
          <img
            src={slide.image}
            alt="ramo"
            className="w-150 object-contain drop-shadow-xl animate-imageIn"
          />
        </div>

        {/* Texto animado */}
        <div className="mx-auto md:mx-0 text-center md:text-left animate-textIn tracking-widest md:pb-30 w-full max-w-md space-y-5">
          <h1 className="text-5xl md:text-7xl font-cornelia text-white md:text-primary">
            {slide.title}
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-white font-montserrat md:text-secondary uppercase tracking-normal">
            <span className="">
              {slide.subtitle.normal}
            </span>
            <span className="font-bold">
              {slide.subtitle.bold}
            </span>
            <span className="">
              {slide.subtitle.normal2}<br className="hidden md:block" />
            </span>
            <span className="font-bold">
              {slide.subtitle.bold2}
            </span>
          </p>

          <div className="md:flex-row md:flex justify-between flex-col">
            <NavLink
              to={`/productos/${slide.slug}`}
              className="mt-8 bg-primary border-2 border-white md:border-none hover:opacity-70 font-montserrat text-white px-8 py-3 rounded-xl transition duration-700 cursor-pointer"
            >
              <span>Ver Colección</span>
            </NavLink>
            <div className="hidden md:flex items-end gap-5 justify-center md:justify-end mt-20 md:mt-0">

              <a
                href="https://www.facebook.com/profile.php?id=61585243520080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={facebookRosado} className="w-8 h-8 object-contain" />
              </a>
              <a
                href="https://www.tiktok.com/@galiana.boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={tiktokRosado} className="w-8 h-8 object-contain" />
              </a>

              <a
                href="https://www.instagram.com/galiana.floreria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={instagramRosado} className="w-8 h-8 object-contain" />
              </a>
            </div>

            {/* ÍCONOS EN BLANCO */}
            <div className="flex md:hidden items-end gap-5 justify-center md:justify-end mt-20 md:mt-0">

              <a
                href="https://www.facebook.com/profile.php?id=61585243520080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={facebookBlanco} className="w-8 h-8 object-contain" />
              </a>
              <a
                href="https://www.tiktok.com/@galiana.boutique"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={tiktokBlanco} className="w-8 h-8 object-contain" />
              </a>

              <a
                href="https://www.instagram.com/galiana.floreria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
              >
                <img src={instagramBlanco} className="w-8 h-8 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}