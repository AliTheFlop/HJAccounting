import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-16 bg-gray-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute right-0 top-0 w-full h-full">
                <div className="absolute transform rotate-12 -right-48 top-20 h-20 w-[600px] bg-teal-500 opacity-10"></div>
                <div className="absolute transform rotate-6 -right-48 top-40 h-20 w-[600px] bg-orange-500 opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Financial Future?
                    </h2>

                    <p className="text-lg text-gray-300 mb-8">
                        Our team of experts is ready to provide the guidance and
                        support you need to achieve your financial goals. Get in
                        touch today for a consultation.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-base">
                                Contact Us Today
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button
                                variant="outline"
                                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 text-base"
                            >
                                Explore Our Services
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        <ContactInfo
                            title="Call Us"
                            detail="1300 346 746"
                            action="Call Now"
                            href="tel:1300346746"
                        />
                        <ContactInfo
                            title="Email Us"
                            detail="info@hjaccounting.com.au"
                            action="Send Email"
                            href="mailto:info@hjaccounting.com.au"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactInfo({ title, detail, action, href }) {
    return (
        <div className="bg-gray-800 p-6 border-t-4 border-teal-500">
            <h3 className="text-white font-medium mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{detail}</p>
            <Link
                href={href}
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
            >
                {action}
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}
