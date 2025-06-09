import { Navigate, useNavigate } from "react-router-dom";

function AboutPage() {

    const navigate = useNavigate()

    
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <section>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-x-20">
   
    <div className="text-left">
      <h1 className="text-5xl font-serif ml-12">About Wall-Wallpapers</h1>
      <p className="py-6 text-lg max-w-xl text-center font-light">
        Transform your space with our high-quality 3D wallpapers — bringing depth, style, and personality to your walls.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus repellendus nobis natus provident! Est ea dolore voluptatibus, sint iure, nihil molestiae quaerat delectus veniam officia odio, eveniet nisi dolorem!
      </p>
    </div>
    
    <img src="https://www.giffywalls.in/cdn/shop/files/A104_3d_fantastic_illustration_unknown_planet_on_a_dark_night_sky_49_8ab845d8-2043-467c-8215-03c26bdea368.jpg?v=1734182762&width=400" className="max-w-sm rounded-lg shadow-2xl ml-36" />

  </div>
</div>
</section>


     
      <section className="py-12 px-6 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-4">Our Mission</h2>
          <p className="text-md leading-relaxed font-light px-10 py-10">
            At Wall 3D, we believe walls deserve more than just paint. We are passionate about offering premium 3D wallpapers
            that elevate interiors with texture and dimension. Whether it's a home, office, or retail space, we make sure
            every wallpaper turns heads and tells a story.
          </p>
        </div>
      </section>

    
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-10">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Stunning Realism</h3>
              <p className="font-light">Our wallpapers use high-definition 3D patterns that create a striking depth effect.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Easy Installation</h3>
              <p className="font-light">Designed for quick setup and removal without damaging your walls.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-serif mb-2">Custom Designs</h3>
              <p className="font-light">Choose from a wide range of designs or create your own personalized wallpaper.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-12 px-6 bg-primary text-primary-content text-center">
        <h2 className="text-2xl font-serif mb-4">Ready to Redefine Your Walls?</h2>
        <p className="mb-6 font-light">Explore our collection or contact us for a custom quote.</p>
        <button className="btn btn-secondary" onClick={() => navigate("/modals")}>Shop Now</button>
      </section>
    </div>
  );
}

export default AboutPage;