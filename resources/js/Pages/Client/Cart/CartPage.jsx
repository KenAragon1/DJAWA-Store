import Navbar from "@/Components/Common/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartItemLoading from "./CartItemLoading";
import CartEmpty from "./CartEmpty";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, router } from "@inertiajs/react";

const Index = () => {
    const [cartItems, setCartItems] = useState([]);

    const [loading, setLoading] = useState(false);

    const [loadingSummary, setLoadingSummary] = useState(false);

    const [selectedItems, setSelectedItems] = useState([]);

    const [summary, setSummary] = useState({
        products: [],
        totalPrice: 0,
    });

    // get user cart items when users come to cart page
    useEffect(() => {
        fetchCartItems();
    }, []);

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

        function postSummary() {
            setLoadingSummary(true);
            axios
                .post("/calculateTotal", { data: selectedItems })
                .then((response) => {
                    setSummary(response.data);
                    setLoadingSummary(false);
                });
        }

        clearTimeout(timer);

        timer = setTimeout(postSummary, 1000);

        return () => clearTimeout(timer);
    }, [selectedItems]);

    function fetchCartItems() {
        setLoading(true);
        axios.get("/cart").then((response) => {
            const { cartItems } = response.data;
            cartItems.forEach((item) => {
                item.selected = false;
            });
            setLoading(false);
            setCartItems(cartItems);
        });
    }

    function deleteCartItem(id) {
        axios
            .delete("/cart/" + id)
            .then((response) => console.log(response))
            .then(() => fetchCartItems());
    }

    function toggleselect(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === id) {
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
                if (item.id === id) {
                    return { ...item, quantity: e.target.value };
                }
                return item;
            });
        });
    }

    function incrementAmount(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        });
    }

    function decrementAmount(id) {
        setCartItems((prevCartItems) => {
            return prevCartItems.map((item) => {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        });
    }
    function checkout() {
        if (summary.products.length < 1) return;

        router.post("/checkout", { checkoutData: summary });
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Keranjang" />
            <Navbar />
            <div className="mx-8 mt-4">
                <p className="mb-4 text-2xl font-bold">KERANJANG</p>

                <div className="flex gap-4 ">
                    <div className="w-full">
                        {loading && <CartItemLoading />}

                        {!loading &&
                            cartItems.length > 0 &&
                            cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    deleteCartItem={deleteCartItem}
                                    toggleSelect={toggleselect}
                                    handleAmountChange={handleAmountChange}
                                    incrementAmount={incrementAmount}
                                    decrementAmount={decrementAmount}
                                />
                            ))}

                        {!loading && cartItems.length === 0 && <CartEmpty />}
                    </div>

                    <div className="">
                        <div className="p-8 relative  bg-white border rounded border-slate-300 w-[400px]">
                            <p className="text-xl font-semibold">Summary</p>
                            <div className="mb-4">
                                {loadingSummary && (
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
                                <table className="w-full">
                                    <tbody>
                                        {summary.products.map((product) => {
                                            return (
                                                <tr key={crypto.randomUUID()}>
                                                    <td>{product.name}</td>
                                                    <td className="text-center">
                                                        {product.quantity}x
                                                    </td>
                                                    <td className="text-end">
                                                        Rp {product.total}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <hr className="my-2" />
                                <p className="text-xl font-semibold">
                                    Total : Rp{" "}
                                    {summary.totalPrice.toLocaleString("id-ID")}
                                </p>
                            </div>
                            <PrimaryButton onClick={checkout}>
                                Checkout
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
