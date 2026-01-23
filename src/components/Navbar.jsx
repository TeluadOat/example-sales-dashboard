import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import userPlaceholder from "../assets/images/user-placeholder.webp";

export default function Navbar({ onMenuClick }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 shadow overflow-hidden">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
                <button
                    className="md:hidden text-gray-700 hover:text-gray-900 cursor-pointer flex-shrink-0"
                    onClick={onMenuClick}
                >
                    <FaBars size={24} />
                </button>
                <span className="text-lg md:text-2xl font-bold truncate">Dashboard</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-gray-50 p-2 rounded flex-1 mx-2 max-w-xs">
                <FaSearch className="flex-shrink-0" />
                <input type="search" placeholder="Search..." className="bg-transparent outline-none text-sm w-full" />
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <select className="hidden sm:block border border-gray-100 rounded p-1 text-sm">
                    <option>Eng (US)</option>
                </select>
                <FaBell className="text-yellow-700 cursor-pointer" />
                <div className="hidden sm:flex items-center gap-2">
                    <img src={userPlaceholder} alt="user" className="rounded-full h-7" />
                    <span className="text-sm">Musfiq</span>
                </div>
            </div>
        </div>
    )
}