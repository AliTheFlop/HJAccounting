import ContactForm from '@/components/contact/ContactForm';
import PageHeader from '@/components/layout/PageHeader';

export const metadata = {
  title: 'Contact Us | H & J Accounting',
  description: 'Get in touch with H & J Accounting. We\'re here to help with all your accounting needs.',
};

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </>
  );
}