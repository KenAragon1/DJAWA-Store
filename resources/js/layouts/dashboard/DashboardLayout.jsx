import DashboardNavbar from "./components/Navbar";
import DashboardDrawer from "./components/Drawer";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen pb-4">
            <DashboardNavbar />
            <DashboardDrawer>
                <main className="mx-4 mt-4">{children}</main>
            </DashboardDrawer>
        </div>
    );
}
