import { 
  Calculator, 
  FileSpreadsheet, 
  BarChart3, 
  Users, 
  Building, 
  PieChart, 
  FileText, 
  BookOpen 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Tax Planning & Preparation',
    description: 'Strategic tax planning and preparation services for individuals and businesses. We help minimize tax burden while ensuring full compliance with ATO regulations.',
    icon: <Calculator className="h-6 w-6" />,
    features: [
      'Individual & Business Tax Returns',
      'Strategic Tax Planning',
      'ATO Audit Support',
      'Tax Compliance',
      'GST Registration & Filing'
    ]
  },
  {
    id: 2,
    title: 'Business Accounting',
    description: 'Comprehensive accounting services to keep your business finances in order. From bookkeeping to financial statements, we handle it all.',
    icon: <FileSpreadsheet className="h-6 w-6" />,
    features: [
      'Bookkeeping Services',
      'Financial Statement Preparation',
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'BAS Preparation & Lodgment'
    ]
  },
  {
    id: 3,
    title: 'Financial Advisory',
    description: 'Expert financial advice to help you make informed decisions for your business or personal finances. We provide guidance on investment, cash flow, and more.',
    icon: <BarChart3 className="h-6 w-6" />,
    features: [
      'Cash Flow Management',
      'Investment Analysis',
      'Financial Forecasting',
      'Risk Assessment',
      'Financial Planning'
    ]
  },
  {
    id: 4,
    title: 'Payroll Services',
    description: 'End-to-end payroll management services to ensure compliance and timely processing. We handle everything from setup to ongoing management.',
    icon: <Users className="h-6 w-6" />,
    features: [
      'Payroll Processing',
      'Superannuation Administration',
      'PAYG Withholding',
      'Leave Management',
      'Single Touch Payroll Compliance'
    ]
  },
  {
    id: 5,
    title: 'SMSF Management',
    description: 'Self-managed super fund establishment, compliance, and management services. We help you maximize your retirement savings while staying compliant.',
    icon: <PieChart className="h-6 w-6" />,
    features: [
      'SMSF Establishment',
      'Compliance Management',
      'Investment Strategy',
      'Annual Audit Preparation',
      'Benefit Payment Processing'
    ]
  },
  {
    id: 6,
    title: 'Business Advisory',
    description: 'Strategic business consulting to help you grow and optimize your operations. We provide insights on profitability, efficiency, and more.',
    icon: <Building className="h-6 w-6" />,
    features: [
      'Business Structure Advice',
      'Succession Planning',
      'Profitability Analysis',
      'Process Optimization',
      'Growth Strategy Development'
    ]
  },
  {
    id: 7,
    title: 'Audit & Assurance',
    description: 'Independent audit and assurance services to enhance the credibility of your financial information for stakeholders.',
    icon: <FileText className="h-6 w-6" />,
    features: [
      'Financial Statement Audits',
      'Internal Control Reviews',
      'Compliance Audits',
      'Due Diligence',
      'Statutory Reporting'
    ]
  },
  {
    id: 8,
    title: 'Financial Training',
    description: 'Customized financial training for business owners and staff to improve financial literacy and decision-making.',
    icon: <BookOpen className="h-6 w-6" />,
    features: [
      'Financial Literacy Workshops',
      'Accounting Software Training',
      'Budget Management Training',
      'Tax Compliance Education',
      'Financial Reporting Training'
    ]
  }
];

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
      {services.map((service) => (
        <div key={service.id} className="relative">
          <div className="flex items-start">
            <div className="bg-teal-500 p-3 text-white mr-6">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="mt-6 border-l-4 border-orange-400 pl-4">
                <h4 className="font-medium mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-16 h-16 transform rotate-45 bg-gray-100"></div>
        </div>
      ))}
    </div>
  );
}