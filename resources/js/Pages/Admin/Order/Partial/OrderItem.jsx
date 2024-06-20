export default function OrderItem({ item }) {
    return (
        <div className="">
            <div className="flex justify-between gap-4 p-6 bg-white rounded-lg ">
                <img
                    src={item.image}
                    alt="item-image"
                    className="w-20 aspect-[4/3] "
                />
                <div className="flex justify-between w-full">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-sm font-bold text-gray-900 ">
                            {item.name}
                        </h2>
                        <p className="mt-1 text-sm text-gray-700">
                            {item.quantity}x
                        </p>
                    </div>
                    <div className="flex justify-between mt-4 ">
                        <div className="border-gray-100 ">
                            <p className="text-lg text-end whitespace-nowrap">
                                Rp{" "}
                                {(item.quantity * item.price).toLocaleString(
                                    "id-ID"
                                )}
                            </p>
                            <p className="text-xs text-gray-500 text-end">
                                Rp {item.price?.toLocaleString("id-ID")}/ Pcs
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}
