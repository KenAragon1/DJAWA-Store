import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ProductTable from "./ProductTable";
import { useEffect, useState } from "react";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";

const AdminProduct = ({ auth }) => {
    // Fetch Data
    useEffect(() => {
        fetchData();
    }, []);

    const [products, setProducts] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("/api/product");
            const jsonData = await response.json();
            setProducts(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    // Delete
    function deleteProduct(id) {
        if (confirm("Yakin ingin menghapus produk?")) {
            const endpoint = "/api/product/" + id;
            fetch(endpoint, {
                method: "DELETE",
            })
                .then((response) => {
                    console.log(response);
                    setProducts((currentProducts) => {
                        return currentProducts.filter(
                            (product) => product.id !== id
                        );
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    // Add New Product Form
    const [productAddForm, setProductAddForm] = useState(false);

    function openProductAddForm() {
        setProductAddForm(true);
    }

    function closeProductAddForm() {
        setProductAddForm(false);
    }

    // Edit Product Form
    const defaultData = {
        name: "",
        price: "",
        stock: "",
        category: "",
        spesification: "",
        description: "",
        image: "",
    };
    const [productEditForm, setProductEditForm] = useState(false);
    const [productData, setProductData] = useState(defaultData);

    function openProductEditForm(id) {
        setProductEditForm(true);
        setProductData(products.find((product) => product.id === id));
    }

    function closeProductEditForm() {
        setProductEditForm(false);
        setProductData(defaultData);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Dashboard
                    </h2>
                </>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <PrimaryButton
                                className="mb-4"
                                onClick={openProductAddForm}
                            >
                                Tambah Produk Baru
                            </PrimaryButton>
                            <ProductTable
                                products={products}
                                deleteProduct={deleteProduct}
                                openProductEditForm={openProductEditForm}
                            />
                            <ProductAdd
                                show={productAddForm}
                                closeProductAddForm={closeProductAddForm}
                                updateProducts={fetchData}
                            />
                            <ProductEdit
                                show={productEditForm}
                                closeProductEditForm={closeProductEditForm}
                                productData={productData}
                                updateProducts={fetchData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AdminProduct;
