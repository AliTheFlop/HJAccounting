import ServicesList from '@/components/services/ServicesList';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | H & J Accounting',
  description: 'Explore our comprehensive range of accounting, tax, and financial services.',
};

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive accounting solutions for businesses and individuals"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">What We Offer</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal-500"></span>
          </h2>
          <p className="text-lg max-w-3xl">
            At H & J Accounting, we provide a comprehensive suite of accounting and
            financial services tailored to meet the unique needs of businesses and
            individuals across Australia.
          </p>
        </div>
        
        <ServicesList />
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need a Custom Solution?</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Our team can create tailored accounting solutions to meet your specific
            business requirements. Get in touch to discuss how we can help.
          </p>
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}