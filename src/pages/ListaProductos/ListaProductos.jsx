import productos from "../../assets/data/productos";
import CardProducto from "./CardProducto";
import bg_producto from "../../assets/imagenes/bg_productos.webp";
import HeroCarrusel from "../../components/Hero/HeroCarrusel"

export default function ListaProductos() {
    return (
        <section className="relative min-h-screen space-y-16 pb-30 bg-white overflow-hidden font-montserrat">
            {/* CARRUSEL */}
            <HeroCarrusel />

            {/* LISTA DE PRODUCTOS */}
            <div>
                <img
                    src={bg_producto}
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    alt=""
                />
                <div className="relative z-10 max-w-340 mx-auto px-6 py-12 md:py-16">

                    <h2 className="text-xl md:text-2xl text-center lg:text-3xl lg:text-left tracking-wide font-cornelia text-secondary mb-20">
                        REGALA FLORES FRESCAS Y DETALLES DE AUTOR
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {productos.map((producto) => (
                            <CardProducto
                                key={producto.id}
                                slug={producto.slug}
                                nombre={producto.nombre}
                                descripcionCorta={producto.descripcionCorta}
                                precio={producto.precio}
                                precioTachado={producto.precioTachado}
                                img={producto.img}
                            />
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}
