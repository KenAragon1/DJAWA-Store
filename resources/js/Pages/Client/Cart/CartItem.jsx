const CartItem = ({
    item,
    deleteCartItem,
    toggleSelect,
    handleAmountChange,
    incrementAmount,
    decrementAmount,
}) => {
    return (
        <div className="flex items-center gap-4 p-4 mb-4 bg-white border rounded min-w-fit border-slate-300">
            <input
                type="checkbox"
                name=""
                id=""
                checked={item.selected}
                onChange={() => toggleSelect(item.id)}
            />
            <div className="flex flex-1 gap-4">
                <img
                    src={"/storage/foto_produk/" + item.product.image}
                    alt=""
                    width={100}
                    className="aspect-square"
                />
                <div className="flex flex-col w-full gap-4">
                    <div className="">
                        <p className="font-semibold">{item.product.name}</p>
                        <p>Rp {item.product.price.toLocaleString("id-ID")} </p>
                    </div>
                    <div className="flex justify-end gap-4">
                        <div className="px-2 overflow-hidden border border-black rounded-full w-fit">
                            <button
                                className="w-8 font-semibold "
                                onClick={() => decrementAmount(item.id)}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={item.quantity}
                                onChange={(e) => handleAmountChange(item.id, e)}
                                className="w-10 text-xs text-center border-none focus:ring-0"
                                min={1}
                            />
                            <button
                                className="w-8 font-semibold "
                                onClick={() => incrementAmount(item.id)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => deleteCartItem(item.id)}
                            type="button"
                            className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
                </div>
            </div>
        </div>
    );
};

export default CartItem;
