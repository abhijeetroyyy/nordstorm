import React, { memo } from "react";
import { Search, User, ShoppingBag, Store, List, Gift } from "lucide-react";

// Memoized NavLink for better performance
const NavLink = memo(({ href, label, icon: Icon, className = "" }) => (
  <a
    href={href}
    className={`relative flex items-center space-x-4 text-gray-700 hover:text-gray-900 hover:underline underline-offset-4 decoration-2 decoration-blue-500 transition duration-200 ${className}`}
    aria-label={label}
  >
    {Icon && <Icon size={20} />}
    <span className="font-medium">{label}</span>
  </a>
));

const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Announcement Bar */}
      <div className="bg-[rgb(108,255,150)] text-gray-800 text-center text-xs py-2 font-rackSans leading-tight">
        <strong>Get your holiday gifts in time!</strong> Order by 5PM PT on
        12/17 for standard shipping.{" "}
        <a
          href="#"
          className="underline font-bold hover:text-gray-300 transition duration-200"
        >
          Shop Gifts
        </a>
      </div>

      {/* Main Header */}
      <div className="py-3 px-4 sm:px-6 lg:px-12 xl:px-32 mt-3 flex items-center max-w-8xl mx-auto justify-between">
        {/* Logo and Search */}
        <div className="flex items-center space-x-8 flex-grow">
          <img
            src="https://n.nordstrommedia.com/id/df3a0d48-0df8-483c-81af-7e456c0a47bb.svg"
            alt="Nordstrom Logo"
            className="w-32 cursor-pointer"
          />
          <div className="relative w-full max-w-3xl">
            <input
              type="text"
              placeholder="Search for products or brands"
              className="w-full border border-black pl-10 py-3 text-sm shadow focus:outline-none transition-all font-rackSans"
              aria-label="Search for products or brands"
            />
            <button
              aria-label="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black transition-all duration-200"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* User Options */}
        <div className="flex items-center space-x-6 text-sm font-rackSans md:flex">
          {/* Sign In with Dropdown */}
          <div className="relative group">
            <NavLink href="#" label="Sign In" icon={User} />
            <div className="absolute left-0 hidden mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg group-hover:block transition-all duration-200 ease-in-out">
              <NavLink href="#" label="My Account" />
              <NavLink href="#" label="Orders" />
              <NavLink href="#" label="Wishlist" />
              <NavLink href="#" label="Sign Out" />
            </div>
          </div>

          <NavLink href="#" label="Store" icon={Store} />
          <NavLink href="#" label="Orders" icon={List} />
          <NavLink
            href="#"
            label="Cart"
            icon={ShoppingBag}
            className="relative"
          >
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              3
            </span>
          </NavLink>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="h-px bg-gray-300 w-5/6 mx-auto mt-2" />

      {/* Navigation Links */}
      <nav className="py-5 px-6 sm:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-wrap justify-between space-x-6 text-xs leading-tight font-rackSans font-normal tracking-wide">
          {[
            { label: "Gift Guide", icon: Gift },
            "New",
            "Women",
            "Men",
            "Kids",
            "Shoes",
            "Bags & Accessories",
            "Home",
            "Beauty",
          ].map((item, index) => (
            <NavLink
              key={index}
              href="#"
              label={typeof item === "string" ? item : item.label}
              icon={typeof item !== "string" ? item.icon : null}
              className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-black transition-all duration-200"
            />
          ))}
          <NavLink
            href="#"
            label="Clearance"
            className="text-red-500 hover:text-red-600 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-black transition-all duration-200"
          />
          <NavLink
            href="#"
            label="Flash Events"
            className="text-blue-500 hover:text-blue-600 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-black transition-all duration-200"
          />
        </div>
      </nav>
      <div className="text-center py-4 font-rackSans">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 tracking-wider">
          More to Rack, Easier and Faster
        </h1>
        <button className="mt-2 px-8 py-3 border-2 border-blue-400 font-semibold transition-all ease-in-out transform hover:scale-105">
          Sign In or Create an Account
        </button>
      </div>
    </header>
  );
};

// Export memoized Header for production-grade performance
export default memo(Header);
