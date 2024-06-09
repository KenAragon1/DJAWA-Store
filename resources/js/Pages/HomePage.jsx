import Navbar from "@/Components/Common/Navbar";
import { Head, Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import getCategory from "@/Services/category";

const HomePage = () => {
    useEffect(() => {
        getCategory().then(({ data }) => console.log(data));
        fetchData();
    }, []);

    const [products, setProducts] = useState([]);

    const [categoryData, setCategoryData] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("/api/product");
            const jsonData = await response.json();
            setProducts(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    function fetchBanner() {}
    return (
        <div className="min-h-screen pb-10 bg-gray-100">
            <Head title="Djawa Store" />
            <Navbar />

            {/* Hero Section */}
            <div className="p-8 mb-4 h-[95dvh] bg-[url('/storage/images/hero/heroimage.jpg')] bg-no-repeat bg-cover bg-left-bottom text-white">
                <div className="mt-8 break-words ">
                    <p className="text-[4rem] font-bold tracking-widest leading-none mb-4">
                        DJAWA STORE
                    </p>
                    <p className="text-3xl tracking-wide max-w-[600px] mb-4 break-words">
                        Toko Komputer Teraman, Terjamin, & Terpercaya
                    </p>
                    <p className="max-w-[600px]  break-words">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo ab voluptatibus vitae iusto, ut saepe voluptates
                        soluta voluptatem necessitatibus ullam.
                    </p>
                </div>
            </div>

            <div className="flex gap-2 mx-8">
                {products.map(({ id, image, name, price, slug }) => {
                    return (
                        <div
                            className="relative w-56 overflow-hidden bg-white border rounded shadow"
                            key={id}
                        >
                            <img
                                src={image}
                                alt=""
                                className="aspect-[1.5/1]"
                            />
                            <div className="p-4 space-y-1">
                                <p className="font-semibold leading-none tracking-tight ">
                                    {name}
                                </p>
                                <p className="text-sm text-gray-400 ">
                                    Rp {price.toLocaleString("id-ID")}
                                </p>
                            </div>
                            <Link
                                href={"product/" + slug}
                                className="absolute top-0 left-0 w-full h-full"
                            ></Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomePage;
