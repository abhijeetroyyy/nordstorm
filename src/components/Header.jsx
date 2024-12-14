import React, { memo, useState } from "react";
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
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Handle mouse enter/leave for both the Sign In button and dropdown menu
  const handleDropdownToggle = (visible) => {
    setDropdownVisible(visible);
  };

  // Handle Sign In button click
  const handleSignInClick = () => {
    setDropdownVisible((prevState) => !prevState); // Toggle visibility
  };

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
        <div className="relative flex z-10 items-center space-x-6 text-sm font-rackSans md:flex">
          {/* Sign In with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
          >
            <NavLink
              href="#"
              label="Sign In"
              icon={User}
              onClick={handleSignInClick} // Added click handler
            />
            {dropdownVisible && (
              <div
                className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg"
                onMouseEnter={() => handleDropdownToggle(true)} // Keep visible when hovering over the dropdown
                onMouseLeave={() => handleDropdownToggle(false)} // Hide when the cursor leaves the dropdown
              >
                {/* Dropdown Content */}
                <div className="p-4 border-b">
                  <button className="w-full bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
                    Sign In | Create Account
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">Your Account</h4>
                  <ul className="space-y-2">
                    <NavLink href="#" label="Purchases" />
                    <NavLink href="#" label="Wish List" />
                    <NavLink href="#" label="The Nordy Club Rewards" />
                    <NavLink href="#" label="Shipping Addresses" />
                    <NavLink href="#" label="Payment Methods" />
                    <NavLink href="#" label="Pay & Manage Nordstrom Card" />
                  </ul>
                </div>
                <div className="p-4 border-t">
                  <h4 className="font-semibold mb-2">Account Settings</h4>
                  <ul className="space-y-2">
                    <NavLink href="#" label="Password & Personal Info" />
                    <NavLink href="#" label="Email & Mail Preferences" />
                  </ul>
                </div>
                <div className="p-4 border-t">
                  <h4 className="font-semibold mb-2">Need Help?</h4>
                  <ul className="space-y-2">
                    <NavLink href="#" label="Contact Us" />
                    <NavLink href="#" label="Find a Store" />
                  </ul>
                </div>
              </div>
            )}
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
