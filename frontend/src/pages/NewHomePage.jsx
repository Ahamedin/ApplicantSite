import { Bolt, PartyPopper, Youtube } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function NewHomePage() {

  const navigate = useNavigate()

// useEffect(() => {
//   let timeoutId = null;
//   let hasNavigated = false;

//   const handleScroll = () => {
//     const scrollPosition = window.innerHeight + window.scrollY;
//     const pageHeight = document.documentElement.scrollHeight;

//     if (!hasNavigated && scrollPosition >= pageHeight - 50) {
//       hasNavigated = true;
//       timeoutId = setTimeout(() => {
//         navigate("/modals");
//         window.scrollTo(0, 0); // scroll to top after navigation
//       }, 600); // 2-second delay
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//     clearTimeout(timeoutId);
//   };
// }, [navigate]);



  return (
    <div className='min-h-screen bg-base-200'>


<section>
    <div className="flex relative py-12 bg--900 sm:py-8 lg:py-10 xl:pt-12 xl:pb-20">
        

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                

                <div >
                <h1 className="mt-24 text-4xl font-serif text-black-900 sm:text-4xl xl:text-6xl xl:leading-tight ">Block Store</h1>
                <p className="mt-8 text-2xl text-left font-serif leading-7 text-black-400 lg:max-w-full xl:pr-0 lg:pr-16">Designed to captivate the eyes and calm the soul, our wallpapers blend beauty and tranquility in every space.</p>
                </div>
            </div>
        </div>
<div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-2.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-4_1.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-5_1.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://cdn.ddecor.com/media/wysiwyg/l2-wallpaper-7_1.jpg"
                className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
        </div>

    </div>
</section>


      <section className="bg-base-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
          <h1 className='text-3xl text-center font-serif ml-28 max-w-4xl px-20 py-10'>Dive into a world where walls tell a story</h1>
          <p className="mt-4 text-xl font-light leading-relaxed text-center">
              Elevate your space with our striking 3D wall designs that craft depth and texture into your interiors. Designed to make a statement, these coverings blend innovative patterns with rich visual appeal, adding a new dimension to homes, offices, and commercial environments alike.
          </p>
      </div>
      </section>


      <section className="max-w-6xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-12">

        <div className="lg:w-1/2">
          <h2 className="text-3xl font-serif mb-6">Channel Description</h2>
          <p className="mb-4 text-lg leading-relaxed font-light">
           At Block'Store, we specialize in bringing spaces to life with stunning 3D wallpapers and immersive design solutions. Our mission is to transform ordinary walls into captivating, dimensional works of art—perfect for homes, offices, showrooms, and virtual environments.
          </p>
          <ul className="space-y-4 text-base text-left font-light">
            <li><strong>1.Creative Showcases of our latest 3D wallpaper collections.</strong></li>
            <li><strong>2.Inspiration & Ideas for transforming your walls and interiors.</strong></li>
            <li><strong>3.Expert Tips on choosing and installing 3D wallpapers for business and home.</strong></li>
          </ul>
        </div>

      
        <a
          href="https://www.youtube.com/watch?v=IOu3979uVvI"
          target="_blank"
          rel="noopener noreferrer"
          className="block lg:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://www.giffywalls.in/cdn/shop/files/b149-old-rustic-brick-wall-wallpaper-murals.jpg?quality=90&v=1734074816&width=1326"
            alt="3D Wallpapers YouTube Thumbnail"
            className="w-full h-full object-cover"
          />
        </a>

      </section>

      <section className="bg-base-100 py-8">
      <h2 className="text-2xl font-serif text-center mb-4 py-14">Our Collaborative Brands</h2>
  
      <div className="overflow-hidden whitespace-nowrap h-44">
        <div className="inline-flex animate-marquee gap-40">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDPL6zaPPdjcnGqOZj5Qab4FiELbY46krvU0kmCcUSA8934W6xdJEXOjT50QambDFF7A&usqp=CAU" alt="Brand 1" className="h-20 mx-4" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_o0H6ONnSJq62xrI0pwinhp9lTJ5IYwflS9eASvjjTU0imvtnKKIfOYZW1PmwP5KWQ&usqp=CAU" alt="Brand 2" className="h-20 mx-4" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORJJSV9FLIP30-un4r8Pv5XvJu42pfr77qq0cGkmnPYgelYLraNdhj6zoiA_mWKD8-w&usqp=CAU" alt="Brand 3" className="h-20 mx-4" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejVG_afXIrZz1BAGGu4evNgPzbMCzyJgTechpiSAWcVeBX0CVSzVDne0yXqpgK71borQ&usqp=CAU" alt="Brand 4" className="h-20 mx-4" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejVG_afXIrZz1BAGGu4evNgPzbMCzyJgTechpiSAWcVeBX0CVSzVDne0yXqpgK71borQ&usqp=CAU" alt="Brand 1" className="h-20 mx-4" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiz635YYDewSGLeB4JMau1PTw0Wqvc5UWzKJrHKyTb53RonKFDiLx7O6NeMwtz85rx50&usqp=CAU" alt="Brand 2" className="h-20 mx-4" />
        </div>
      </div>
      </section>

      <section className='px-20'>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://chrislema.co/wp-content/uploads/shutterstock_139007459-e1409947513979-900x409.jpg"
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-serif flex gap-3">Offer's going on<PartyPopper className='size-12'/></h1>
              <p className="py-6 font-light">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary " onClick={() => navigate("/modals")}>Get Started</button>
            </div>
          </div>
        </div>
      </section>




  <section className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-14 ">



  <div className="bg-base-100 p-8 rounded-lg shadow-lg text-center">
    <h2 className="text-3xl font-serif mb-4">Customer Satisfaction</h2>
    <p className="mb-6 text-lg ">Trusted by thousands of happy customers worldwide.</p>
    <div className="flex justify-center gap-8">
      <div>
        <div className="text-5xl font-bold text-primary">95%</div>
        <p>Happy Customers</p>
      </div>
      <div>
        <div className="text-5xl font-bold text-primary">85%</div>
        <p>Returning Customers</p>
      </div>
    </div>
  </div>



  <div className="bg-base-100 p-8 rounded-lg shadow-lg text-center">
    <h2 className="text-3xl font-serif mb-4">Sales Growth</h2>
    <p className="mb-6 text-lg">Consistent increase in sales month over month.</p>
    <div className="flex justify-center gap-8">
      <div>
        <div className="text-5xl font-bold text-primary">120%</div>
        <p>Sales Growth</p>
      </div>
      <div>
        <div className="text-5xl font-bold text-primary">5000+</div>
        <p>Units Sold</p>
      </div>
    </div>
  </div>
</section>

  </div>
)}

export default NewHomePage
