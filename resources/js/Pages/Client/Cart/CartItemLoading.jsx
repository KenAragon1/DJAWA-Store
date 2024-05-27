const CartItemLoading = () => {
    return (
        <div className="flex items-center gap-4 p-4 mb-4 bg-white border rounded min-w-fit border-slate-300 animate-pulse">
            <div className="w-4 h-4 bg-gray-200 aspect-square"></div>

            <div className="flex flex-1 gap-4">
                <div className="w-[120px] bg-gray-200 "></div>

                <div className="flex flex-col w-full gap-4">
                    <div className="">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full  w-40"></div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <div className="w-32 h-8 bg-gray-200 rounded-full"></div>
                        <div className="h-full bg-gray-200 rounded aspect-square "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemLoading;
