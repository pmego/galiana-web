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






export const productos = [
  //ITEM 1 - BUSH AMOUR
  {
    id: 1,
    slug: "bush_amour",
    nombre: "Bush Amour",
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

  //ITEM 2 - GRAND AMOUR
  {
    id: 2,
    slug: "grand_amour",
    nombre: "Grand Amour",
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

  //ITEM 3 - ROUGE
  {
    id: 3,
    slug: "rouge",
    nombre: "Rouge",
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

  //ITEM 4 - BUNNY BLANCO / ROSADO
  {
    id: 4,
    slug: "bunny",
    nombre: "Bunny",
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
];

export default productos;
