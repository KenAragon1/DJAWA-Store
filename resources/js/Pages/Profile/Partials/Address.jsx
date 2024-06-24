import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import CreateAddress from "./CreateAddress";
import { useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Address({ addresses }) {
    const { success } = usePage().props.flash;

    const [isCreateAddressModalOpen, setIsCreateAddressModalOpen] =
        useState(false);
    function closeCreateAddressModal() {
        setIsCreateAddressModalOpen(false);
    }

    const [idToDelete, setIdToDelete] = useState(null);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
    function confirmDeleteCategory(id_address) {
        setIsConfirmDeleteOpen(true);
        setIdToDelete(id_address);
    }
    function deleteAddress() {
        router.delete(
            route("user.address.delete", { id_address: idToDelete }),
            {
                preserveScroll: true,
                onSuccess: () => {
                    closeDeleteConfirm();
                },
            }
        );
    }
    function closeDeleteConfirm() {
        setIsConfirmDeleteOpen(false);
        setIdToDelete(null);
    }

    return (
        <section>
            <header className="mb-2">
                <h2 className="text-lg font-medium text-gray-900">
                    My Address
                </h2>
            </header>
            <div className="">
                <button
                    onClick={() => setIsCreateAddressModalOpen(true)}
                    className="px-4 mb-2 rounded-none btn btn-sm btn-secondary"
                >
                    + Add New Address
                </button>
                {success && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {success}
                    </div>
                )}

                <CreateAddress
                    isCreateAddressModalOpen={isCreateAddressModalOpen}
                    closeCreateAddressModal={closeCreateAddressModal}
                />

                <div className="grid grid-cols-3 gap-2">
                    {addresses?.map((address) => (
                        <div className="p-4 border border-gray-300 rounded h-[10rem] justify-between flex flex-col">
                            <div className="">
                                <p className="text-lg font-semibold">
                                    {address.label}
                                </p>
                                <p className="line-clamp-3">
                                    {address.detail +
                                        ", " +
                                        address.city +
                                        ", " +
                                        address.province +
                                        ", " +
                                        address.zip}
                                </p>
                            </div>
                            <button
                                className="self-end p-4 justify-self-end group"
                                onClick={() =>
                                    confirmDeleteCategory(address.id_address)
                                }
                            >
                                <FaRegTrashAlt className="transition-colors group-hover:fill-red-600 group-hover:drop-shadow-xl" />
                            </button>
                        </div>
                    ))}

                    {addresses.length === 0 && <>Create Address</>}
                </div>
            </div>

            <div className="">
                <input
                    type="checkbox"
                    className="modal-toggle"
                    checked={isConfirmDeleteOpen}
                />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <h3 className="text-lg font-bold">
                            Confirm Delete Address!
                        </h3>
                        <p className="py-4">
                            Are you sure want to delete this address?
                        </p>
                        <div className="modal-action">
                            <button
                                className="btn"
                                onClick={closeDeleteConfirm}
                            >
                                Close!
                            </button>
                            <button
                                className="btn btn-error"
                                onClick={deleteAddress}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
