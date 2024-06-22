export default function ConfirmDeleteCategory({
    isConfirmDeleteOpen,
    closeConfirmDeleteCategory,
    deleteCategory,
}) {
    return (
        <div className="">
            <input
                type="checkbox"
                id="confirm-delete-category"
                className="modal-toggle"
                checked={isConfirmDeleteOpen}
            />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">
                        Are you sure want to delete this category ?
                    </h3>
                    <p className="py-4 font-semibold text-red-500">
                        Warning !!! All products with this category will have no
                        category
                    </p>
                    <div className="modal-action">
                        <button
                            onClick={closeConfirmDeleteCategory}
                            className="btn"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={deleteCategory}
                            className="btn-error btn"
                        >
                            DELETE !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
