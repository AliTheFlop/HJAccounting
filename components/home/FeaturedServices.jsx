"use client";

import { useState } from 'react';
import { ChevronRight, BarChart3, DollarSign, FileSpreadsheet, Users, PieChart, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Tax Planning & Preparation',
    description: 'Strategic tax planning and preparation services for individuals and businesses to minimize tax burden.',
    icon: <DollarSign className="h-6 w-6" />,
    color: 'bg-teal-500',
  },
  {
    id: 2,
    title: 'Business Accounting',
    description: 'Comprehensive accounting services including bookkeeping, financial statements, and compliance.',
    icon: <FileSpreadsheet className="h-6 w-6" />,
    color: 'bg-orange-500',
  },
  {
    id: 3,
    title: 'Financial Advisory',
    description: 'Expert financial advice to help you make informed decisions for your business or personal finances.',
    icon: <BarChart3 className="h-6 w-6" />,
    color: 'bg-blue-500',
  },
  {
    id: 4,
    title: 'Payroll Services',
    description: 'End-to-end payroll management services to ensure compliance and timely processing.',
    icon: <Users className="h-6 w-6" />,
    color: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'SMSF Management',
    description: 'Self-managed super fund establishment, compliance, and management services.',
    icon: <PieChart className="h-6 w-6" />,
    color: 'bg-green-500',
  },
  {
    id: 6,
    title: 'Business Advisory',
    description: 'Strategic business consulting to help you grow and optimize your operations.',
    icon: <Building className="h-6 w-6" />,
    color: 'bg-indigo-500',
  },
];

export default function FeaturedServices() {
  const [hoveredId, setHoveredId] = useState(null);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gray-200 text-gray-700 px-4 py-1 font-medium text-sm skew-x-12 inline-block transform">
              OUR SERVICES
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accounting Services That Deliver Results
          </h2>
          
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of accounting and financial services 
            tailored to meet the unique needs of Australian businesses and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 shadow-lg border-t-4 hover:shadow-xl transition-shadow group relative overflow-hidden"
              style={{ borderTopColor: service.color === 'bg-teal-500' ? '#14b8a6' : 
                      service.color === 'bg-orange-500' ? '#f97316' : 
                      service.color === 'bg-blue-500' ? '#3b82f6' : 
                      service.color === 'bg-purple-500' ? '#a855f7' : 
                      service.color === 'bg-green-500' ? '#22c55e' : 
                      '#6366f1' }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`${service.color} text-white p-3 inline-block mb-4`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <Link 
                href="/services" 
                className="inline-flex items-center text-gray-800 font-medium hover:text-teal-500 transition-colors"
              >
                Learn More
                <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  hoveredId === service.id ? 'transform translate-x-1' : ''
                }`} />
              </Link>
              
              {/* Decorative element */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 transform rotate-45 bg-gray-100 opacity-50"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-base">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}