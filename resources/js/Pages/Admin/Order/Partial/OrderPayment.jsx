export default function OrderPayment({ payment_details }) {
    return (
        <div className="main-container">
            <p className="mb-4 text-lg font-semibold">Payment Detail: </p>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-[89px] font-semibold">Total</div>
                    <div className="">
                        Rp {payment_details.total?.toLocaleString("id-ID")}{" "}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-[89px] font-semibold">Full Name</div>
                    <div className="">{payment_details.payment_method} </div>
                </div>
            </div>
        </div>
    );
}
