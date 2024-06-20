import MainLayout from "@/Layouts/MainLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

const Index = ({ product }) => {
    const [cartData, setCartData] = useState({
        id_product: product.id_product,
        amount: 1,
    });

    console.log(cartData);

    function postCartData(e) {
        router.post("/cart", cartData, {
            onSuccess: ({ props }) =>
                document.getElementById("my_modal_1").showModal(),
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

    function checkout() {
        router.post("/checkout", {
            products: [
                {
                    id_product: product.id_product,
                    quantity: cartData.amount,
                },
            ],
        });
    }

    return (
        <MainLayout>
            <Head title={"DJAWA STORE: " + product.name} />

            <div className="flex mt-4">
                <div className="grid sm:grid-cols-[500px,1fr] p-[clamp(1rem,5cqi,3rem)] gap-4 bg-white border border-gray-300 rounded-lg mb-4 w-full">
                    <img
                        src={product.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[1.5/1] border border-gray-300 rounded-lg"
                    />
                    <div className="grid gap-4 h-fit">
                        <p className="text-xl font-semibold ">{product.name}</p>
                        <p className="text-xl font-bold">
                            Rp {product.price.toLocaleString("id-ID")} ,-
                        </p>
                        <div className="join join-horizontal">
                            <button
                                className="btn btn-secondary join-item btn-sm"
                                onClick={decrementAmount}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={cartData.amount}
                                onChange={handleAmountChange}
                                className="input w-[5rem] input-bordered  text-center join-item input-sm"
                                min={1}
                            />
                            <button
                                className="btn btn-secondary join-item btn-sm"
                                onClick={incrementAmount}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="btn btn-secondary"
                                onClick={checkout}
                            >
                                Buy Now
                            </button>
                            <button
                                className="btn btn-secondary btn-outline"
                                onClick={postCartData}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" p-[clamp(1rem,5cqi,3rem)] gap-4 bg-white border border-gray-300 rounded-lg">
                <h2 class="mb-8 text-lg">Specifications</h2>
                <div class="flow-root">
                    <dl class="-my-3 divide-y divide-gray-100">
                        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Brand</dt>
                            <dd class="text-gray-700 sm:col-span-2">
                                {product.brand}
                            </dd>
                        </div>
                        <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                            <dt class="font-medium text-gray-900">Weight</dt>
                            <dd class="text-gray-700 sm:col-span-2">
                                {product.weight} Gram
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <dialog id="my_modal_1" className=" modal">
                <div className="max-w-3xl modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <div className="flex items-center gap-4 p-4 mb-4 bg-white border border-gray-300 rounded-lg min-w-fit">
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
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                        <Link
                            className="btn btn-secondary"
                            href={route("cart-page")}
                        >
                            Check Cart Page
                        </Link>
                    </div>
                </div>
            </dialog>
        </MainLayout>
    );
};

export default Index;
