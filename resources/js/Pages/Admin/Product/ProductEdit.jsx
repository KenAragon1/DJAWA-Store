import { router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ProductForm from "./Partials/ProductForm";

const ProductEdit = ({
    updateProducts,
    show,
    closeProductEditForm,
    productData,
}) => {
    const defaultSpesificaton = {
        weight: "",
        brand: "",
    };

    useEffect(() => {
        const { image, spesification } = productData;

        setData(productData);
        setPreviewImg(image ? "/storage/foto_produk/" + image : "");
        setSpesification(
            spesification ? JSON.parse(spesification) : defaultSpesificaton
        );
    }, [productData]);

    const { data, setData, post, processing, errors, reset } =
        useForm(productData);

    const [previewImg, setPreviewImg] = useState();

    const [spesification, setSpesification] = useState(defaultSpesificaton);

    function onSubmit(e) {
        e.preventDefault();
        console.log(data);
        router.post(
            "/api/product/" + productData.id,
            {
                _method: "put",
                ...data,
            },
            {
                onSuccess: () => {
                    alert("berhasil edit produk");
                    closeProductEditForm();
                    updateProducts();
                },
            }
        );
    }

    function resetForm() {
        resetSpesificationInput();
    }

    function resetSpesificationInput() {
        setSpesification({
            weight: "",
            brand: "",
        });
    }

    return (
        <ProductForm
            title={"Edit product"}
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
            closeProductForm={closeProductEditForm}
        />
    );
};

export default ProductEdit;
