import DashboardLayout from "@/Layouts/DashboardLayout";
import OrderItem from "./Partial/OrderItem";
import OrderCustomer from "./Partial/OrderCustomer";
import OrderPayment from "./Partial/OrderPayment";
import OrderStatus from "./Partial/OrderStatus";
import { router, useForm } from "@inertiajs/react";

export default function Show({ order, status_option }) {
    const { payment } = order;

    const { orderStatusForm, setOrderStatusForm, patch } = useForm({
        id_status: status_option[0].status,
    });

    return (
        <DashboardLayout>
            <p>Order Detail</p>
            <div className="grid grid-cols-[48rem,1fr] gap-2">
                <div>
                    <div className="p-8 bg-white border border-gray-300 rounded-lg">
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
                </div>
                <div>
                    <OrderStatus
                        status={order.id_status}
                        status_option={status_option}
                        orderStatusForm={orderStatusForm}
                        setOrderStatusForm={setOrderStatusForm}
                        submitForm={() =>
                            patch(
                                route("order-update", {
                                    id_order: order.id_order,
                                })
                            )
                        }
                    />
                    <OrderCustomer
                        customer_details={payment.customer_details}
                    />
                    <OrderPayment payment_details={payment} />
                </div>
            </div>
        </DashboardLayout>
    );
}
