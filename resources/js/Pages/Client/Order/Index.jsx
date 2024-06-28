import MainLayout from "@/Layouts/MainLayout";
import { router } from "@inertiajs/react";
import { convertOrderStatus } from "@/Pages/Admin/Order/Index";

export default function Index({ orders }) {
    console.log(orders);

    return (
        <MainLayout>
            <p className="mb-4 text-xl font-semibold text-secondary">
                My Order
            </p>

            <div className="overflow-hidden bg-white border border-gray-300 rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="cl" class="px-6 py-3">
                                Order-ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr class="bg-white border-b ">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    ORDER-{order.id_order}
                                </th>
                                <td class="px-6 py-4">
                                    {convertOrderStatus(
                                        order.order_status.status
                                    )}
                                </td>
                                <td class="px-6 py-4">
                                    Rp{" "}
                                    {order.payment.total.toLocaleString(
                                        "id-ID"
                                    )}
                                </td>
                                <td class="px-6 py-4">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={(e) =>
                                            router.get(
                                                "/order/" + order.id_order
                                            )
                                        }
                                    >
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
}
