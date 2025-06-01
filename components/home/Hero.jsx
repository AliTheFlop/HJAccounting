import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute transform -rotate-12 -right-1/4 -top-24 h-40 w-[800px] bg-teal-500 opacity-10"></div>
        <div className="absolute transform -rotate-6 -right-1/4 top-32 h-40 w-[800px] bg-orange-500 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="mb-6 inline-block">
              <span className="bg-teal-500 text-white px-4 py-1 font-medium text-sm skew-x-12 inline-block transform">
                AUSTRALIAN ACCOUNTING EXPERTS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Financial clarity for your
              <span className="text-teal-500 block">business success</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              H & J Accounting provides professional accounting services tailored to your business needs.
              Our experts help you navigate complex financial landscapes with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-base">
                  Get Started
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:ml-auto relative">
            <div className="absolute -left-4 -top-4 w-full h-full border-4 border-orange-400 skew-x-3 skew-y-3"></div>
            <div className="relative z-10">
              <Image 
                src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg" 
                alt="Accountant at work"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}