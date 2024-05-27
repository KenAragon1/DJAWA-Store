import Navbar from "@/Components/Common/Navbar";
import { Head, Link, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
    useEffect(() => {
        fetchData();
        getKategori();
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

    function getKategori() {
        axios
            .get("/api/getKategori")
            .then((response) => setCategoryData(response.data));
    }

    function fetchBanner() {}
    return (
        <div className="min-h-screen pb-10 bg-gray-100">
            <Head title="Djawa Store" />
            <Navbar />

            <div className="bg-slate-300 mx-8 h-[350px] mb-4"></div>

            <div className="pt-4 mx-4 mb-4 bg-white border shadow ">
                <div className="mb-4">
                    <p className="block mb-5 ml-4 text-xl">Kategori</p>
                </div>

                <div
                    className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
                    id="kategori-container"
                >
                    {categoryData.map((category) => (
                        <div className="relative w-auto p-4 border cursor-pointer hover:border-blue-700">
                            <div className="flex items-center w-10/12 mx-auto rounded-full aspect-square">
                                <img
                                    src={`assets/kategori/${category.kategori}.jpeg`}
                                    alt=""
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="text-center ">{category.kategori}</p>
                            <Link
                                href="{{ route('kategori', ['kategori' => ${kategori.kategori})}}"
                                className="absolute top-0 left-0 w-full h-full"
                            ></Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                {products.map(({ id, image, name, price, slug }) => {
                    return (
                        <div
                            className="relative w-64 overflow-hidden bg-white border rounded shadow"
                            key={id}
                        >
                            <img
                                src={"/storage/foto_produk/" + image}
                                alt=""
                                className="aspect-[4/3]"
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
