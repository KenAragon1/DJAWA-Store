import { useState } from "react";

export default function Alert({ isAlertOpen = false }) {
    const [isOpen, setIsOpen] = useState(true);

    const [alertMessage, setAlertMessage] = useState(
        "this is an alert text. text go brrrrrrrrrrrrrrrrrrrrr"
    );

    function closeAlert() {
        setIsOpen(false);
    }

    function openAlert(message) {
        setIsOpen(true);
        setAlertMessage(message);
    }
    return (
        <div
            className={`bg-white shadow-xl fixed left-1/2 -translate-x-1/2 px-2 py-4 top-5 rounded-xl ${
                !isOpen && "invisible"
            }`}
        >
            <div className="flex items-center gap-4">
                <div className="pl-2 flex items-center gap-2">
                    {alertMessage}
                </div>
                <button
                    className="btn btn-ghost btn-xs rounded-full"
                    onClick={closeAlert}
                >
                    x
                </button>
            </div>
        </div>
    );
}
