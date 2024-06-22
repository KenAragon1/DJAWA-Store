import { router, useForm } from "@inertiajs/react";
import { convertOrderStatus } from "../Index";
import { useState } from "react";

export default function OrderStatus({ id_order, id_status, status_option }) {
    const [orderStatusForm, setOrderStatusForm] = useState({
        id_status: status_option[0]?.id_status,
    });

    function submitForm(e) {
        e.preventDefault();

        console.log(orderStatusForm);

        router.patch(
            route("order-update", { id_order: id_order }),
            orderStatusForm
        );
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setOrderStatusForm((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    }

    console.log(id_status);

    return (
        <div className="mb-4 main-container">
            <p className="text-lg font-semibold">Order Status :</p>
            <div>
                <div className="">{convertOrderStatus(id_status)}</div>
                <div>
                    {id_status !== 4 && (
                        <div className="mb-2">
                            <form onSubmit={submitForm}>
                                <div className="mb-2">
                                    <label htmlFor="" className="label">
                                        Set Order Status To :
                                    </label>
                                    <select
                                        name="id_status"
                                        id=""
                                        className="w-full select select-bordered"
                                        onChange={handleChange}
                                    >
                                        {status_option.map((option) => (
                                            <option value={option.id_status}>
                                                {option.status}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="" className="label">
                                        Receipt No :
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full input input-bordered"
                                    />
                                </div>

                                <button className="w-full btn btn-secondary">
                                    Update
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
