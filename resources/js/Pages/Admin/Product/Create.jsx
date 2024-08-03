import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import ProductForm from "./Components/Form";
import useForm from "@/hooks/useForm";
import { router } from "@inertiajs/react";

export default function Create({ categories }) {
    const { data, processing, handleChange, errors } = useForm({
        name: "",
        price: "",
        stock: "",
        id_category: "",
        brand: "",
        weight: "",
        spesification: "",
        description: "",
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post(route("product.store"), data);
    }

    return (
        <DashboardLayout>
            <div className="p-8 mx-8 mt-4 bg-white border border-gray-300 rounded-lg">
                <p className="mb-4 text-lg font-semibold text-secondary">
                    Create New Product
                </p>
                <ProductForm
                    data={data}
                    categories={categories}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </DashboardLayout>
    );
}
