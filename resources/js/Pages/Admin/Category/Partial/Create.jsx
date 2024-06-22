import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });

    function submitForm(e) {
        e.preventDefault();
        post(route("category.store"), {
            preserveScroll: false,
            onSuccess: () => {
                setData({ name: "" });
                document.getElementById("create-modal").checked = false;
            },
        });
    }
    return (
        <>
            <input type="checkbox" id="create-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="max-w-xl modal-box">
                    <h3 className="text-lg font-bold">Create Category</h3>
                    <div className="p-4">
                        <form onSubmit={submitForm} id="form" method="">
                            <div className="grid grid-cols-[80px,1fr] items-center">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData({ name: e.target.value })
                                    }
                                    required
                                />
                            </div>
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="create-modal" className="btn">
                            Close
                        </label>

                        <button
                            type="submit"
                            form="form"
                            className="btn btn-secondary"
                            disabled={processing}
                        >
                            Create
                        </button>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="create-modal">
                    Close
                </label>
            </div>
        </>
    );
}
