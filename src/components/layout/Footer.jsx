import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Gestion Parc Informatique - Version 1.0.0</p>
      </div>
    </footer>
  );
};

export default Footer;