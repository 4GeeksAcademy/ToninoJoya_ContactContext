import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Footer } from "../components/Footer"
import { Contactos } from "../components/Contactos"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <Contactos />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}