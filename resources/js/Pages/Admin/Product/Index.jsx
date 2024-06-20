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
                <ul className="flex mt-4"></ul>
                <div className="join">
                    {links.map((link) => (
                        <Link href={link.url} className="join-item btn ">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="overflow-x-auto"></div>
            </div>
        </DashboardLayout>
    );
}
