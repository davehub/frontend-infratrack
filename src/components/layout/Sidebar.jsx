import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiServer,
  FiTool,
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiHome size={18} />,
      path: "/",
    },
    {
      name: "Inventaire",
      icon: <FiServer size={18} />,
      path: "/inventory",
      subItems: [
        { name: "Tous les équipements", path: "/inventory" },
        { name: "Ajouter un équipement", path: "/inventory/add" },
      ],
    },
    {
      name: "Tickets",
      icon: <FiTool size={18} />,
      path: "/tickets",
    },
    {
      name: "Utilisateurs",
      icon: <FiUsers size={18} />,
      path: "/users",
    },
    {
      name: "Paramètres",
      icon: <FiSettings size={18} />,
      path: "/settings",
    },
  ];

  const toggleSubmenu = (name) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-200 ease-in-out lg:z-auto`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Gestion Parc</h1>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                {!item.subItems ? (
                  <Link
                    to={item.path}
                    className={`flex items-center p-2 rounded-md ${
                      location.pathname === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`flex items-center justify-between w-full p-2 rounded-md ${
                        location.pathname.startsWith(item.path)
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      {openSubmenus[item.name] ? (
                        <FiChevronDown size={16} />
                      ) : (
                        <FiChevronRight size={16} />
                      )}
                    </button>
                    {openSubmenus[item.name] && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.path}
                              className={`flex items-center p-2 text-sm rounded-md ${
                                location.pathname === subItem.path
                                  ? "bg-blue-50 text-blue-600"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;