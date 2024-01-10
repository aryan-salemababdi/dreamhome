import { NextPage } from "next";
import { ReactNode } from "react";
import Footer from "@/components/Atom/Footer/Footer";
import Header from "@/components/Atom/Header/Header";

type LayoutType = {
    children: ReactNode
}


const Layout: NextPage<LayoutType> = ({ children }) => {
    const style = { minHeight: "700px" };

    return (
        <>
            <Header />
            <div style={style}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;

