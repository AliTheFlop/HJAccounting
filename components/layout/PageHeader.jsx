export default function PageHeader({ title, description }) {
  return (
    <div className="bg-gray-100 border-b-4 border-teal-500 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute transform rotate-12 -right-48 top-20 h-20 w-[600px] bg-orange-500 opacity-10"></div>
        <div className="absolute transform rotate-6 -right-48 top-40 h-20 w-[600px] bg-teal-500 opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}