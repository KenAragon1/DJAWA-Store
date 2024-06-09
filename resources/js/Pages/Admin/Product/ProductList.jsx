import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import ProductTable from "./Partials/ProductTable";
import { useState } from "react";

const AdminProduct = ({ auth, products }) => {
    // Delete
    function deleteProduct(id) {
        if (confirm("Yakin ingin menghapus produk?")) {
            router.delete("/product/" + id);
        }
    }

    console.log(products);

    const data = products;

    const { data: items, links } = data;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                </>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm">
                        <div className="p-6">
                            <PrimaryButton
                                className="mb-4"
                                onClick={() =>
                                    router.get(route("admin.add-product-page"))
                                }
                            >
                                Tambah Produk Baru
                            </PrimaryButton>
                            <ProductTable
                                items={items}
                                deleteProduct={deleteProduct}
                            />
                            <ul className="flex mt-4">
                                {links.map((link) => (
                                    <li className="border ">
                                        <Link
                                            href={link.url}
                                            className="block px-4 py-2"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AdminProduct;
