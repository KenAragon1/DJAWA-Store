import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, router, usePage } from "@inertiajs/react";
import ProductTable from "./Partials/ProductTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

export default function AdminProduct({ products }) {
    // Delete
    function deleteProduct(id) {
        if (confirm("Yakin ingin menghapus produk?")) {
            router.delete("/product/" + id);
        }
    }

    const data = products;

    const { data: items, links } = data;
    console.log(data);

    return (
        <DashboardLayout DashboardLayout>
            <Head title="Dashboard" />
            <p className="mb-4 text-2xl font-semibold">Products List</p>

            <div className="p-8 bg-white border border-gray-300 rounded-lg">
                <Link
                    href={route("product.create")}
                    className="btn btn-secondary btn-sm"
                >
                    + Add New Product
                </Link>
                <ProductTable items={items} deleteProduct={deleteProduct} />
                <div className="">
                    <p>
                        Page {data.current_page} of {data.last_page}
                    </p>
                    <div className="join">
                        {links.map((link) => {
                            if (Number(link.label)) {
                                return (
                                    <Link
                                        href={link.url}
                                        className="join-item btn "
                                    >
                                        {link.label}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>

                <div className="overflow-x-auto"></div>
            </div>
        </DashboardLayout>
    );
}
