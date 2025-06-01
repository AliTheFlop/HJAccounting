export default function Map() {
  return (
    <div className="h-[400px] w-full relative shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26517.180271984897!2d151.19440405!3d-33.8675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="H & J Accounting Office Location"
        className="z-10 relative"
      ></iframe>
      
      {/* Decorative border */}
      <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-teal-500 z-0"></div>
    </div>
  );
}