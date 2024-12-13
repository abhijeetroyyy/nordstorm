import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Email Updates */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6">
          <h3 className="text-lg font-medium">Get Email Updates:</h3>
          <div className="flex mt-4 lg:mt-0 space-x-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-400 px-4 py-2 rounded-md w-full lg:w-96"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>Order Status</li>
              <li>Guest Returns</li>
              <li>Shipping & Return Policy</li>
              <li>Gift Cards</li>
              <li>Product Recalls</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>About Our Brand</li>
              <li>The Nordy Club</li>
              <li>Store Locator</li>
              <li>All Brands</li>
              <li>Careers</li>
              <li>Get Email Updates</li>
              <li>Nordstrom Blog</li>
              <li>Nordy Podcast</li>
              <li>Store Openings</li>
            </ul>
          </div>

          {/* Nordstrom Rack & The Community */}
          <div>
            <h4 className="font-semibold mb-4">Nordstrom Rack & The Community</h4>
            <ul className="space-y-2">
              <li>Corporate Social Responsibility</li>
              <li>Diversity, Equity, Inclusion & Belonging</li>
              <li>Big Brothers Big Sisters</li>
              <li>Donate Clothes</li>
            </ul>
          </div>

          {/* Nordstrom Card */}
          <div>
            <h4 className="font-semibold mb-4">Nordstrom Card</h4>
            <ul className="space-y-2">
              <li>Apply for a Nordstrom Card</li>
              <li>Pay My Bill</li>
              <li>Manage my Nordstrom Card</li>
            </ul>
          </div>

          {/* Nordstrom, Inc. */}
          <div>
            <h4 className="font-semibold mb-4">Nordstrom, Inc.</h4>
            <ul className="space-y-2">
              <li>Nordstrom</li>
              <li>HauteLook</li>
              <li>Investor Relations</li>
              <li>Press Releases</li>
              <li>Nordstrom Media Network</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <p className="text-sm">Download Our Apps</p>
            <a href="#" className="text-gray-600 hover:text-black">
              📱
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Pinterest
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Instagram
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-500 mt-10">
          <div className="flex justify-center space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Your Privacy Rights</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">California Supply Chain Act</a>
          </div>
          <p className="mt-4">©2024 Nordstrom Rack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
