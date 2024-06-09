import Dropdown from "@/Components/Dropdown";
import { router } from "@inertiajs/react";

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
        <tr className="bg-white border-b hover:bg-gray-50 ">
            <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                <img src={image} className="aspect-[4/3]" width={100} alt="" />
                {name}
            </th>
            <td className="px-6 py-4">{category}</td>
            <td className="px-6 py-4">{price}</td>
            <td className="px-6 py-4">{stock}</td>
            <td className="px-6 py-4 text-right">
                <Dropdown>
                    <Dropdown.Trigger>
                        <button className="text-xl font-bold">...</button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Item
                            onClick={() =>
                                router.get(
                                    route("admin.edit-product-page", {
                                        id_product: id_product,
                                    })
                                )
                            }
                        >
                            Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => deleteProduct(id_product)}
                        >
                            Delete
                        </Dropdown.Item>
                        <Dropdown.Item>View</Dropdown.Item>
                    </Dropdown.Content>
                </Dropdown>
            </td>
        </tr>
    );
};

export default ProductRow;
