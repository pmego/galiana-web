function WhatsappButton() {
    return (
        <a
            href={`https://wa.me/51926955567?text=${encodeURIComponent(
                `Hola, quiero comprar un ramo para alguien especial`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
            fixed right-0 top-2/3 -translate-y-1/2 z-50
            flex flex-col md:flex-row
            items-center gap-2
            bg-primary text-white
            px-3 py-4 md:px-5 md:py-3
            rounded-l-2xl md:rounded-l-full
            shadow-lg hover:bg-primary/80 transition
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 order-1 md:order-0"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12.04 2C6.56 2 2.1 6.46 2.1 11.94c0 1.94.57 3.75 1.55 5.29L2 22l4.9-1.6c1.46.8 3.12 1.23 4.85 1.23 5.48 0 9.94-4.46 9.94-9.94S17.52 2 12.04 2zm5.75 14.18c-.24.67-1.42 1.3-1.95 1.37-.52.07-1.19.1-1.92-.13-.44-.14-1.01-.33-1.74-.65-3.05-1.32-5.04-4.55-5.19-4.75-.14-.2-1.24-1.65-1.24-3.14 0-1.49.78-2.22 1.05-2.52.27-.3.59-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.29.5-.15.17-.31.38-.44.51-.15.15-.31.31-.13.6.18.3.8 1.32 1.71 2.14 1.18 1.05 2.17 1.37 2.48 1.52.31.15.49.13.67-.08.18-.2.78-.91.99-1.23.2-.31.41-.26.69-.15.29.1 1.81.85 2.12 1 .31.15.52.22.59.34.07.12.07.69-.17 1.36z" />
            </svg>

            <span className="
                text-xs md:text-sm font-semibold -rotate-180 md:rotate-0 tracking-widest
                [writing-mode:vertical-rl] [text-orientation:rotate-90]
                md:[writing-mode:horizontal-tb] md:[text-orientation:mixed]
            ">
                VER CATÁLOGO
            </span>
        </a>
    );
}

export default WhatsappButton;