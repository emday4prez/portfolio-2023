import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <p className="text-xl text-white font-medium">Emerson Day</p>
          </Link>
          <button
            className="block lg:hidden text-gray-500 hover:text-white focus:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"></path>
              ) : (
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block lg:flex lg:items-center lg:justify-between p-4`}
        >
          <Link href="/about">
            <p className="text-sm text-gray-500 font-medium mr-6 hover:text-white">
              About Me
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-sm text-gray-500 font-medium hover:text-white">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
