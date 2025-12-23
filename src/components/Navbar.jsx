import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../assets/logo.webp";
import { navItems } from "../constants/index";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center shrink-0">
            <img
              className="h-10 w-10 mr-2"
              src={logo}
              alt="VirtualR logo"
              height="40"
              width="40"
            />
            <span className="tracking-tight text-xl">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px3 rounded-md text-white"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button
              onClick={toggleMobileDrawer}
              className="focus:outline-none"
              aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
            >
              {mobileDrawerOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-700/80 z-40">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 mt-4">
                <a
                  href="#"
                  className="  text-center py-2 px-3 border rounded-md mr-4"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="  text-center py-2 px-5 bg-linear-to-r from-orange-500 to-orange-800 rounded-md text-white"
                >
                  Create an account
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
