import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react";
import { productos } from "./assets/data/productos"

import CarruselProductos from "./components/CarruselProductos/CarruselProductos";
import Galeria from "./components/Galeria/Galeria";
import Header from "./components/Header/Header";
import Nosotros from "./components/Nosotros/Nosotros";
import ListaProductos from "./pages/ListaProductos/ListaProductos";
import Footer from "./components/Footer/Footer";
import ProductoDetalle from "./pages/ProductoDetalle/ProductoDetalle";
import TopBanner from "./components/TopBanner/TopBanner";
import CintaDecorativa from "./components/CintaDecorativa/CintaDecorativa";
import Beneficios from "./components/Beneficios/Beneficios";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes";
import WhatsappButton from "./components/BotonWhatsapp/BotonWhatsapp";

function Home() {
    return (
        <>
            <WhatsappButton />
            <Nosotros />
            <CarruselProductos productos={productos} />
            <CintaDecorativa />
            <Galeria />
            <Beneficios />
            <PreguntasFrecuentes />
        </>
    )
}

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            {children}
        </motion.div>
    );
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return null
}

function App() {

    const location = useLocation();

    return (
        <>
            <TopBanner />
            <Header />

            <ScrollToTop />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/productos"
                        element={
                            <PageWrapper>
                                <ListaProductos />
                            </PageWrapper>
                        }
                    />

                    <Route
                        path="/productos/:slug"
                        element={
                            <PageWrapper>
                                <ProductoDetalle />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </AnimatePresence>

            <Footer />
        </>
    )
}

export default App;
