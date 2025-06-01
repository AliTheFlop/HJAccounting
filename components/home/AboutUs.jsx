import { ArrowRight, Award, Clock, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Image
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                                    alt="H & J Accounting team"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 border-4 border-teal-500 transform translate-x-4 translate-y-4 -z-10"></div>
                            </div>
                            <div className="mt-16 relative">
                                <Image
                                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
                                    alt="Accountants at work"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 border-4 border-orange-400 transform -translate-x-4 -translate-y-4 -z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="mb-6">
                            <span className="bg-gray-200 text-gray-700 px-4 py-1 font-medium text-sm skew-x-12 inline-block transform">
                                ABOUT US
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                            <span>Your Trusted Financial Partner</span>
                            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-500"></span>
                        </h2>

                        <p className="text-gray-600 mb-8">
                            Since 2017, H & J Accounting has provided expert
                            accounting services to businesses and individuals
                            across Australia. Our team of certified
                            professionals combines industry expertise with
                            personalized service to deliver solutions that drive
                            financial success.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="border-l-4 border-orange-400 pl-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Award className="h-5 w-5 text-orange-500" />
                                    <span className="font-bold">Certified</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    CPA Australia certified accountants
                                </p>
                            </div>

                            <div className="border-l-4 border-teal-500 pl-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Clock className="h-5 w-5 text-teal-500" />
                                    <span className="font-bold">
                                        Experienced
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Over 15 years serving clients
                                </p>
                            </div>

                            <div className="border-l-4 border-gray-400 pl-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Users className="h-5 w-5 text-gray-500" />
                                    <span className="font-bold">
                                        Client-Focused
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Personalized service approach
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/services"
                            className="inline-flex items-center text-teal-500 font-medium hover:text-teal-600 transition-colors group"
                        >
                            Discover our services
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
