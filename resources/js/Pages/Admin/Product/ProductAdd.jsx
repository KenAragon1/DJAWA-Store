import { useForm } from "@inertiajs/react";
import { useState } from "react";
import ProductForm from "./Partials/ProductForm";

const ProductAdd = ({ show, closeProductAddForm, updateProducts }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        price: "",
        stock: "",
        category: "",
        spesification: "",
        description: "",
        image: "",
    });

    const [spesification, setSpesification] = useState({
        weight: "",
        brand: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        console.log(data);
        post("/api/product", {
            onSuccess: () => {
                updateProducts();
                resetForm();
                closeProductAddForm();
            },
        });
    }

    function resetForm() {
        reset(
            "name",
            "price",
            "stock",
            "category",
            "spesification",
            "description",
            "image"
        );
        resetSpesificationInput();
        setPreviewImg("");
    }

    function resetSpesificationInput() {
        setSpesification({
            weight: "",
            brand: "",
        });
    }

    const [previewImg, setPreviewImg] = useState();

    return (
        <ProductForm
            title={"Add New Product"}
            show={show}
            onSubmit={onSubmit}
            data={data}
            setData={setData}
            spesification={spesification}
            setSpesification={setSpesification}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            processing={processing}
            errors={errors}
            resetForm={resetForm}
            closeProductForm={closeProductAddForm}
        />
    );
};

export default ProductAdd;
