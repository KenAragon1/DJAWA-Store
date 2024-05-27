import { Head, Link, usePage } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import PrimaryButton from "../PrimaryButton";

const Navbar = ({ classname = "" }) => {
    const { user } = usePage().props.auth;

    return (
        <nav
            className={
                "bg-white px-2 lg:px-3 py-3 sticky top-0 shadow z-[9999] " +
                classname
            }
        >
            <div className="flex items-center ">
                <div className="flex items-center justify-start w-1/3">
                    <Link
                        href={route("home")}
                        className="text-xl text-pastel-yellow"
                    >
                        DJAWA.IRL
                    </Link>
                </div>

                <div className="flex items-center justify-center w-1/3">
                    <div className="relative w-60 lg:w-80">
                        <input
                            type="search"
                            name=""
                            id=""
                            className="w-full px-3 py-2 rounded placeholder:italic placeholder:text-sm outline outline-1 outline-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-100"
                            placeholder="Barang apa yang kamu cari?"
                        />
                        <div className="">
                            <button className="absolute inset-y-0 right-[2px] rounded  text-slate-500 aspect-square hover:bg-black  h-[98%] transition-all duration-200">
                                <i className="bx bx-search-alt-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end w-1/3 gap-2">
                    {user ? (
                        <div className="flex content-center">
                            {user.user_type != "Admin" && (
                                <Link
                                    href={route("cart")}
                                    className="px-3 py-2 text-sm"
                                >
                                    <i cass="bx bx-cart"></i> Cart
                                </Link>
                            )}

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
                                        >
                                            {user.name}
                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    {user.user_type === "Admin" && (
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Dropdown.Link>
                                    )}
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="font-semibold text-gray-600 ms-4 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
