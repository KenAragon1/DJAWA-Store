import Dropdown from "@/Components/Dropdown";

const ProductRow = ({
    id,
    name,
    price,
    category,
    stock,
    image,
    deleteProduct,
    openProductEditForm,
}) => {
    return (
        <tr className="bg-white border-b hover:bg-gray-50 ">
            <th
                scope="row"
                className="flex items-center gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
                <img
                    src={"/storage/foto_produk/" + image}
                    className="aspect-[4/3]"
                    width={100}
                    alt=""
                />
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
                        <Dropdown.Item onClick={() => openProductEditForm(id)}>
                            Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => deleteProduct(id)}>
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
