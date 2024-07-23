import Header from "../header";
import Footer from "../footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
};