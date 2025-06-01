"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-teal-500 p-2 rotate-12 transform hover:rotate-0 transition-transform duration-300">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              H & J <span className="text-teal-500">Accounting</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <NavLink href="/" label="Home" />
              <NavLink href="/services" label="Services" />
              <NavLink href="/contact" label="Contact Us" />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/services" label="Services" onClick={() => setIsOpen(false)} />
            <MobileNavLink href="/contact" label="Contact Us" onClick={() => setIsOpen(false)} />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <Link 
      href={href}
      className="relative font-medium text-gray-800 hover:text-teal-500 transition-colors group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-teal-500 transition-colors"
    >
      {label}
    </Link>
  );
}