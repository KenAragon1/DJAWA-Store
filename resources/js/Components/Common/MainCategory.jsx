import { Link } from "@inertiajs/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import getCategory from "@/Services/category";

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
    useEffect(() => {
        getCategory().then(({ data }) => setCategories(data));
    }, []);

    const [categories, setCategories] = useState([]);

    return (
        <div className="bg-white border-b border-b-gray-300">
            <div className="layout">
                <div className="flex items-center gap-6 text-sm h-[2.8rem]">
                    <Link className="flex items-center gap-2 btn btn-sm btn-ghost">
                        <RxHamburgerMenu />
                        All Category
                    </Link>

                    {categories.map((category) => (
                        <Link
                            className="btn btn-sm btn-ghost"
                            href={"/category/" + category.id}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainCategory;
