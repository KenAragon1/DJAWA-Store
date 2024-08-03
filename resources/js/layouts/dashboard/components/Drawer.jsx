import { Link } from "@inertiajs/react";
import { FaBox } from "react-icons/fa";
import { GoListUnordered } from "react-icons/go";
import { TbCategoryPlus } from "react-icons/tb";

export default function DashboardDrawer({ children }) {
    return (
        <div className=" drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{children}</div>
            <div className=" drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="w-56 min-h-full p-4 menu bg-base-200 text-base-content">
                    <li>
                        <Link href={route("admin.product.index")}>
                            <FaBox />
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href={route("admin.order")}>
                            <GoListUnordered />
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link href={route("admin.category.index")}>
                            <TbCategoryPlus />
                            Category Manager
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
