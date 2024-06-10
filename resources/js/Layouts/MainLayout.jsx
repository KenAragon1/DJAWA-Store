import Footer from "@/Components/Common/Footer";
import Header from "@/Components/Common/Header";
import MainCategory from "@/Components/Common/MainCategory";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <MainCategory />
            <main className="min-h-screen mt-4 layout">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
