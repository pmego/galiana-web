import envio from "../../assets/imagenes/icons/beneficios/envio.png";
import segura from "../../assets/imagenes/icons/beneficios/segura.png";
import asesoria from "../../assets/imagenes/icons/beneficios/asesoria.png";
import pago from "../../assets/imagenes/icons/beneficios/pago.png";

export default function Beneficios2() {
    return (
        <section className="py-16 font-montserrat px-5 xl:px-0">
            <div className="bg-background/98 max-w-7xl mx-auto rounded-3xl px-8 py-5 border border-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

                    {/* ITEM 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={envio}
                            alt="Envío Express"
                            className="w-14 h-14 object-contain mb-4"
                        />
                        <h3 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
                            ENVÍOS EXPRESS
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                            Sorprende a tiempo. Entregamos tus flores con el mayor
                            cuidado y puntualidad en toda la ciudad.
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={segura}
                            alt="Compra Segura"
                            className="w-14 h-14 object-contain mb-4"
                        />
                        <h3 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
                            COMPRA SEGURA
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                            Proceso 100% confiable y sin complicaciones. Tu pedido está respaldado
                            por nuestra atención directa y honesta.
                        </p>

                    </div>

                    {/* ITEM 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={asesoria}
                            alt="Asesoría floral"
                            className="w-14 h-14 object-contain mb-4"
                        />
                        <h3 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
                            ASESORÍA FLORAL
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                            ¿No sabes qué elegir? Escríbenos para ayudarte a diseñar el detalle perfecto
                            para esa ocasión especial.
                        </p>
                    </div>

                    {/* ITEM 4 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={pago}
                            alt="Pago Fácil"
                            className="w-14 h-14 object-contain mb-4"
                        />
                        <h3 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-2">
                            PAGO FÁCIL
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                            Finaliza tu pedido vía WhatsApp. Aceptamos <span className="font-bold">Yape, </span><span className="font-bold">Plin</span> y <span className="font-bold">transferencias bancarias </span>
                            de forma directa.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}
