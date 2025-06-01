import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 relative shadow-lg">
      <div className="absolute top-0 left-0 w-20 h-20 bg-teal-500 opacity-10 transform -rotate-45 -translate-x-10 -translate-y-10"></div>
      
      <h3 className="text-2xl font-bold mb-6 relative inline-block">
        <span className="relative z-10">Contact Information</span>
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500"></span>
      </h3>
      
      <ul className="space-y-6">
        <ContactItem 
          icon={<MapPin className="h-6 w-6" />}
          title="Our Office"
          details={["123 Business Street", "Sydney, NSW 2000", "Australia"]}
          color="text-teal-500"
        />
        
        <ContactItem 
          icon={<Phone className="h-6 w-6" />}
          title="Phone"
          details={["(02) 1234 5678", "0400 123 456"]}
          color="text-orange-500"
        />
        
        <ContactItem 
          icon={<Mail className="h-6 w-6" />}
          title="Email"
          details={["info@hjaccounting.com.au", "support@hjaccounting.com.au"]}
          color="text-teal-500"
        />
        
        <ContactItem 
          icon={<Clock className="h-6 w-6" />}
          title="Business Hours"
          details={["Monday - Friday: 9:00 AM - 5:30 PM", "Saturday & Sunday: Closed"]}
          color="text-orange-500"
        />
      </ul>
    </div>
  );
}

function ContactItem({ icon, title, details, color }) {
  return (
    <li className="flex items-start">
      <div className={`${color} mr-4 mt-1`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <div className="text-gray-600">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </li>
  );
}