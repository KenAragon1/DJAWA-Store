export default function OrderCustomer({ customer_details }) {
    return (
        <div className="mb-4 main-container">
            <p className="mb-4 text-lg font-bold">Customer Detail : </p>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-[89px] font-semibold">Address</div>
                    <div className="">{customer_details.customer_address} </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[89px] font-semibold">Full Name</div>
                    <div className="">{customer_details.customer_name} </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[89px] font-semibold">Email</div>
                    <div className="">{customer_details.customer_email} </div>
                </div>
            </div>
        </div>
    );
}
