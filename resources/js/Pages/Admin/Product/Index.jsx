import { Head, Link, router } from "@inertiajs/react";
import ProductTable from "./Components/Table";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import Pagination from "./Components/Pagination";

export default function index({ productsPagination }) {
    // Delete
    function deleteProduct(id) {
        if (confirm("Yakin ingin menghapus produk?")) {
            router.delete("/product/" + id);
        }
    }

    const { data: products } = productsPagination;

    return (
        <DashboardLayout>
            <Head title="Dashboard" />
            <p className="mb-4 text-2xl font-semibold">Products List</p>

            <div className="p-8 bg-white border border-gray-300 rounded-lg">
                <Link
                    href={route("product.create")}
                    className="btn btn-secondary btn-sm"
                >
                    + Add New Product
                </Link>
                <ProductTable items={products} deleteProduct={deleteProduct} />
                <Pagination paginationData={productsPagination} />
            </div>
        </DashboardLayout>
    );
}
