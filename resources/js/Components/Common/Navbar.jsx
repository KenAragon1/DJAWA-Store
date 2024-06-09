import { Head, Link, usePage } from "@inertiajs/react";
import Dropdown from "../Dropdown";
import PrimaryButton from "../PrimaryButton";
import NavLink from "../NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ className = "" }) => {
    const { user } = usePage().props.auth;

    return (
        <nav
            className={
                "bg-white py-3 sticky top-0 shadow z-[9999] px-8" + className
            }
        >
            <div className="flex items-center justify-between">
                <div className="">
                    <Link
                        href={route("home")}
                        className="text-xl font-bold tracking-wide"
                    >
                        DJAWA Store
                    </Link>
                </div>

                <div className="flex gap-8">
                    <NavLink>Home</NavLink>
                    <NavLink>Category</NavLink>
                    <NavLink>About</NavLink>
                </div>
                <div className="flex gap-8">
                    {user ? (
                        <div className="flex content-center">
                            {user.user_type != "Admin" && (
                                <Link
                                    href={route("cart")}
                                    className="px-3 py-2 text-sm transition rounded hover:underline"
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>{" "}
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
                                    {user.user_type === "Admin" ? (
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Dropdown.Link>
                                    ) : (
                                        <Dropdown.Link
                                            href={route("payment-page")}
                                        >
                                            Payment
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
                            <NavLink href={route("login")}>Log in</NavLink>

                            <NavLink href={route("register")}>Register</NavLink>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
