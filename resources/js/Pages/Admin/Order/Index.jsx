import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { Link } from "@inertiajs/react";
import { FaCircleExclamation, FaTruckFast } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";

export function convertOrderStatus(status) {
    switch (status) {
        case "PENDING":
            return (
                <div className="flex items-center gap-2 text-amber-600">
                    <FaCreditCard />
                    Waiting For Payment
                </div>
            );
        case "PROCESSED":
            return (
                <div className="flex items-center gap-2 text-green-600">
                    <LuPackage />
                    Order Is Being Proccesed
                </div>
            );
        case "DELIVERY":
            return (
                <div className="flex items-center gap-2 text-yellow-600">
                    <FaTruckFast />
                    Order Is On Delivery
                </div>
            );
        case "DELIVERED":
            return (
                <div className="flex items-center gap-2 text-green-600">
                    <IoMdHome />
                    Order Has Arrived
                </div>
            );
        case "EXPIRED":
            return (
                <div className="flex items-center gap-1 text-red-600">
                    <FaCircleExclamation />
                    Payment is expired
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
                                        {convertOrderStatus(
                                            order.order_status.status
                                        )}
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
