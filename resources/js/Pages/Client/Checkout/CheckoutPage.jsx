import PrimaryButton from "@/Components/PrimaryButton";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import AddressModal from "./AddressModal";
import Address from "./Address";
import Item from "./Item";

const CheckoutPage = () => {
    useEffect(() => {
        axios
            .get("/checkout")
            .then((response) => {
                const productData = response.data;
                console.log(productData);
                if (productData) return setCheckoutData(response.data);
                router.get("/");
            })
            .catch((e) => console.log(e));
    }, []);

    const [checkoutData, setCheckoutData] = useState({
        products: [],
        totalPrice: 0,
        address: {},
    });

    const [openAddressModal, setOpenAddressModal] = useState(false);

    function changeAddress(addressData) {
        setCheckoutData((prevCheckoutData) => ({
            ...prevCheckoutData,
            address: addressData,
        }));
    }

    function closeAddressModal() {
        setOpenAddressModal(false);
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-8">
                <p className="mb-4 text-2xl font-bold ">Checkout</p>
                <div className="grid lg:grid-cols-[60%,auto] gap-x-4">
                    <div className="mb-4 md:mb-0">
                        <Address
                            openAddressModal={openAddressModal}
                            setOpenAddressModal={setOpenAddressModal}
                            closeAddressModal={closeAddressModal}
                            changeAddress={changeAddress}
                            addressData={checkoutData.address}
                        />
                        <div className="overflow-hidden bg-white rounded-t-lg shadow">
                            <div className="h-2 bg-pastel-blue"></div>
                            {checkoutData.products.map((product) => (
                                <Item product={product} />
                            ))}

                            <div className="">
                                <div className="px-4 py-2">
                                    <div className="mb-4">
                                        <label
                                            className="text-lg font-semibold"
                                            htmlFor="delivery"
                                        >
                                            <i className="fa-solid fa-truck"></i>
                                            Delivery
                                        </label>
                                        <select
                                            name=""
                                            id="delivery"
                                            className="w-full rounded"
                                        >
                                            <option value="">
                                                Ninja Express
                                            </option>
                                            <option value="">
                                                Shopee Delivery
                                            </option>
                                            <option value="">FedEx</option>
                                            <option value="">
                                                J&T Express
                                            </option>
                                            <option value="">Si Cepat</option>
                                            <option value="">Anteraja</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="payment"
                                            className="text-lg font-semibold"
                                        >
                                            <i className="fa-regular fa-credit-card"></i>{" "}
                                            Payment
                                        </label>
                                        <select
                                            name=""
                                            id="payment"
                                            className="w-full rounded"
                                        >
                                            <option value="">
                                                Transfer Bank
                                            </option>
                                            <option value="">Dana</option>
                                            <option value="">Gopay</option>
                                            <option value="">Indomaret</option>
                                            <option value="">Alfamart</option>
                                            <option value="">Debit</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* summary */}
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
                                            {checkoutData.totalPrice.toLocaleString(
                                                "id-ID"
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Delivery Fee</td>
                                        <td className="text-end">
                                            Rp xxx.xxx.xxx
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 text-lg font-semibold border-y-2">
                                            Total Price
                                        </td>
                                        <td className="text-lg font-semibold text-end border-y-2">
                                            Rp xxx.xxx.xxx
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <PrimaryButton
                                className="w-full px-4 py-2 duration-100 rounded text-slate-100 bg-pastel-blue hover:bg-dark-pastel-blue"
                                onClick={() => {
                                    console.log(checkoutData);
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
