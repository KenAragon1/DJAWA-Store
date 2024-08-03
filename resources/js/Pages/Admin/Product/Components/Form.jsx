import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useForm from "@/hooks/useForm";
import { useImagePreview } from "@/libs/hooks";
import { router } from "@inertiajs/react";

export default function ProductForm({
    data,
    categories,
    handleChange,
    handleSubmit,
}) {
    const { imagePreview, handleImagePreview } = useImagePreview();

    return (
        <form
            onSubmit={(e) => {
                handleSubmit(e);
                console.log(data);
            }}
            className="mb-4"
        >
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Category</InputLabel>
                <select
                    name="id_category"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={handleChange}
                    defaultValue={data.id_category}
                >
                    <option value="">Pick Category</option>
                    {categories.map((category) => (
                        <option
                            value={category.id_category}
                            key={category.id_category}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Name</InputLabel>
                <TextInput
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Price</InputLabel>
                <TextInput
                    type="number"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Stock</InputLabel>
                <TextInput
                    type="number"
                    name="stock"
                    value={data.stock}
                    onChange={handleChange}
                    className="w-full"
                />
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Weigth (Gram)</InputLabel>
                <TextInput
                    name="weight"
                    type="number"
                    className="w-full"
                    value={data.weight}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Brand</InputLabel>
                <TextInput
                    name="brand"
                    className="w-full"
                    value={data.brand}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Description</InputLabel>
                <textarea
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    name="description"
                    cols="30"
                    rows="10"
                    value={data.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="mb-2 grid grid-cols-[160px,1fr] items-center">
                <InputLabel className="font-semibold">Image</InputLabel>
                <div className="flex gap-2">
                    <img
                        src={imagePreview}
                        width="200"
                        className="aspect-square bg-neutral-300"
                    />
                    <TextInput
                        type="file"
                        name="image"
                        onChange={(e) => {
                            handleChange(e);
                            handleImagePreview(e);
                        }}
                        className="w-full"
                    />
                </div>
            </div>
            <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
    );
}
