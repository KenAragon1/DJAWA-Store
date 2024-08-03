import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/layouts/GuestLayout";
import { router, usePage } from "@inertiajs/react";
import { useEffect } from "react";

const PaymentPage = ({ paymentData }) => {
    const { customer_details } = paymentData;

    const { MIDTRANS_CLIENT_KEY } = usePage().props;

    const addressString = paymentData.customer_details.address;

    const statusPayment = {
        pending: "Menunggu Pembayaran",
        success: "Berhasil Melakukan Pembayaran",
    };

    console.log(paymentData);

    function createScript() {
        const script = document.createElement("script");

        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";

        script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);

        script.async = true;

        script.onload = midtrans;

        document.body.appendChild(script);
    }

    function midtrans() {
        if (!paymentData.token) return;

        window.snap.embed(paymentData.token, {
            embedId: "snap-container",
            onSuccess: function (result) {
                router.patch("/payment/" + paymentData.id_payment);
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
                    <p className="mb-4 text-xl font-semibold">
                        Detail Pembayaran
                    </p>
                    <div className="">
                        <table className="mb-4">
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2">
                                        Nama Pelanggan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {customer_details.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        No.HP Pelanggan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {customer_details.phone}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        Alamat Pelanggan
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {customer_details.address}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">
                                        Status Pembayaran
                                    </td>
                                    <td className="px-4 py-2">:</td>
                                    <td className="px-4 py-2">
                                        {statusPayment[paymentData.status]}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {paymentData.status === "success" && (
                            <PrimaryButton>Lihat Pesanan Anda</PrimaryButton>
                        )}
                    </div>

                    <div>
                        {paymentData.products.map((product) => (
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

                <div id="snap-container"></div>
            </div>
        </GuestLayout>
    );
};

export default PaymentPage;
