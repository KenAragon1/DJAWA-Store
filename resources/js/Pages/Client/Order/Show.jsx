import { Head, router, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { convertOrderStatus } from "@/Pages/Admin/Order/Index";
import MainLayout from "@/Layouts/MainLayout";

export default function Show({ order }) {
    const { MIDTRANS_CLIENT_KEY } = usePage().props;

    console.log(order);

    const orderStatus = {
        payment_pending: "Waiting For Payment",
        proccessing: "The Seller is Preparing Your Order",
    };

    function createScript() {
        const script = document.createElement("script");

        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";

        script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);

        script.async = true;

        script.onload = midtrans;

        document.body.appendChild(script);
    }

    function midtrans() {
        const { token } = order.payment;
        if (!token) return;

        window.snap.embed(token, {
            embedId: "snap-container",
            onSuccess: function (result) {
                router.patch("/order/" + order.id_order, {
                    payment_method: result.payment_type,
                    total_transaction: result.gross_amount,
                });
            },
        });
    }

    useEffect(() => {
        createScript();
    }, []);
    return (
        <MainLayout>
            <Head title="Order" />
            <div className="flex flex-wrap justify-center gap-4 mx-8 mt-4">
                <div className="p-8 bg-white border border-gray-300 rounded-lg w-[800px] h-fit">
                    <p className="text-xl font-bold text-secondary">My Order</p>

                    <div className="flex mb-4 text-xl font-semibold text-secondary">
                        Status : {convertOrderStatus(order.id_status)}
                    </div>
                    <div className="">
                        <div className="">
                            <p className="mb-2 font-semibold">
                                Customer Details :
                            </p>
                            <table className="mb-4">
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2">Full Name</td>
                                        <td className="px-4 py-2">:</td>
                                        <td className="px-4 py-2">
                                            {
                                                order.payment.customer_details
                                                    .customer_name
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Email</td>
                                        <td className="px-4 py-2">:</td>
                                        <td className="px-4 py-2">
                                            {
                                                order.payment.customer_details
                                                    .customer_email
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Address</td>
                                        <td className="px-4 py-2">:</td>
                                        <td className="px-4 py-2">
                                            {
                                                order.payment.customer_details
                                                    .customer_address
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {order.id_status !== 1 && (
                            <div className="">
                                <p className="mb-2 font-semibold">
                                    Payment Details :
                                </p>{" "}
                                <table className="mb-4">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">
                                                Total Transaction
                                            </td>
                                            <td className="px-4 py-2">:</td>
                                            <td className="px-4 py-2">
                                                Rp{" "}
                                                {order.payment.total.toLocaleString(
                                                    "id-ID"
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">
                                                Payment Method
                                            </td>
                                            <td className="px-4 py-2">:</td>
                                            <td className="px-4 py-2">
                                                {order.payment.payment_method}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        <div className="">
                            <p className="mb-2 font-semibold">
                                Products Ordered :
                            </p>{" "}
                            <div>
                                {order.order_item.map((product) => (
                                    <div className="">
                                        <div className="flex justify-between gap-4 p-6 bg-white rounded-lg ">
                                            <img
                                                src={product.image}
                                                alt="product-image"
                                                className="w-40 aspect-[4/3]"
                                            />
                                            <div className="flex justify-between w-full">
                                                <div className="mt-5 sm:mt-0">
                                                    <h2 className="text-lg font-bold text-gray-900">
                                                        {product.name}
                                                    </h2>
                                                    <p className="mt-1 text-sm text-gray-700">
                                                        {product.quantity}x
                                                    </p>
                                                </div>
                                                <div className="flex justify-between mt-4 ">
                                                    <div className="border-gray-100 ">
                                                        <p className="text-lg text-end whitespace-nowrap">
                                                            Rp{" "}
                                                            {(
                                                                product.quantity *
                                                                product.price
                                                            ).toLocaleString(
                                                                "id-ID"
                                                            )}
                                                        </p>
                                                        <p className="text-xs text-gray-500 text-end">
                                                            Rp{" "}
                                                            {product.price?.toLocaleString(
                                                                "id-ID"
                                                            )}
                                                            / Pcs
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="snap-container"></div>
            </div>
        </MainLayout>
    );
}
