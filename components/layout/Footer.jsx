import Link from 'next/link';
import { Calculator } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t-4 border-teal-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-teal-500 p-1 rotate-12 transform">
              <Calculator className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">
              H & J <span className="text-teal-500">Accounting</span>
            </span>
          </Link>

          <div className="flex space-x-6">
            <Link 
              href="/privacy-policy" 
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-600 hover:text-teal-500 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}