import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ categories }) {
    console.log(categories);
    return (
        <MainLayout>
            <Head title="Category" />
            <p className="mb-2 text-xl font-semibold text-secondary">
                Categories
            </p>
            <div className="grid grid-cols-3 gap-2">
                {categories.map((category) => (
                    <Link
                        class="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300"
                        href={route("category-show", {
                            id_category: category.id_category,
                        })}
                    >
                        <div
                            alt=""
                            class="object-cover bg-secondary w-full aspect-video "
                        />
                        <div class="absolute inset-0 flex flex-col items-start justify-start p-6">
                            <h3 class="text-2xl font-bold text-white">
                                {category.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </MainLayout>
    );
}
