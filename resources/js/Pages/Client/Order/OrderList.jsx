import PrimaryButton from "@/Components/PrimaryButton";
import GuestLayout from "@/Layouts/GuestLayout";
import MainLayout from "@/Layouts/MainLayout";
import { router } from "@inertiajs/react";

export default function OrderList({ orderList }) {
    console.log(orderList);
    return (
        <MainLayout>
            <p className="mb-4 text-xl font-semibold text-secondary">Order</p>

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
                            <th scope="col" class="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((list) => (
                            <tr class="bg-white border-b ">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                >
                                    ORDER-{list.id_order}
                                </th>
                                <td class="px-6 py-4">{list.status}</td>
                                <td class="px-6 py-4">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={(e) =>
                                            router.get(
                                                "/order/" + list.id_order
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
