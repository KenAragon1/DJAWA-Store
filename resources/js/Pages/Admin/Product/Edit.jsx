import { router } from "@inertiajs/react";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import useForm from "@/hooks/useForm";
import ProductForm from "./Components/Form";

export default function Edit({ product, categories }) {
    const { data, processing, handleChange, errors } = useForm({
        name: product.name,
        price: product.price,
        stock: product.stock.quantity,
        weight: product.weight,
        brand: product.brand,
        description: product.description,
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/product/" + product.id_product, {
            _method: "patch",
            ...data,
        });
    }

    return (
        <DashboardLayout>
            <div className="p-8 mx-8 mt-4 bg-white border border-gray-300 rounded-lg">
                <p className="mb-4 text-lg font-semibold text-secondary">
                    Edit Product : {product.name}
                </p>
                <ProductForm
                    data={data}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    categories={categories}
                />
            </div>
        </DashboardLayout>
    );
}
