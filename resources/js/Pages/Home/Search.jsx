import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function Search({ query, result }) {
    console.log(query);
    return (
        <MainLayout>
            <p className="text-xl font-semibold">Results For: {query}</p>
            <div className="flex gap-1">
                {result.map(({ id, image, name, price, slug, stock }) => {
                    return (
                        <div
                            className="relative flex-grow-0 flex-shrink-0 w-56 overflow-hidden bg-white border border-gray-300 rounded-sm group"
                            key={id}
                        >
                            <img
                                src={image}
                                alt=""
                                className="aspect-[1.5/1] group-hover:scale-105 transition-transform"
                            />
                            <div className="p-4 space-y-1">
                                <p className="font-semibold leading-none tracking-tight line-clamp-2">
                                    {name}
                                </p>
                                <p className="text-sm text-gray-400 ">
                                    Rp {price.toLocaleString("id-ID")}
                                </p>
                                {stock.quantity > 0 ? (
                                    <p className="text-sm">
                                        Only {stock.quantity} left in stock
                                    </p>
                                ) : (
                                    <p className="text-sm font-semibold text-red-500">
                                        Sold Out
                                    </p>
                                )}
                            </div>
                            <Link
                                href={"product/" + slug}
                                className="absolute top-0 left-0 w-full h-full"
                            ></Link>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}
