import { router, useForm } from "@inertiajs/react";
import { convertOrderStatus } from "../Index";
import { useState } from "react";
import InputError from "@/Components/InputError";

export default function OrderStatus({
    id_order,
    id_status,
    status_option,
    order_status,
    no_receipt,
    ordered_at,
}) {
    const { data, setData, patch, errors, processing } = useForm({
        id_status: status_option[0]?.id_status,
        no_receipt: "",
    });

    function submitForm(e) {
        e.preventDefault();

        console.log(data);

        patch(route("order-update", { id_order: id_order }), {
            preserveScroll: true,
            onSuccess: () => {
                setData((prev) => ({
                    id_status: prev.id_status + 1,
                }));
            },
        });
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    }

    console.log(id_status);

    return (
        <div className="mb-4 main-container">
            <p className="mb-2 text-lg font-semibold">Order details</p>
            <div className="mb-2 grid grid-cols-[120px,1fr]">
                <div>Ordered At </div>
                <div>{ordered_at}</div>
            </div>
            <div className="mb-2 grid grid-cols-[120px,1fr]">
                <div>Order Status </div>
                <div>{convertOrderStatus(order_status.status)}</div>
            </div>
            <div className="mb-2 grid grid-cols-[120px,1fr]">
                <div>No Receipt </div>
                <div>{no_receipt}</div>
            </div>
            <div>
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
                                        disabled={no_receipt}
                                        name="no_receipt"
                                        value={no_receipt || data.no_receipt}
                                        onChange={handleChange}
                                        className="w-full input input-bordered"
                                    />
                                </div>
                                <InputError message={errors.no_receipt} />
                                <button
                                    disabled={processing}
                                    className="w-full btn btn-secondary"
                                >
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
