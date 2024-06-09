import PrimaryButton from "@/Components/PrimaryButton";
import { router, usePage } from "@inertiajs/react";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Address from "./Address";
import Shipping from "./Shipping";
import Item from "./Item";

const CheckoutPage = ({ productsData, user }) => {
    const [customerDetail, setCustomerDetail] = useState({
        name: "",
        phone: "",
        address: {
            province: "",
            city: "",
            detail: "",
            postal: "",
        },
    });

    const [rajaongkir, setRajaongkir] = useState({
        destination: 0,
        products: productsData.products,
    });

    const [shippingDetails, setShippingDetails] = useState();

    const [shipping, setShipping] = useState({
        shipping_fee: 0,
    });

    const [openAddressModal, setOpenAddressModal] = useState(false);

    const [shippingOption, setShippingOption] = useState([]);

    function closeAddressModal() {
        setOpenAddressModal(false);
    }

    useEffect(() => {}, [rajaongkir]);

    useEffect(() => {
        ongkir();
    }, [customerDetail]);

    function ongkir() {
        if (customerDetail.address.city) {
            axios.post("api/ongkir", rajaongkir).then(({ data }) => {
                const service = data.rajaongkir.results[0].costs;
                console.log(service);
                setShippingOption(() => {});
            });
        }
    }

    function midtrans() {
        if (!customerDetail.address.city) {
            console.log("lengkapi alamat");
            return;
        }
        const addressString = `${customerDetail.address.detail}, ${customerDetail.address.city}, ${customerDetail.address.province}, ${customerDetail.address.postal}`;

        router.post(
            route("payment-create", {
                total: productsData.total_price,
                products: productsData.products,
                customer_details: {
                    address: addressString,
                },
            })
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-8">
                <p className="mb-4 text-2xl font-bold ">Checkout</p>

                <div className="grid lg:grid-cols-[60%,auto] gap-x-4">
                    <div className="mb-4 md:mb-0">
                        <Address
                            user={user}
                            openAddressModal={openAddressModal}
                            setOpenAddressModal={setOpenAddressModal}
                            closeAddressModal={closeAddressModal}
                            customerDetail={customerDetail}
                            setCustomerDetail={setCustomerDetail}
                            setRajaongkir={setRajaongkir}
                        />
                        <div className="overflow-hidden bg-white rounded-t-lg shadow">
                            <div className="h-2 bg-pastel-blue"></div>
                            {productsData.products.map((product) => (
                                <Item product={product} key={product.id} />
                            ))}
                            {/* 
                            <Shipping
                                rajaongkir={rajaongkir}
                                shippingOption={shippingOption}
                            /> */}
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white rounded-t-lg shadow h-fit">
                        <div className="h-2 bg-slate-800"></div>
                        <div className="px-4 pt-2 pb-6">
                            <p className="mb-2 text-lg font-bold">
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
                                    {/* <tr>
                                        <td>Delivery Fee</td>
                                        <td className="text-end">
                                            Rp {shipping.shipping_fee}
                                        </td>
                                    </tr> */}
                                    {/* <tr>
                                        <td className="py-2 text-lg font-semibold border-y-2">
                                            Total Price
                                        </td>
                                        <td className="text-lg font-semibold text-end border-y-2">
                                            Rp
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                            <PrimaryButton
                                className="w-full px-4 py-2 duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue"
                                onClick={() => {
                                    midtrans();
                                }}
                            >
                                Bayar
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
