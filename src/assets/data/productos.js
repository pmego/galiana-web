import bushAmour from "../imagenes/productos/detalleProductos/bushAmour.webp";
import bushAmourPrincipal from "../imagenes/productos/detalleProductos/bushAmourPrincipal.jpg";
import bushAmour1 from "../imagenes/productos/detalleProductos/bushAmour1.webp";
import bushAmour2 from "../imagenes/productos/detalleProductos/bushAmour2.webp";
import bushAmour3 from "../imagenes/productos/detalleProductos/bushAmour3.webp";

import grandAmour from "../imagenes/productos/detalleProductos/grandAmour.webp";
import grandAmourPrincipal from "../imagenes/productos/detalleProductos/grandAmourPrincipal.webp";
import grandAmour1 from "../imagenes/productos/detalleProductos/grandAmour1.webp";
import grandAmour2 from "../imagenes/productos/detalleProductos/grandAmour2.webp";
import grandAmour3 from "../imagenes/productos/detalleProductos/grandAmour3.webp";

import rouge from "../imagenes/productos/detalleProductos/rouge.webp";
import rougePrincipal from "../imagenes/productos/detalleProductos/rougePrincipal.webp";
import rouge1 from "../imagenes/productos/detalleProductos/rouge1.webp";
import rouge2 from "../imagenes/productos/detalleProductos/rouge2.webp";
import rouge3 from "../imagenes/productos/detalleProductos/rouge3.webp";

import bunny from "../imagenes/productos/detalleProductos/bunny.webp";
import bunnyBlancoPrincipal from "../imagenes/productos/detalleProductos/bunnyBlancoPrincipal.webp";
import bunnyBlanco1 from "../imagenes/productos/detalleProductos/bunnyBlanco1.webp";
import bunnyBlanco2 from "../imagenes/productos/detalleProductos/bunnyBlanco2.webp";
import bunnyBlanco3 from "../imagenes/productos/detalleProductos/bunnyBlanco3.webp";
import bunnyRosadoPrincipal from "../imagenes/productos/detalleProductos/bunnyRosadoPrincipal.webp";
import bunnyRosado1 from "../imagenes/productos/detalleProductos/bunnyRosado1.webp";
import bunnyRosado2 from "../imagenes/productos/detalleProductos/bunnyRosado2.webp";
import bunnyRosado3 from "../imagenes/productos/detalleProductos/bunnyRosado3.webp";

import corazon from "../imagenes/productos/detalleProductos/corazon.webp";
import corazonPrincipal from "../imagenes/productos/detalleProductos/corazonPrincipal.webp";
import corazon2 from "../imagenes/productos/detalleProductos/corazon2.webp";
import corazon3 from "../imagenes/productos/detalleProductos/corazon3.webp";

import fantasy from "../imagenes/productos/detalleProductos/fantasy.webp";

import aura from "../imagenes/productos/detalleProductos/aura.webp";
import auraPrincipal from "../imagenes/productos/detalleProductos/aura.webp";
import aura2 from "../imagenes/productos/detalleProductos/aura2.webp";
import aura3 from "../imagenes/productos/detalleProductos/aura3.webp";

import rubi from "../imagenes/productos/detalleProductos/rubi.webp";
import rubiPrincipal from "../imagenes/productos/detalleProductos/rubi.webp";
import rubi2 from "../imagenes/productos/detalleProductos/rubi2.webp";
import rubi3 from "../imagenes/productos/detalleProductos/rubi3.webp";

import galia from "../imagenes/productos/detalleProductos/galia.webp";
import galiaPrincipal from "../imagenes/productos/detalleProductos/galia.webp";
import galia2 from "../imagenes/productos/detalleProductos/galia2.webp";
import galia3 from "../imagenes/productos/detalleProductos/galia3.webp";

import amor from "../imagenes/productos/detalleProductos/amor.webp";
import amorPrincipal from "../imagenes/productos/detalleProductos/amor.webp";
import amor2 from "../imagenes/productos/detalleProductos/amor2.webp";
import amor3 from "../imagenes/productos/detalleProductos/amor3.webp";

export const productos = [

  //PRODUCTOS DE VERANO
  //ITEM 1 - BUSH AMOUR
  {
    id: 1,
    slug: "l_amor_box",
    nombre: "L Amor Box",
    categoria: "lanzamiento",
    precio: "249.00",
    precioTachado: "269.00",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      `Inspirado en la suavidad y el encanto de los tonos románticos. Nuestro box Aura Rosa reúne la 
      frescura de rosas y claveles seleccionados a mano, creando un diseño redondo, abundante y lleno de texturas únicas. 
      Un diseño artesanal y la opción perfecta para sorprender con un obsequio inolvidable que llenará de vida y aroma cualquier espacio.`,

    img: amor,
    imgPrincipal: amorPrincipal,

    galeria: [
      { src: amor2 },
      { src: amor3 },
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },
  //ITEM 2 - GRAND AMOUR
  {
    id: 2,
    slug: "corazon_ferrero",
    nombre: "Corazón Ferrero",
    categoria: ["lanzamiento", "cumpleanos"],
    precio: "159.00",
    precioTachado: "179.00",

    descripcionCorta: "Perfecto para: Celebrar fechas especiales, cumpleaños o para tener un detalle inolvidable con alguien importante",
    descripcionLarga:
      `Celebra los momentos especiales con nuestro diseño exclusivo para emocionar. Este arreglo artesanal en 
      forma de corazón equilibra perfectamente la delicadeza de las flores en tonos pastel con la energía de 
      colores vibrantes y lo acompañamos con una selección premium de chocolates. Ideal para deleitar el paladar 
      mientras los ojos se enamoran.`,

    img: corazon,
    imgPrincipal: corazonPrincipal,

    galeria: [
      { src: corazonPrincipal },
      { src: corazon2 },
      { src: corazon3, span: 2 },
    ],

    detalles: [
      { label: "Perfecto para: ", value: "•	Base 26X26 rosa perlada Galiana" },
      { label: "Flores principales", value: "•	Altura 16 cm / puede variar ligeramente." },
      { label: "Flores complementarias", value: "•	Lazo decorativo fucsia." },
      { label: "Cantidad", value: "•	2 Gerberas ." },
      { label: "Altura aproximada", value: "•	Mix de claveles premium en tonos amarillo marmoleado, rosado y blanco (podría variar de acuerdo con disponibilidad)." },
      { label: "Diámetro aproximado", value: "•	Follajes siempre viva." }
    ]
  },
  //ITEM 3 - ROUGE
  {
    id: 3,
    slug: "fantasy",
    nombre: "Fantasy",
    categoria: ["lanzamiento", "cumpleanos"],
    precio: "249.90",
    precioTachado: "269.90",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      `Hay momentos que merecen una celebración espectacular. 
      Nuestro box premium fusiona la fuerza de las rosas vibrantes con la delicadeza de detalles florales que se elevan con elegancia. 
      Acompañado de un globo que transmite tus mejores deseos, este diseño de autor no es solo un regalo, 
      es una experiencia visual inolvidable hecha para emocionar.`,

    img: fantasy,
    imgPrincipal: fantasy,

    galeria: [
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },
  {
    id: 4,
    slug: "galia_sol",
    nombre: "Galia Sol",
    categoria: "lanzamiento",
    precio: "159.90",
    precioTachado: "169.00",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      `Inspirado en la suavidad y el encanto de los tonos románticos. Nuestro box Aura Rosa reúne la 
      frescura de rosas y claveles seleccionados a mano, creando un diseño redondo, abundante y lleno de texturas únicas. 
      Un diseño artesanal y la opción perfecta para sorprender con un obsequio inolvidable que llenará de vida y aroma cualquier espacio.`,

    img: galia,
    imgPrincipal: galiaPrincipal,

    galeria: [
      { src: galia2 },
      { src: galia3 },
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },
  {
    id: 5,
    slug: "aura_rosa",
    nombre: "Aura Rosa",
    categoria: "lanzamiento",
    precio: "179.90",
    precioTachado: "189.90",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      `Inspirado en la suavidad y el encanto de los tonos románticos. Nuestro box Aura Rosa reúne la 
      frescura de rosas y claveles seleccionados a mano, creando un diseño redondo, abundante y lleno de texturas únicas. 
      Un diseño artesanal y la opción perfecta para sorprender con un obsequio inolvidable que llenará de vida y aroma cualquier espacio.`,

    img: aura,
    imgPrincipal: auraPrincipal,

    galeria: [
      { src: aura2 },
      { src: aura3 },
      { src: aura3, span: 2 },
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },
  {
    id: 6,
    slug: "rubi_floral",
    nombre: "Rubí Floral",
    categoria: "lanzamiento",
    precio: "179.00",
    precioTachado: "185.00",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      `Inspirado en la suavidad y el encanto de los tonos románticos. Nuestro box Aura Rosa reúne la 
      frescura de rosas y claveles seleccionados a mano, creando un diseño redondo, abundante y lleno de texturas únicas. 
      Un diseño artesanal y la opción perfecta para sorprender con un obsequio inolvidable que llenará de vida y aroma cualquier espacio.`,

    img: rubi,
    imgPrincipal: rubiPrincipal,

    galeria: [
      { src: rubi2 },
      { src: rubi3 },
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },
  {
    id: 7,
    slug: "rouge",
    nombre: "Rouge",
    categoria: "verano",
    precio: "99.00",
    precioTachado: "129.00",

    descripcionCorta: "Refinado, imponente y natural.",
    descripcionLarga:
      "Ramo de rosas rojas intensas con follaje de ecualipto, diseñado para expresar amor profundo atemporal.",

    img: rouge,
    imgPrincipal: rougePrincipal,

    galeria: [
      { src: rouge1 },
      { src: rouge2 },
      { src: rouge3, span: 2 },
    ],

    detalles: [
      { label: "Estilo", value: "Elegante, regencia y romántico profundo." },
      { label: "Flores principales", value: "Rosas rojas premium." },
      { label: "Flores complementarias", value: "Eucalipto tipo dolar." },
      { label: "Cantidad", value: "18 tallos." },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "65 cm." }
    ]
  },

  {
    id: 8,
    slug: "bush_amour",
    nombre: "Bush Amour",
    categoria: "verano",
    precio: "129.00",
    precioTachado: "149.00",

    descripcionCorta: "Romántico, atemporal y sofisticado.",
    descripcionLarga:
      "Ramo floral en tonos blush, crema y rojo, acompañado de globo personalizado, ideal para celebrar momentos especiales con delicadeza y estilo.",

    img: bushAmour,
    imgPrincipal: bushAmourPrincipal,

    galeria: [
      { src: bushAmour1 },
      { src: bushAmour2 },
      { src: bushAmour3, span: 2 },
    ],

    detalles: [
      { label: "Estilo", value: "Romántico, alegre y elegante." },
      { label: "Flores principales", value: "7 rosas rojas y 3 rosas crema." },
      { label: "Flores complementarias", value: "7 rosas rosadas y 7 claveles." },
      { label: "Cantidad", value: "22 - 26 flores (aprox.)" },
      { label: "Altura aproximada", value: "40 cm." },
      { label: "Diámetro aproximado", value: "85 cm." }
    ]
  },

  //ITEM 4 - BUNNY BLANCO / ROSADO}
  {
    id: 9,
    slug: "grand_amour",
    nombre: "Grand Amour",
    categoria: "verano",
    precio: "89.00",
    precioTachado: "129.00",

    descripcionCorta: "Romántico, delicado y moderno.",

    descripcionLarga:
      "Ramo floral en tonos rosados y empolvados, crema y rojo profundo, creado para expresar elegancia y emoción con un diseño artístico y armonioso.",

    img: grandAmour,
    imgPrincipal: grandAmourPrincipal,

    galeria: [
      { src: grandAmour1 },
      { src: grandAmour2 },
      { src: grandAmour3, span: 2 },
    ],

    detalles: [
      { label: "Estilo", value: "Romántico, delicado y moderno." },
      { label: "Flores principales", value: "7 rosas rosadas y 7 rosas rojas." },
      { label: "Flores complementarias", value: "Rosas crema y margaritas mini." },
      { label: "Cantidad", value: "22 - 26 flores (aprox.)" },
      { label: "Altura aproximada", value: "63 cm." },
      { label: "Diámetro aproximado", value: "67 cm." }
    ]
  },
  {
    id: 10,
    slug: "bunny",
    nombre: "Bunny",
    categoria: "verano",
    precio: "159.00",
    precioTachado: "179.00",

    descripcionCorta: "Delicado, tierno, alegre y juvenil.",

    img: bunny,

    colores: {
      blanco: {
        descripcionLarga:
          "Arreglo de rosas rojas presentado en box decorativo tipo conejo, diseñado para sorprender con ternura y amor en fechas especiales.",

        imgPrincipal: bunnyBlancoPrincipal,

        galeria: [
          { src: bunnyBlanco1 },
          { src: bunnyBlanco2 },
          { src: bunnyBlanco3, span: 2 },
        ],

        detalles: [
          { label: "Estilo", value: "Romántico, delicado y moderno." },
          { label: "Flores principales", value: "Rosas premium." },
          { label: "Color", value: "Blanco." },
          { label: "Cantidad", value: "12 flores (aprox)." },
          { label: "Altura aproximada", value: "47 cm." },
          { label: "Diámetro aproximado", value: "63 cm." }
        ]
      },

      rosado: {
        descripcionLarga:
          "Arreglo de rosas rosadas presentado en box decorativo tipo conejo, diseñado para sorprender con ternura y amor en fechas especiales.",

        imgPrincipal: bunnyRosadoPrincipal,

        galeria: [
          { src: bunnyRosado1 },
          { src: bunnyRosado2 },
          { src: bunnyRosado3, span: 2 },
        ],

        detalles: [
          { label: "Estilo", value: "Romántico, delicado y moderno." },
          { label: "Flores principales", value: "7 Rosas rosadas y 7 rosas rojas." },
          { label: "Flores complementarias", value: "Rosas crema y margaritas mini." },
          { label: "Cantidad", value: "22 - 26 flores (aprox)." },
          { label: "Altura aproximada", value: "63 cm." },
          { label: "Diámetro aproximado", value: "67 cm." }
        ]
      }
    }
  },

  //PRODUCTOS DE LANZAMIENTO

];

export default productos;
