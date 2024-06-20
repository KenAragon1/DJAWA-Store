import { convertOrderStatus } from "../Index";

export default function OrderStatus({ status, status_option }) {
    return (
        <div className="mb-4 main-container">
            <p className="text-lg font-semibold">Order Status :</p>
            <div>
                <div className="">{convertOrderStatus(status)}</div>
                <div>
                    <div className="mb-2">
                        <form>
                            <label htmlFor="" className="label">
                                Set Order Status To :
                            </label>
                            <select
                                name=""
                                id=""
                                className="w-full select select-bordered"
                            >
                                {status_option.map((option) => (
                                    <option>{option.status}</option>
                                ))}
                            </select>
                        </form>
                    </div>
                    <button className="w-full btn btn-secondary">Update</button>
                </div>
            </div>
        </div>
    );
}
