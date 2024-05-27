const Item = ({ product }) => {
    return (
        <div className="">
            <div className="flex justify-between gap-4 p-6 bg-white rounded-lg ">
                <img
                    src={"/storage/foto_produk/" + product.imageSlug}
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
                            <p className="text-lg text-end">
                                Rp {product.total.toLocaleString("id-ID")}
                            </p>
                            <p className="text-xs text-gray-500 text-end">
                                Rp {product.price.toLocaleString("id-ID")}/ Pcs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Item;
