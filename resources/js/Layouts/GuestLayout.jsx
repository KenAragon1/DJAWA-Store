import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";

export default function GuestLayout({ header, children }) {
    const { user } = usePage().props.auth;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="">
            <nav className="bg-white border-b border-b-gray-300">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex items-center shrink-0">
                                <Link href="/">
                                    <div className="text-xl font-bold text-secondary">
                                        DJAWA STORE
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="min-h-screen">{children}</main>
        </div>
    );
}
