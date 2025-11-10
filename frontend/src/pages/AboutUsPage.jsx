import { useNavigate } from "react-router-dom";

function AboutPage() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* HERO */}
      <section>
        <div className="hero min-h-[70vh] bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-x-20 text-center lg:text-left px-6 sm:px-10">

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">
                About Wall-Wallpapers
              </h1>

              <p className="py-6 text-base sm:text-lg max-w-xl font-light mx-auto lg:mx-0">
                Transform your space with our high-quality 3D wallpapers — bringing depth, style, and personality to your walls.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus repellendus nobis natus provident!
              </p>
            </div>

            <img
              src="https://www.giffywalls.in/cdn/shop/files/A104_3d_fantastic_illustration_unknown_planet_on_a_dark_night_sky_49_8ab845d8-2043-467c-8215-03c26bdea368.jpg?v=1734182762&width=400"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
            />

          </div>
        </div>
      </section>


      {/* MISSION */}
      <section className="py-12 px-6 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Our Mission</h2>
          <p className="text-base sm:text-md leading-relaxed font-light px-2 sm:px-10 py-6">
            At Wall 3D, we believe walls deserve more than just paint. We are passionate about offering premium 3D wallpapers
            that elevate interiors with texture and dimension.
          </p>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-10">Why Choose Us?</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Stunning Realism</h3>
              <p className="font-light">High-definition 3D patterns bring true depth.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Easy Installation</h3>
              <p className="font-light">Designed for simple setup and removal.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Custom Designs</h3>
              <p className="font-light">Choose from many designs or create your own.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-12 px-6 bg-primary text-primary-content text-center">
        <h2 className="text-2xl sm:text-3xl font-serif mb-4">Ready to Redefine Your Walls?</h2>
        <p className="mb-6 font-light text-base sm:text-lg">Explore our collection or contact us for a custom quote.</p>
        <button className="btn btn-secondary" onClick={() => navigate("/modals")}>
          Shop Now
        </button>
      </section>

    </div>
  );
}

export default AboutPage;
