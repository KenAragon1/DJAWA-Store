import Navbar from "@/Components/Common/Navbar";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const Index = ({ product }) => {
    const { user } = usePage().props.auth;

    // Post Cart
    const [cartData, setCartData] = useState({
        id_product: product.id_product,
        amount: 1,
    });

    function postCartData(e) {
        if (!user) {
            router.get("/login");
            return;
        }

        axios.post("/cart", cartData).then((response) => {
            if (response.status === 200) {
                setAlert({
                    show: true,
                    message: response.data.message,
                });
                console.log(response);
            }
        });
    }

    // Handle Data Change
    function handleAmountChange(e) {
        setCartData((prevCartData) => ({
            ...prevCartData,
            amount: e.target.value,
        }));
    }

    function incrementAmount() {
        const currentAmount = cartData.amount;
        setCartData((prevCartData) => ({
            ...prevCartData,
            amount: currentAmount + 1,
        }));
    }

    function decrementAmount() {
        const currentAmount = cartData.amount;
        if (currentAmount == 1) return;
        setCartData((prevCartData) => ({
            ...prevCartData,
            amount: currentAmount - 1,
        }));
    }

    // Handle Component visibility
    const [alert, setAlert] = useState({
        show: false,
        message: "",
    });

    function closeAlert() {
        setAlert((prevAlert) => ({
            ...prevAlert,
            show: false,
        }));
    }

    function redirectToCart() {
        router.get("/cart");
    }

    function checkout() {}

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar classname="mb-4" />
            <div className="flex mx-32 mt-4">
                <div className="grid sm:grid-cols-[500px,1fr] w-full p-[clamp(1rem,5cqi,3rem)] gap-4 bg-white shadow">
                    <img
                        src={product.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[1.5/1]"
                    />
                    <div className="grid gap-4 h-fit">
                        <p className="text-2xl font-semibold ">
                            {product.name}
                        </p>
                        <p className="text-3xl font-bold">
                            Rp {product.price.toLocaleString("id-ID")} ,-
                        </p>
                        <div className="px-2 overflow-hidden border border-black w-fit">
                            <button
                                className="w-8 font-semibold "
                                onClick={decrementAmount}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={cartData.amount}
                                onChange={handleAmountChange}
                                className="w-20 text-center border-none focus:ring-0"
                                min={1}
                            />
                            <button
                                className="w-8 font-semibold "
                                onClick={incrementAmount}
                            >
                                +
                            </button>
                        </div>
                        <button className="px-4 py-2 font-semibold text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Checkout Now
                        </button>
                        <div>
                            <button
                                className="w-full px-4 py-2 font-semibold transition-all duration-75 border border-gray-800 hover:bg-gray-800 hover:text-white"
                                onClick={postCartData}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={alert.show}>
                <div className="p-6">
                    <div className="flex mb-4 text-xl font-semibold">
                        <p>{alert.message}</p>
                        <button
                            onClick={closeAlert}
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="flex items-center gap-4 p-4 mb-4 bg-white min-w-fit border-slate-300">
                        <img
                            src={product.image}
                            alt=""
                            width={200}
                            className="aspect-[1.5/1]"
                        />
                        <div className="w-full">
                            <p className="text-xl font-semibold">
                                {product.name}
                            </p>
                            <p>Rp {product.price} </p>
                        </div>
                    </div>

                    <PrimaryButton onClick={redirectToCart}>
                        Cek Keranjang
                    </PrimaryButton>
                </div>
            </Modal>
        </div>
    );
};

export default Index;
