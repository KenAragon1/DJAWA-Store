import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import Create from "./Partial/Create";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import ConfirmDeleteCategory from "./Partial/ConfirmDelete";
import Edit from "./Partial/Edit";

export default function Index({ categories }) {
    const { success } = usePage().props.flash;

    const [idToDelete, setIdToDelete] = useState(null);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
    function confirmDeleteCategory(id_category) {
        setIsConfirmDeleteOpen(true);
        setIdToDelete(id_category);
    }
    function deleteCategory() {
        router.delete(route("category.delete", { id_category: idToDelete }), {
            onSuccess: () => {
                closeConfirmDeleteCategory();
            },
            preserveScroll: true,
        });
    }
    function closeConfirmDeleteCategory() {
        setIdToDelete(null);
        setIsConfirmDeleteOpen(false);
    }

    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    function openEditModal(category) {
        setCategoryToEdit(category);
        setIsEditModalOpen(true);
    }
    function closeEditModal() {
        setIsEditModalOpen(false);
        setCategoryToEdit(null);
    }

    return (
        <DashboardLayout>
            <p className="mb-2 text-xl font-semibold text-secondary">
                Category Manager
            </p>
            <label htmlFor="create-modal" className="mb-4 btn btn-secondary">
                + Create New Category
            </label>

            {success && (
                <div role="alert" className="mb-4 alert alert-success">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 stroke-current shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{success}</span>
                </div>
            )}

            <Create />
            <Edit
                category={categoryToEdit}
                isEditModalOpen={isEditModalOpen}
                closeEditModal={closeEditModal}
            />

            <div className="main-container">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={category.id_category}>
                                    <td>{index + 1}.</td>
                                    <td className="font-semibold">
                                        {category.name}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                confirmDeleteCategory(
                                                    category.id_category
                                                )
                                            }
                                            className="p-4 group"
                                        >
                                            <FaRegTrashAlt className="transition-colors group-hover:fill-red-600 group-hover:drop-shadow-xl" />
                                        </button>
                                        <button
                                            onClick={() =>
                                                openEditModal(category)
                                            }
                                            className="p-4 group"
                                        >
                                            <FaEdit className="transition-colors group-hover:fill-green-600 group-hover:drop-shadow-xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <ConfirmDeleteCategory
                isConfirmDeleteOpen={isConfirmDeleteOpen}
                closeConfirmDeleteCategory={closeConfirmDeleteCategory}
                deleteCategory={deleteCategory}
            />
        </DashboardLayout>
    );
}
