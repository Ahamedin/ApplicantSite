function ContactPage() {
  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO */}
      <section className="hero min-h-[60vh] sm:min-h-[70vh] bg-primary text-primary-content flex flex-col justify-center px-6 sm:px-10 lg:px-16 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif max-w-4xl mx-auto lg:mx-0">
          Reach Out & Connect With Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg font-light">
          We love creators and are here to help you transform your space with stunning 3D wallpapers.
        </p>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 flex flex-col lg:flex-row justify-center items-center gap-12">

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6">Get in Touch</h2>
          <p className="mb-4 text-base sm:text-lg leading-relaxed font-light">
            For inquiries, collaborations, or support, feel free to contact us via:
          </p>

          <ul className="space-y-3 text-base sm:text-lg font-light">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@wall3d.com" className="text-primary underline">contact@wall3d.com</a>
            </li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Address:</strong> 123 Creative Street, Chennai, Tamil Nadu, India</li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Wall 3D Wallpapers Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d140016.48923606606!2d78.78450057106294!3d10.093190584277743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748071381558!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="bg-base-100 py-16 px-6 sm:px-10 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-serif mb-4">Why Choose Wallpapers for Walls</h3>
        <p className="text-base sm:text-lg leading-relaxed font-light">
          We provide high-quality, durable 3D wallpapers that breathe life into your interiors
          with stunning depth and design. Our expert team ensures seamless installation and
          lasting satisfaction.
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
