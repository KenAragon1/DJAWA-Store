import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";
import { Head, router } from "@inertiajs/react";
import MainLayout from "@/layouts/MainLayout";

const Index = ({ cartData }) => {
    const [cartItems, setCartItems] = useState(
        cartData.map((item) => {
            if (item.quantity > item.product.stock.quantity) {
                return { ...item, quantity: item.product.stock.quantity };
            }
            return item;
        })
    );

    const [loading, setLoadingTest] = useState({
        checkoutBtn: false,
        summary: false,
    });

    const [selectedItems, setSelectedItems] = useState([]);

    // This data will be stored in session to pass to the checkout
    const [checkoutData, setCheckoutData] = useState({
        products: [],
        totalPrice: 0,
    });

    console.log(checkoutData);

    // set selected items
    useEffect(() => {
        const dataItem = cartItems.filter(
            (cartItem) => cartItem.selected === true
        );

        setSelectedItems(dataItem);
    }, [cartItems]);

    // post selected items to calculate its total price
    useEffect(() => {
        let timer;
        setLoadingTest((prev) => ({
            ...prev,
            checkoutBtn: true,
        }));

        function postSummary() {
            setLoadingTest((prev) => ({
                ...prev,
                summary: true,
            }));
            axios
                .post("/calculateTotal", { data: selectedItems })
                .then((response) => {
                    setCheckoutData(response.data);
                    console.log(response.data);
                    setLoadingTest((prev) => ({
                        ...prev,
                        summary: false,
                        checkoutBtn: false,
                    }));
                });
        }

        clearTimeout(timer);

        timer = setTimeout(postSummary, 1000);

        return () => clearTimeout(timer);
    }, [selectedItems]);

    function deleteCartItem(e, id) {
        e.preventDefault();
        if (confirm("Yakin ingin menghapus produk ini?")) {
            router.delete("/cart/" + id, {
                onSuccess: (result) => {
                    const newCartItems = cartItems.filter(
                        (item) => item.id_cart !== id
                    );
                    setCartItems(newCartItems);
                },
            });
        }

        return;
    }

    function toggleselect(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id_cart === id) {
                    const currentSelect = item.selected;
                    return { ...item, selected: !currentSelect };
                }
                return item;
            });
        });
    }

    function handleAmountChange(id, e) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id_cart === id) {
                    return { ...item, quantity: e.target.value };
                }
                return item;
            });
        });
    }

    function incrementAmount(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (
                    item.id_cart === id &&
                    item.product.stock.quantity > item.quantity
                ) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    }

    function decrementAmount(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id_cart === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    }
    function checkout() {
        if (!checkoutData.products[0]) {
            console.log("jemboed");
            return window.alert("Silahkan Pilih Barang Yang Ingin di Checkout");
        }

        router.post("/checkout", {
            products: checkoutData.products.map((data) => {
                return { id_product: data.id_product, quantity: data.quantity };
            }),
        });
    }

    console.log(cartData);

    return (
        <MainLayout>
            <Head title="Cart" />

            <div className="">
                <p className="mb-4 text-2xl font-semibold text-secondary">
                    My Cart
                </p>

                <div className="flex gap-4 ">
                    <div className="">
                        <div className="w-full bg-white border border-gray-300 rounded-lg">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id_cart}
                                    item={item}
                                    deleteCartItem={deleteCartItem}
                                    toggleSelect={toggleselect}
                                    handleAmountChange={handleAmountChange}
                                    incrementAmount={incrementAmount}
                                    decrementAmount={decrementAmount}
                                    disabled={item.product.stock.quantity === 0}
                                />
                            ))}

                            {cartItems.length === 0 && <CartEmpty />}
                        </div>
                    </div>

                    <div className="">
                        <div className="relative p-4 bg-white border border-gray-300 rounded-lg w-[25rem]">
                            <div>
                                <p className="text-xl font-semibold">Summary</p>
                                <div className="mb-4">
                                    {loading.summary && (
                                        <div
                                            role="status"
                                            className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-25 bg-slate-600"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                className="w-8 h-8 text-gray-200 animate-spin dark fill-gray-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    )}

                                    {checkoutData.products.length > 0 &&
                                        checkoutData.products.map((product) => {
                                            const { total } = product;
                                            return (
                                                <div className="flex justify-between gap-4">
                                                    <span className="line-clamp-1">
                                                        {product.name}
                                                    </span>
                                                    <span>
                                                        {product.quantity}x
                                                    </span>
                                                    <span className="">
                                                        Rp
                                                        {total.toLocaleString(
                                                            "id-ID"
                                                        )}
                                                    </span>
                                                </div>
                                            );
                                        })}

                                    <hr className="my-2" />
                                    <div className="flex justify-between">
                                        <span>Total :</span>
                                        <span>
                                            Rp{" "}
                                            {checkoutData?.totalPrice.toLocaleString(
                                                "id-ID"
                                            )}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    className="w-full btn btn-secondary btn-md"
                                    onClick={checkout}
                                    disabled={loading.checkoutBtn}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Index;
