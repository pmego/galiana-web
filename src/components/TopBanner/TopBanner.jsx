function TopBanner() {
    return (
        <div className="bg-black overflow-hidden h-9 md:h-12 flex items-center">

            <div className="flex animate-banner">

                {/* FRASE 1 */}
                <div className="min-w-full flex justify-center items-center whitespace-nowrap text-gray-400 text-xs md:text-sm tracking-wide md:tracking-widest px-4">
                    Flores frescas para momentos inolvidables —
                    <a
                        href="https://wa.me/51926955567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium mx-2 hover:opacity-80 transition"
                    >
                        Pide ahora por WhatsApp
                    </a>
                    — Sorprende con la elegancia de nuestra nueva colección
                </div>

                {/* FRASE 2 */}
                <div className="min-w-full flex justify-center items-center whitespace-nowrap text-gray-400 text-xs md:text-sm tracking-wide md:tracking-widest px-4">
                    Flores frescas para momentos inolvidables —
                    <a
                        href="https://wa.me/51926955567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium mx-2 hover:opacity-80 transition"
                    >
                        Pide ahora por WhatsApp
                    </a>
                    — Sorprende con la elegancia de nuestra nueva colección
                </div>

            </div>

        </div>
    );
}

export default TopBanner;