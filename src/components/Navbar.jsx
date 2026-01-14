import { FaBell, FaSearch } from "react-icons/fa";
import userPlaceholder from "../assets/images/user-placeholder.webp";

export default function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white p-4 shadow">
            <span className="text-2xl font-bold">Dashboard</span>
            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                <FaSearch />
                <input type="search" placeholder="Search here..." className="bg-transparent outline-none" />
            </div>
            <div className="flex items-center gap-4">
                <select className="border border-gray-100 rounded p-1">
                    <option>Eng (US)</option>
                </select>
                <FaBell className="text-yellow-700 cursor-pointer" />
                <div className="flex items-center gap-2">
                    <img src={userPlaceholder} alt="user" className="rounded-full h-5" />
                    <span>Musfiq</span>
                </div>
            </div>
        </div>
    )
}