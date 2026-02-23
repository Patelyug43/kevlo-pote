import { useState } from 'react';
import logo from '../assets/images/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img className="h-12 w-auto rounded-full" src={logo} alt="Kevlo Pote Logo" />
            <span className="ml-2 text-xl font-bold text-gray-800">Kevlo Pote</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">About</button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Menu</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => scrollToSection('home')} className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
            <button onClick={() => scrollToSection('menu')} className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left">Menu</button>
            <button onClick={() => scrollToSection('reviews')} className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-600 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
