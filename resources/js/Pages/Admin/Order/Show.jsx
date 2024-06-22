import DashboardLayout from "@/Layouts/DashboardLayout";
import OrderItem from "./Partial/OrderItem";
import OrderCustomer from "./Partial/OrderCustomer";
import OrderPayment from "./Partial/OrderPayment";
import OrderStatus from "./Partial/OrderStatus";
import { router, useForm } from "@inertiajs/react";

export default function Show({ order, status_option }) {
    const { payment } = order;

    return (
        <DashboardLayout>
            <p className="mb-4 text-xl font-semibold text-secondary">
                Order Detail
            </p>
            <div>
                <div>
                    <div className="p-8 mb-4 bg-white border border-gray-300 rounded-lg">
                        <p>Items Ordered</p>
                        <div>
                            {order.order_item.map((item) => (
                                <OrderItem
                                    item={item}
                                    key={item.id_order_item}
                                />
                            ))}
                        </div>
                    </div>
                    <OrderStatus {...order} status_option={status_option} />
                    <OrderCustomer
                        customer_details={payment.customer_details}
                    />
                    <OrderPayment payment_details={payment} />
                </div>
            </div>
        </DashboardLayout>
    );
}
