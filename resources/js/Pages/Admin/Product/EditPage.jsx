import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import getCategory from "@/Services/category";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const ProductEdit = ({ auth, product }) => {
    const [productForm, setProductForm] = useState(product);

    console.log(productForm);
    const [previewImg, setPreviewImg] = useState(product.image);

    function onSubmit(e) {
        e.preventDefault();
        console.log(productForm);
        router.post("/product/" + product.id_product, {
            _method: "patch",
            ...productForm,
        });
    }

    const [categoryOptions, setCategoryOptions] = useState([]);

    function handleInputChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setProductForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleCategorySelect(e) {
        handleInputChange(e);
    }

    function handlePreviewImg(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        getCategory().then(({ data }) => {
            setCategoryOptions(data);
        });
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Edit Product
                    </h2>
                </>
            }
        >
            <div className="p-8 mx-8 mt-4 bg-white shadow">
                <div className="">
                    <form onSubmit={onSubmit} className="mb-4">
                        <div className="mb-6">
                            <InputLabel className="font-semibold">
                                Category
                            </InputLabel>
                            <select
                                id="id_category"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={handleCategorySelect}
                                value={productForm.id_category}
                            >
                                <option value="">Pick Category</option>
                                {categoryOptions.map((option) => (
                                    <option value={option.id} key={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Nama Produk
                            </InputLabel>
                            <TextInput
                                id="name"
                                value={productForm.name}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Harga Produk
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="price"
                                value={productForm.price}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Stok Produk
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="stock"
                                value={productForm.stock}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Berat Produk
                            </InputLabel>
                            <TextInput
                                id="weight"
                                type="number"
                                className="w-full"
                                value={productForm.weight}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Brand Produk
                            </InputLabel>
                            <TextInput
                                id="brand"
                                className="w-full"
                                value={productForm.brand}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Deskripsi Produk
                            </InputLabel>
                            <textarea
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                name=""
                                id="description"
                                cols="30"
                                rows="10"
                                value={productForm.description}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <InputLabel>Foto Produk</InputLabel>
                            <div>
                                <img
                                    src={previewImg}
                                    width="100"
                                    height="75"
                                    alt="preview image"
                                />
                                <TextInput
                                    type="file"
                                    onChange={(e) => {
                                        setProductForm((prev) => ({
                                            ...prev,
                                            image: e.target.files[0],
                                        }));
                                        handlePreviewImg(e);
                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <PrimaryButton type="submit">Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductEdit;
