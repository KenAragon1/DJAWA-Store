import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link } from "@inertiajs/react";
import { FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";

export function convertOrderStatus(id_status) {
    switch (id_status) {
        case 1:
            return (
                <div className="flex items-center gap-2">
                    <FaCreditCard />
                    Waiting For Payment
                </div>
            );
        case 2:
            return (
                <div className="flex items-center gap-2">
                    <FaTruckFast />
                    Order Is Being Proccesed
                </div>
            );
        case 3:
            return (
                <div className="flex items-center gap-2">
                    <FaTruckFast />
                    Order Is On Delivery
                </div>
            );
        case 4:
            return (
                <div className="flex items-center gap-2">
                    <FaTruckFast />
                    Order Delivered
                </div>
            );
        default:
            break;
    }
}

export default function Index({ orders }) {
    console.log(orders);

    return (
        <DashboardLayout>
            <div className="min-h-screen p-8 bg-white border border-gray-300 rounded-lg">
                <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="" className="label">
                            Status Filter :
                        </label>
                        <select
                            name=""
                            id=""
                            className="select select-bordered "
                        >
                            <option value="">All</option>
                        </select>
                    </div>
                    <button className="btn btn-secondary">Apply</button>
                </div>
                <div className="overflow-x-auto border border-gray-100">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr className="hover" key={order.id_order}>
                                    <td>Order - {order.id_order}</td>
                                    <td>
                                        {convertOrderStatus(order.id_status)}
                                    </td>
                                    <td>
                                        <Link
                                            href={route("admin.order.show", {
                                                id_order: order.id_order,
                                            })}
                                            className="link "
                                        >
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
