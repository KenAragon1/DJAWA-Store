import { Head, Link, usePage } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import PrimaryButton from "../PrimaryButton";
import NavLink from "../NavLink";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Header = ({ className = "" }) => {
    const { user } = usePage().props.auth;
    console.log(user);

    return (
        <>
            <header className="bg-white border-b border-b-gray-300">
                <div className="navbar bg-base-100 layout">
                    <div className="navbar-start">
                        <Link
                            className="text-xl font-semibold text-secondary"
                            href={route("home")}
                        >
                            DJAWA STORE
                        </Link>
                    </div>
                    <div className="hidden navbar-center lg:flex">
                        <div className="join w-[24rem]">
                            <input
                                class="input w-full input-sm input-bordered join-item"
                                placeholder="Search"
                            />
                            <div class="indicator">
                                <button class="btn btn-sm btn-secondary join-item">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div className="flex items-center gap-2">
                                <Link
                                    className="flex items-center gap-1 text-sm btn btn-sm btn-ghost"
                                    href={route("cart-page")}
                                >
                                    <TiShoppingCart fontSize={16} />
                                    Cart
                                </Link>
                                <div className="dropdown dropdown-end">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                    >
                                        <li className="btn btn-ghost">
                                            Hallo, {user.name}
                                        </li>
                                        <li>
                                            <a className="gap-1 ">
                                                <FaRegUser /> Profile
                                            </a>
                                        </li>

                                        {user.user_type === "Admin" ? (
                                            <li>
                                                <Link
                                                    className="gap-1"
                                                    href={route("dashboard")}
                                                >
                                                    <MdOutlineDashboard />
                                                    Dashboard
                                                </Link>
                                            </li>
                                        ) : (
                                            <li>
                                                <Link
                                                    href={route(
                                                        "order-list-page"
                                                    )}
                                                    className="justify-between"
                                                >
                                                    Order
                                                </Link>
                                            </li>
                                        )}

                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                className="gap-1"
                                            >
                                                <MdOutlineLogout />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link
                                href={route("login")}
                                className="btn btn-secondary btn-sm"
                            >
                                Log In
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
