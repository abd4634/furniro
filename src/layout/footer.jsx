import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
      <footer className="text-gray-600 body-font" style={{ borderTop: "1px solid #9F9F9F" }}>
        <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 text-center lg:text-left mb-6 lg:mb-0">
            <a className="flex title-font font-medium items-center justify-center lg:justify-start text-gray-900">
              <span className="ml-3 text-xl" style={{ fontSize: "24px", fontWeight: "700", lineHeight: "34px" }}>
                Funiro.
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-500" style={{ color: "#9F9F9F", fontWeight: "400", fontSize: "16px", lineHeight: "20px" }}>
              400 University Drive Suite 200 Coral <br /> Galbes, Fl 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:w-1/4 w-full px-4 mb-6 lg:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#9F9F9F" }}>
              Links
            </h2>
            <nav className="list-none mb-10" style={{ lineHeight: "60px" }}>
              <li><Link to='/' className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Home</Link></li>
              <li><Link to='/shops' className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Shop</Link></li>
              <li><Link to='/about' className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>About</Link></li>
              <li><Link to='/contact' className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Contact</Link></li>
            </nav>
          </div>

          {/* Help Section */}
          <div className="flex flex-col lg:w-1/4 w-full px-4 mb-6 lg:mb-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ fontWeight: "500", fontSize: "16px", lineHeight: "24px", color: "#9F9F9F" }}>
              Help
            </h2>
            <nav className="list-none mb-10" style={{ lineHeight: "60px" }}>
              <li><a className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Payment Option</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Returns</a></li>
              <li><a className="text-gray-600 hover:text-gray-800" style={{ color: "#000000", fontWeight: "500", fontSize: "16px" }}>Privacy Policies</a></li>
            </nav>
          </div>

          {/* Subscription Section */}
          <div className="flex flex-col lg:flex-row items-center lg:w-1/4 w-full px-4 mb-6 lg:mb-0">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="border-b-2 border-black focus:border-blue-500 outline-none text-gray-700 placeholder-gray-500 py-2 px-4 mr-4 mb-4 lg:mb-0"
              style={{ fontWeight: "400", fontSize: "14px", flexGrow: "1" }}
            />
            <button
              className="border-b-2 border-black hover:border-black py-2 px-6 text-gray-700 font-medium"
              style={{ fontWeight: "500", fontSize: "14px", width: "120px" }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-white" style={{ borderTop: "1px solid #9F9F9F" }}>
          <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left" style={{ fontWeight: "400", fontSize: "16px", lineHeight: "24px", color: "#000000" }}>
              © 2024 Furino. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

  );
};

export default Footer;
