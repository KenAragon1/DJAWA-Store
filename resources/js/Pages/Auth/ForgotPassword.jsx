import GuestLayout from "@/layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="flex min-h-screen">
            <Head title="Forgot Password" />
            <div className="pt-8 mx-auto">
                <Link
                    href={route("home")}
                    className="inline-block mb-4 text-2xl font-bold text-center text-secondary"
                >
                    DJAWA STORE
                </Link>
                <div className="p-8 mx-auto  bg-white border border-gray-300 rounded-lg w-[30rem] tracking-wide">
                    <p className="mb-4 text-2xl font-semibold text-secondary">
                        Forgot Password
                    </p>

                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
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

                        <InputError message={errors.email} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">
                            <button
                                className="btn btn-secondary"
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
