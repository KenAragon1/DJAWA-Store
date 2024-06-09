import GuestLayout from "@/Layouts/GuestLayout";
import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";

export default function OrderPage({ orderData }) {
    console.log(orderData);
    const { MIDTRANS_CLIENT_KEY } = usePage().props;

    function createScript() {
        const script = document.createElement("script");

        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";

        script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);

        script.async = true;

        script.onload = midtrans;

        document.body.appendChild(script);
    }

    function midtrans() {
        const { token } = orderData.payment;
        if (!token) return;

        window.snap.embed(token, {
            embedId: "snap-container",
            onSuccess: function (result) {
                router.patch("/order/" + orderData.id_order, {
                    status: "Waiting For Admin Confirmation",
                });
            },
        });
    }

    useEffect(() => {
        createScript();
    }, []);
    return (
        <GuestLayout>
            <div className="flex flex-wrap justify-center gap-4 mx-8 mt-4">
                <div className="p-8 bg-white shadow-sm w-[800px] h-fit">
                    <p className="mb-4 text-xl font-semibold">Detail Pesanan</p>
                    <div className="">
                        <table className="mb-4">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">
                                        Nama Pelanggan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {
                                            orderData.payment.customer_details
                                                .customer_name
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Email</td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {
                                            orderData.payment.customer_details
                                                .customer_email
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        Alamat Pelanggan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {
                                            orderData.payment.customer_details
                                                .customer_address
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        Status Pesanan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {orderData.status}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            {orderData.order_item.map((product) => (
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
                                                <p className="mt-1 text-xs text-gray-700">
                                                    {product.quantity}
                                                </p>
                                            </div>
                                            <div className="flex justify-between mt-4 ">
                                                <div className="border-gray-100 ">
                                                    <p className="text-lg text-end whitespace-nowrap">
                                                        Rp{" "}
                                                        {product.quantity *
                                                            product.price}
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
                <div id="snap-container"></div>
            </div>
        </GuestLayout>
    );
}
