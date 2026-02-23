import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const links = ['home', 'about', 'menu', 'reviews', 'contact'];

  return (
    <nav className="bg-white/95 backdrop-blur shadow fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button className="flex items-center gap-3" onClick={() => scrollToSection('home')}>
            <div className="h-10 w-10 rounded-full bg-yellow-300 flex items-center justify-center font-black text-xs">KP</div>
            <span className="text-xl font-bold text-gray-900">Kevlo Pote</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)} className="uppercase text-sm font-semibold text-gray-700 hover:text-yellow-600">
                {link}
              </button>
            ))}
          </div>

          <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden text-gray-700 font-semibold">
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <button key={link} onClick={() => scrollToSection(link)} className="block w-full text-left uppercase text-sm font-semibold text-gray-700 py-2">
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
