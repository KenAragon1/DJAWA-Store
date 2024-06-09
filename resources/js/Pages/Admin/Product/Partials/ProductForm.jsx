import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Dialog } from "@headlessui/react";

const ProductForm = ({
    title,
    show,
    onSubmit,
    data,
    setData,
    spesification,
    setSpesification,
    previewImg,
    setPreviewImg,
    processing,
    errors,
    resetForm,
    closeProductForm,
}) => {
    function updateData(key, value) {
        setData((data) => ({
            ...data,
            [key]: value,
        }));
    }

    function handleData(e) {
        const key = e.target.id;
        const value = e.target.value;
        updateData(key, value);
    }

    function handlePreviewImg(e) {
        setPreviewImg(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <Modal show={show}>
            <Dialog.Title
                as="h3"
                className="pt-4 text-lg font-medium leading-6 text-center text-gray-900"
            >
                {title}
            </Dialog.Title>
            <div className="p-6">
                <form onSubmit={onSubmit} className="mb-4">
                    <div className="mb-4">
                        <InputLabel>Kategori Produk</InputLabel>
                        <select
                            name=""
                            id="category"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            onChange={handleData}
                            value={data.category}
                        >
                            <option value="">Pick Category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="CPU">CPU</option>
                            <option value="GPU">GPU</option>
                            <option value="Monitor">Monitor</option>
                        </select>
                        {errors.category && (
                            <InputError message={errors.category} />
                        )}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Nama Produk</InputLabel>
                        <TextInput
                            id="name"
                            value={data.name}
                            onChange={handleData}
                            className="w-full"
                        />
                        {errors.name && <InputError message={errors.name} />}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Harga Produk</InputLabel>
                        <TextInput
                            type="number"
                            id="price"
                            value={data.price}
                            onChange={handleData}
                            className="w-full"
                        />
                        {errors.price && <InputError message={errors.price} />}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Stok Produk</InputLabel>
                        <TextInput
                            type="number"
                            id="stock"
                            value={data.stock}
                            onChange={handleData}
                            className="w-full"
                        />
                        {errors.price && <InputError message={errors.price} />}
                    </div>

                    <div className="mb-4">
                        <p>Berat</p>
                        <TextInput
                            id="weight"
                            type="number"
                            className="w-full"
                            value={spesification.weight}
                            onChange={handleSpesifikasi}
                        />
                    </div>
                    <div className="mb-4">
                        <p>Brand</p>
                        <TextInput
                            id="brand"
                            className="w-full"
                            value={spesification.brand}
                            onChange={handleSpesifikasi}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel>Deskripsi Produk</InputLabel>
                        <textarea
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            name=""
                            id="description"
                            cols="30"
                            rows="10"
                            value={data.description}
                            onChange={handleData}
                        ></textarea>
                        {errors.description && (
                            <InputError message={errors.description} />
                        )}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Foto Produk</InputLabel>
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
                        {errors.image && <InputError message={errors.image} />}
                    </div>

                    <PrimaryButton type="submit" disabled={processing}>
                        Submit
                    </PrimaryButton>
                </form>
                <PrimaryButton
                    onClick={() => {
                        closeProductForm();
                        resetForm();
                    }}
                >
                    Close
                </PrimaryButton>
            </div>
        </Modal>
    );
};

export default ProductForm;
