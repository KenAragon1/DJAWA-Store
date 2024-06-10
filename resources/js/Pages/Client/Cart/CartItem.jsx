const CartItem = ({
    item,
    deleteCartItem,
    toggleSelect,
    handleAmountChange,
    incrementAmount,
    decrementAmount,
}) => {
    return (
        <div className="flex items-center gap-4 p-4">
            <input
                type="checkbox"
                className="checkbox checkbox-secondary checkbox-sm"
                name=""
                id=""
                checked={item.selected}
                onChange={() => toggleSelect(item.id_cart)}
            />
            <div className="flex flex-1 gap-4">
                <img
                    src={item.product.image}
                    alt=""
                    width={150}
                    className="aspect-[1.5/1]"
                />
                <div className="flex flex-col w-full gap-4">
                    <div className="">
                        <p className="font-semibold">{item.product.name}</p>
                        <p>Rp {item.product.price.toLocaleString("id-ID")} </p>
                    </div>
                    <div className="flex justify-end gap-4">
                        <div className="join join-vertical lg:join-horizontal">
                            <button
                                className="btn btn-secondary btn-sm join-item"
                                onClick={() => decrementAmount(item.id_cart)}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={item.quantity}
                                onChange={(e) =>
                                    handleAmountChange(item.id_cart, e)
                                }
                                className="input input-sm input-bordered w-[3rem] join-item text-center"
                                min={1}
                            />
                            <button
                                className="btn btn-secondary btn-sm join-item"
                                onClick={() => incrementAmount(item.id_cart)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => deleteCartItem(item.id_cart)}
                            type="button"
                            className="btn btn-error btn-outline btn-sm "
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
