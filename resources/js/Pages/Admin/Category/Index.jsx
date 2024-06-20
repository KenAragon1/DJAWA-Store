import DashboardLayout from "@/Layouts/DashboardLayout";

export default function Index({ categories }) {
    console.log(categories);
    return (
        <DashboardLayout>
            <p className="mb-2 text-xl font-semibold text-secondary">
                Category Manager
            </p>
            <button className="mb-4 btn btn-secondary ">
                + Create New Category
            </button>
            <div className="main-container">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category) => (
                                <tr>
                                    <td># {category.id_category}</td>
                                    <td className="font-semibold">
                                        {category.name}
                                    </td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}
