import logoGaliana from "../../assets/logo_galiana.png";

import whatssapp from "../../assets/imagenes/icons/footer/whatsapp.png";
import correo from "../../assets/imagenes/icons/footer/correo.png";

import tiktok from "../../assets/imagenes/icons/footer/tiktok.png";
import instagram from "../../assets/imagenes/icons/footer/instragram.png";
import facebook from "../../assets/imagenes/icons/footer/facebook.png";

import yape from "../../assets/imagenes/icons/footer/yape.png";
import plin from "../../assets/imagenes/icons/footer/plin.png";
import transferencia from "../../assets/imagenes/icons/footer/transferencia.png";

function Footer() {
    return (
        <footer className="bg-soft text-primary pt-16 pb-8 px-6 font-montserrat">

            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* COLUMNA 1 - LOGO */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <img
                            src={logoGaliana}
                            alt="Galiana Boutique Floral"
                            className="w-44 md:w-52 lg:w-56"
                        />
                    </div>

                    {/* COLUMNA 2 - DESCRIPCIÓN */}
                    <div className="text-center lg:text-left">
                        <p className="text-sm leading-relaxed text-primary/80 max-w-xs mx-auto lg:mx-0">
                            Elegancia floral y diseño de autor. En <span className="font-semibold">GALIANA</span> nos especializamos en curar
                            los arreglos más finos del mercado local, garantizando frescura, exclusividad y un estilo sofisticado en cada entrega
                            para celebrar el amor en todas sus formas.
                        </p>
                    </div>

                    {/* COLUMNA 3 - INFORMACIÓN */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold mb-6 tracking-wide">
                            INFORMACIÓN
                        </h3>

                        <div className="space-y-4 text-sm">

                            <a
                                href={`https://wa.me/51926955567?text=${encodeURIComponent(
                                    `Hola, quiero comprar un ramo`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
                            >
                                <img src={whatssapp} className="w-5 h-5" />
                                <span>+51 926 955 567</span>
                            </a>

                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <img src={correo} className="w-5 h-5" />
                                <span>galiana.floreria@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA 4 - REDES */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold mb-6 tracking-wide">
                            REDES SOCIALES
                        </h3>

                        <div className="space-y-4 text-sm">

                            <a
                                href="https://www.tiktok.com/@galiana.boutique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
                            >
                                <img src={tiktok} className="w-6 h-6 object-contain" />
                                <span>TikTok</span>
                            </a>

                            <a
                                href="https://www.instagram.com/galiana.floreria/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
                            >
                                <img src={instagram} className="w-6 h-6 object-contain" />
                                <span>Instagram</span>
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=61585243520080"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center lg:justify-start gap-3 hover:opacity-70 transition"
                            >
                                <img src={facebook} className="w-6 h-6 object-contain" />
                                <span>Facebook</span>
                            </a>

                        </div>
                    </div>

                    {/* COLUMNA 5 - PAGOS */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold mb-6 tracking-wide">
                            FORMAS DE PAGO
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <img src={yape} className="w-7 h-7 object-contain" />
                                <span>Yape</span>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <img src={plin} className="w-7 h-7 object-contain" />
                                <span>Plin</span>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <img src={transferencia} className="w-7 h-7 object-contain" />
                                <span>Transferencia Bancaria</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-14 pt-6 border-t border-primary/20 text-center text-xs text-primary/60">
                    © {new Date().getFullYear()} Galiana Boutique Floral. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    );
}

export default Footer;