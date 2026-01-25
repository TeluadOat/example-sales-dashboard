import { FaChartPie, FaTrophy, FaShoppingCart, FaBoxOpen, FaFileAlt, FaEnvelope, FaCog, FaSignOutAlt, FaTimes } from "react-icons/fa";

export default function Sidebar({ active, isOpen, setIsOpen }) {
  const menu = [
    { name: "Dashboard", icon: <FaChartPie /> },
    { name: "Leaderboard", icon: <FaTrophy /> },
    { name: "Order", icon: <FaShoppingCart /> },
    { name: "Products", icon: <FaBoxOpen /> },
    { name: "Sales Report", icon: <FaFileAlt /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Sign Out", icon: <FaSignOutAlt /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 p-5 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div className={`w-64 h-screen fixed lg:sticky lg:top-0 lg:z-0 z-50 bg-white p-4 flex flex-col justify-between shadow-lg transition-transform duration-300 lg:transition-none 
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}>
        <div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">Dabang</h1>
            <button
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>
          {menu.map((item) => (
            <div
              key={item.name}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer mb-2
                ${active === item.name ? "bg-blue-500 text-white hover:bg-blue-600" : "text-gray-700 hover:bg-gray-100"}
                `}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center cursor-pointer">
          <p className="mb-3 font-semibold">Dabang Pro</p>
          <small className="block">Get access to all features on tembabo</small>
          <button className="mt-2 px-3 py-1 bg-white text-blue-500 rounded">Get Pro</button>
        </div>
      </div>
    </>
  );
}