import { Head, router, usePage } from "@inertiajs/react";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Address from "./Address";
import Item from "./Item";

const Index = ({ productsData, user, addresses }) => {
    const [customerDetail, setCustomerDetail] = useState({
        name: "",
        phone: "",
        address: null,
    });

    const addressString = customerDetail.address
        ? `${customerDetail.address?.detail}, ${customerDetail.address?.city}, ${customerDetail.address?.province}, ${customerDetail.address?.zip}`
        : null;

    function midtrans() {
        if (!customerDetail.address.city) {
            console.log("lengkapi alamat");
            return;
        }

        router.post(
            route("order-create", {
                total: productsData.total_price,
                products: productsData.products,
                customer_details: {
                    address: addressString,
                },
            })
        );
    }

    return (
        <div className="min-h-screen p-8 layout">
            <Head title="Checkout" />

            <div className="">
                <p className="mb-4 text-2xl font-bold text-secondary ">
                    Checkout
                </p>

                <div className="grid lg:grid-cols-[60%,auto] gap-x-4">
                    <div className="mb-4 md:mb-0">
                        <Address
                            addresses={addresses}
                            user={user}
                            customerDetail={customerDetail}
                            setCustomerDetail={setCustomerDetail}
                            addressString={addressString}
                        />
                        <div className="overflow-hidden bg-white border border-gray-300 rounded-lg rounded-t-lg">
                            {productsData.products.map((product) => (
                                <Item product={product} key={product.id} />
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-300 rounded-lg h-fit">
                        <div className="px-4 pt-2 pb-6">
                            <p className="mb-2 text-lg font-bold text-secondary">
                                <i className="fa-regular fa-rectangle-list"></i>{" "}
                                Summary
                            </p>
                            <table className="w-full mb-8 border-separate border-spacing-y-1">
                                <tbody>
                                    <tr>
                                        <td className="w-3/5">Item Price</td>
                                        <td className="text-end">
                                            Rp{" "}
                                            {productsData.total_price.toLocaleString(
                                                "id-ID"
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button
                                className="w-full btn btn-secondary "
                                onClick={() => {
                                    midtrans();
                                }}
                            >
                                Bayar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
