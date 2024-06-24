import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function Show({ category, products }) {
    console.log(category);
    console.log(products);
    return (
        <MainLayout>
            <div className="flex items-end p-4 bg-secondary h-52">
                <p className="text-4xl font-semibold text-white">
                    {category.name}
                </p>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <div className="inline-flex gap-4 py-2 overflow-x-auto">
                        {products?.map(({ id, image, name, price, slug }) => {
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
                                    </div>
                                    <Link
                                        href={"/product/" + slug}
                                        className="absolute top-0 left-0 w-full h-full"
                                    ></Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
