import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSidebar } from "../contexts/SidebarContext";

export default function ({ children }) {
    const { sidebarOpen, setSidebarOpen } = useSidebar();

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar active="Dashboard" isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col w-full overflow-x-hidden">
                <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                <main className="p-3 mt-15 md:p-6 bg-gray-50 flex-1 overflow-x-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}