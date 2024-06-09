import { Link, router, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Common/Navbar";

export default function PaymentList({ paymentList }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mx-8 mt-8">
                <p className="mb-4 text-xl font-bold tracking-wider uppercase">
                    Payment Page
                </p>
                <div className="p-8 bg-white shadow-sm">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Pesanan
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Total Pembayaran
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentList.map((row) => {
                                return (
                                    <tr class="bg-white border-b">
                                        <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                                        >
                                            <Link
                                                href={route("payment-main", {
                                                    id: row.id_payment,
                                                })}
                                                className="hover:underline"
                                            >
                                                PAYMENT-{row.id_payment}
                                            </Link>
                                        </th>
                                        <td class="px-6 py-4">
                                            Rp {row.total_price}
                                        </td>
                                        <td class="px-6 py-4">{row.status}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
