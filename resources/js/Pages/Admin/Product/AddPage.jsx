import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import getCategory from "@/Services/category";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";

const ProductAdd = ({ auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        price: "",
        stock: "",
        id_category: "",
        brand: "",
        weight: "",
        spesification: "",
        description: "",
        image: "",
    });

    const [categoryOptions, setCategoryOptions] = useState([]);

    function onSubmit(e) {
        e.preventDefault();
        console.log(data);
        post("/product");
    }

    function handleInputChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    }

    function handleCategorySelect(e) {
        handleInputChange(e);
        const id_category = e.target.value;

        axios
            .get("/api/spesification/" + id_category)
            .then((response) => console.log(response));
    }

    function handlePreviewImg(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    const [previewImg, setPreviewImg] = useState();

    useEffect(() => {
        getCategory().then(({ data }) => {
            setCategoryOptions(data);
            console.log(data);
        });
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Create New Product
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
                                name=""
                                id="id_category"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={handleCategorySelect}
                                value={data.id_category}
                            >
                                <option value="">Pick Category</option>
                                {categoryOptions.map((option) => (
                                    <option
                                        value={option.id_category}
                                        key={option.id_category}
                                    >
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            {errors.id_category && (
                                <InputError message={errors.id_category} />
                            )}
                        </div>
                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Nama Produk
                            </InputLabel>
                            <TextInput
                                id="name"
                                value={data.name}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                            {errors.name && (
                                <InputError message={errors.name} />
                            )}
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Harga Produk
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="price"
                                value={data.price}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                            {errors.price && (
                                <InputError message={errors.price} />
                            )}
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Stok Produk
                            </InputLabel>
                            <TextInput
                                type="number"
                                id="stock"
                                value={data.stock}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                            {errors.price && (
                                <InputError message={errors.price} />
                            )}
                        </div>

                        <div className="mb-4">
                            <InputLabel className="font-semibold">
                                Berat Produk
                            </InputLabel>
                            <TextInput
                                id="weight"
                                type="number"
                                className="w-full"
                                value={data.weight}
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
                                value={data.brand}
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
                                value={data.description}
                                onChange={handleInputChange}
                            ></textarea>
                            {errors.description && (
                                <InputError message={errors.description} />
                            )}
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
                                        setData("image", e.target.files[0]);
                                        handlePreviewImg(e);
                                    }}
                                    className="w-full"
                                />
                            </div>
                            {errors.image && (
                                <InputError message={errors.image} />
                            )}
                        </div>

                        <PrimaryButton type="submit" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </form>
                    <PrimaryButton
                        onClick={() => {
                            closeProductAddForm();
                            resetForm();
                        }}
                    >
                        Close
                    </PrimaryButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductAdd;
