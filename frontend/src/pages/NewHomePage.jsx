import { PartyPopper } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewHomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200">

      {/* HERO SECTION */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10 px-6">

          {/* Carousel */}
          <div className="w-full lg:w-1/2">
            <div className="carousel w-full rounded-lg overflow-hidden shadow-lg">
              {[
                "https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-2.jpg",
                "https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-4_1.jpg",
                "https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-5_1.jpg",
                "https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-7_1.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  id={`slide${index + 1}`}
                  className="carousel-item relative w-full"
                >
                  <img src={img} className="w-full object-cover h-[250px] sm:h-[350px] md:h-[500px]" />
                  <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
                    <a
                      href={`#slide${index === 0 ? 4 : index}`}
                      className="btn btn-circle btn-sm sm:btn-md"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${index === 3 ? 1 : index + 2}`}
                      className="btn btn-circle btn-sm sm:btn-md"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif mb-4">Block Store</h1>
            <p className="text-lg sm:text-xl leading-relaxed font-serif">
              Designed to captivate the eyes and calm the soul, our wallpapers blend beauty
              and tranquility in every space.
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="bg-base-100 py-12 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-6">
          Dive into a world where walls tell a story
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg font-light leading-relaxed">
          Elevate your space with our striking 3D wall designs that craft depth and texture into
          your interiors. Designed to make a statement, these coverings blend innovative patterns
          with rich visual appeal.
        </p>
      </section>

      {/* YOUTUBE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-serif mb-6">Channel Description</h2>
          <p className="text-base sm:text-lg leading-relaxed font-light mb-4">
            At Block'Store, we specialize in bringing spaces to life with stunning 3D wallpapers
            and immersive design solutions.
          </p>
          <ul className="space-y-3 text-base font-light text-left">
            <li>✨ Creative showcases of our latest 3D wallpaper collections.</li>
            <li>💡 Inspiration & ideas for transforming your walls and interiors.</li>
            <li>🛠️ Expert tips on choosing and installing 3D wallpapers.</li>
          </ul>
        </div>

        <a
          href="https://www.youtube.com/watch?v=IOu3979uVvI"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src="https://www.giffywalls.in/cdn/shop/files/b149-old-rustic-brick-wall-wallpaper-murals.jpg?quality=90&v=1734074816&width=1326"
            alt="3D Wallpapers Thumbnail"
            className="w-full h-full object-cover"
          />
        </a>
      </section>

      {/* BRANDS / PARTNERS SCROLLER */}
      <section className="bg-base-100 py-12 px-6">
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-10">
          Our Collaborative Brands
        </h2>

        <div className="overflow-hidden">
          <div className="flex items-center gap-16 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPL6zaPPdjcnGqOZj5Qab4FiELbY46krvU0kmCcUSA8934W6xdJEXOjT50QambDFF7A&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_o0H6ONnSJq62xrI0pwinhp9lTJ5IYwflS9eASvjjTU0imvtnKKIfOYZW1PmwP5KWQ&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORJJSV9FLIP30-un4r8Pv5XvJu42pfr77qq0cGkmnPYgelYLraNdhj6zoiA_mWKD8-w&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejVG_afXIrZz1BAGGu4evNgPzbMCzyJgTechpiSAWcVeBX0CVSzVDne0yXqpgK71borQ&usqp=CAU",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiz635YYDewSGLeB4JMau1PTw0Wqvc5UWzKJrHKyTb53RonKFDiLx7O6NeMwtz85rx50&usqp=CAU",
            ].map((src, i) => (
              <img key={i} src={src} className="h-12 sm:h-16 object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="px-6 lg:px-20">
        <div className="hero bg-base-200 min-h-[70vh] rounded-xl">
          <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
            <img
              src="https://chrislema.co/wp-content/uploads/shutterstock_139007459-e1409947513979-900x409.jpg"
              className="max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif flex justify-center lg:justify-start items-center gap-2">
                Offer's going on <PartyPopper className="size-8 sm:size-10" />
              </h1>
              <p className="py-6 font-light text-base sm:text-lg">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
              </p>
              <button
                className="btn btn-primary w-full sm:w-auto"
                onClick={() => navigate('/modals')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-base-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">Customer Satisfaction</h2>
          <p className="text-base sm:text-lg mb-6">Trusted by thousands of happy customers worldwide.</p>
          <div className="flex justify-center gap-8 sm:gap-12">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">95%</div>
              <p>Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">85%</div>
              <p>Returning Customers</p>
            </div>
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">Sales Growth</h2>
          <p className="text-base sm:text-lg mb-6">Consistent increase in sales month over month.</p>
          <div className="flex justify-center gap-8 sm:gap-12">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">120%</div>
              <p>Sales Growth</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">5000+</div>
              <p>Units Sold</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewHomePage;
