import { Head, Link, usePage } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import PrimaryButton from "../PrimaryButton";
import NavLink from "../NavLink";
import { TiShoppingCart } from "react-icons/ti";

const Header = ({ className = "" }) => {
    const { user } = usePage().props.auth;

    return (
        <>
            <header className="bg-white border-b border-b-gray-300">
                <div className="navbar bg-base-100 layout">
                    <div className="navbar-start">
                        <Link className="text-xl font-semibold text-secondary">
                            DJAWA STORE
                        </Link>
                    </div>
                    <div className="hidden navbar-center lg:flex">
                        <div class="join w-[24rem]">
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
                                <Link className="flex items-center gap-1 text-sm btn btn-sm btn-ghost">
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
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">
                                                    New
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a>Settings</a>
                                        </li>
                                        <li>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                            >
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <NavLink href={route("login")}>Log In</NavLink>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
