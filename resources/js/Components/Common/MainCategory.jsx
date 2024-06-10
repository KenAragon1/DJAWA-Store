import { Link } from "@inertiajs/react";
import React from "react";

export const CATEGORY_LINKS = [
    {
        label: "Laptop",
        href: "/category/laptop",
    },
    {
        label: "Mouse",
        href: "/category/mouse",
    },
    {
        label: "Motherboard",
        href: "/category/motherboard",
    },
    {
        label: "Keyboard",
        href: "/category/keyboard",
    },
    {
        label: "Headset",
        href: "/category/headset",
    },
];

const MainCategory = () => {
    return (
        <div className="bg-white border-b border-b-gray-300">
            <div className="layout">
                <div className="flex items-center gap-6 text-sm h-[2.8rem]">
                    <Link className="flex">All Category</Link>

                    {CATEGORY_LINKS.map((category) => (
                        <Link>{category.label}</Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCategory;
