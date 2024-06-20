import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("login"));
    };

    return (
        <div className="flex h-screen">
            <Head title="Log in" />

            <div className="pt-8 mx-auto">
                <Link
                    href={route("home")}
                    className="inline-block mb-4 text-2xl font-bold text-center text-secondary"
                >
                    DJAWA STORE
                </Link>
                <div className="p-8 mx-auto  bg-white border border-gray-300 rounded-lg w-[30rem] tracking-wide">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <p className="mb-4 text-2xl font-semibold text-secondary">
                        Login
                    </p>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <label className="flex items-center gap-2 input input-bordered">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input
                                    className="border-0 grow focus:ring-0"
                                    placeholder="Email"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                />
                            </label>

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="my-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <label className="flex items-center gap-2 input input-bordered">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-4 h-4 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="border-0 grow focus:ring-0"
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                            </label>

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <Link
                            href={route("password.request")}
                            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot Your Password?
                        </Link>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="text-sm text-gray-600 ms-2">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end gap-4 mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("register")}
                                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Don't have an account?
                                </Link>
                            )}

                            <button
                                className="btn btn-secondary btn-sm"
                                disabled={processing}
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
