import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";

export default function Edit({ category, isEditModalOpen, closeEditModal }) {
    const { data, setData, patch, errors, processing } = useForm({
        name: "",
    });

    function updateCategory(e) {
        e.preventDefault();
        patch(
            route("category.update", { id_category: category?.id_category }),
            {
                preserveScrolls: true,
                onSuccess: () => {
                    closeEditModal();
                    setData({ name: "" });
                },
            }
        );
    }

    return (
        <>
            <input
                type="checkbox"
                id="my_modal_6"
                className="modal-toggle"
                checked={isEditModalOpen}
            />
            <div className="modal" role="dialog">
                <div className="max-w-xl modal-box">
                    <h3 className="text-lg font-bold">Edit Category</h3>
                    <div className="p-4">
                        <form id="form" method="">
                            <div className="grid grid-cols-[100px,1fr] items-center">
                                <label htmlFor="">Old Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    required
                                    disabled
                                    value={category?.name}
                                />
                            </div>
                            <div className="grid grid-cols-[100px,1fr] items-center">
                                <label htmlFor="">New Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    required
                                    value={data.name}
                                    onChange={(e) => {
                                        setData({ name: e.target.value });
                                    }}
                                />
                            </div>
                            <InputError
                                className="mt-2"
                                message={errors.name}
                            />
                        </form>
                    </div>
                    <div className="modal-action">
                        <button
                            className="btn"
                            onClick={() => {
                                closeEditModal();
                                setData({
                                    name: "",
                                });
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-success"
                            onClick={updateCategory}
                            disabled={processing}
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
