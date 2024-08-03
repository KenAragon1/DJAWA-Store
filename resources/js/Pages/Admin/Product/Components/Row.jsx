import Dropdown from "@/Components/Dropdown";
import { Link, router } from "@inertiajs/react";

const ProductRow = ({
    id_product,
    name,
    price,
    category,
    stock,
    image,
    deleteProduct,
}) => {
    return (
        <tr className="hover">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">
                            {category.name}
                        </div>
                    </div>
                </div>
            </td>
            <td>Rp {price.toLocaleString("id-ID")}</td>
            <td>{stock.quantity}</td>
            <th>
                <details className="dropdown dropdown-end">
                    <summary className="m-1 btn btn-ghost btn-sm">...</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <Link
                                href={route("product.edit", {
                                    id_product: id_product,
                                })}
                            >
                                Edit
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => deleteProduct(id_product)}>
                                Delete
                            </button>
                        </li>
                    </ul>
                </details>
            </th>
        </tr>
    );
};

export default ProductRow;
