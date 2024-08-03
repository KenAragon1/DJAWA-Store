import { Link, usePage } from "@inertiajs/react";
import { FaHome, FaRegUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

export default function DashboardNavbar() {
    const { user } = usePage().props.auth;

    return (
        <div className="border-b navbar bg-secondary border-b-gray-300">
            <div className="flex-1">
                <label
                    htmlFor="my-drawer"
                    className="text-white btn btn-ghost drawer-button"
                >
                    <RxHamburgerMenu />
                </label>
                <a className="text-xl text-white btn btn-ghost">Dashboard</a>
            </div>
            <div className=" dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                >
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src={user.image}
                        />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="z-50 p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li className="btn btn-ghost">Hallo, {user.name}</li>
                    <li>
                        <Link href={route("profile.edit")} className="gap-1 ">
                            <FaRegUser /> Profile
                        </Link>
                    </li>

                    <li>
                        <Link className="gap-1" href={route("home")}>
                            <FaHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("logout")}
                            method="post"
                            className="gap-1"
                            as="button"
                        >
                            <MdOutlineLogout />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
