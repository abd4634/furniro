import backgroundImage from "../assets/img/Mask Group.png"; // Import your image
import Dining from "../assets/img/image 76.png";
import Living from "../assets/img/image 99.png"
import BedRoom from "../assets/img/Living-Room.png"
import ProductList from "./home-product";
import BedRoomImg from "../assets/img/Bed-Room.png"
import RectangleImg from "../assets/img/Rectangle25.png"


const HeroSection = () => {
  return (
    <>
    <section
      className="text-gray-600 body-font"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Set the background image
        backgroundSize: 'cover',  // Make the image cover the entire section
        backgroundPosition: 'center center',  // Center the image
        backgroundRepeat: 'no-repeat',  // Prevent image repetition
        height: '100vh',  // Set the height of the section, adjust if needed
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left side with background image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/* You can leave this empty if you're using the full section background */}
        </div>

        {/* Right side */}
        <div 
            className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center py-6 px-4"
            style={{ backgroundColor: "#FFF3E3", borderRadius: "10px", maxWidth: "500px", margin: "0 auto" }}
        >
            <h1 className="font-semibold text-[16px] tracking-[3px] mb-4 text-black">
                New Arrival<br className="hidden lg:inline-block" />
                <br  />
                <span className="font-bold text-[32px] lg:text-[42px] leading-[45px] lg:leading-[65px] text-[#b88e2f]">
                Discover Our New Collection
                </span>
            </h1>

            <p className="font-medium text-[16px] md:text-[16px] leading-[24px] mb-8 max-w-md mx-auto">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>

            <div className="flex justify-center">
                <button className="w-full md:w-[150px] h-[60px] md:h-[50px] bg-[#b88e27] text-white py-2 px-6 focus:outline-none hover:bg-[#a77d1f] text-lg">
                Buy Now
                </button>
            </div>
            </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          {/* Centered Heading */}
          <h1 className="font-bold text-black text-2xl md:text-4xl leading-[48px] mb-6">Browse The Range</h1>
          <p className="font-normal text-lg md:text-xl leading-[30px] text-center mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit iste aspernatur quam?
          </p>
        </div>

        <div className="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 sm:w-full md:w-1/3 mb-6">
            <div className="rounded-lg h-[300px] sm:h-[250px] md:h-[480px] w-full overflow-hidden rounded-[5px]">
              <img alt="content" className="object-cover object-center h-full w-full" src={Dining} />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Dining</h2>
          </div>

          <div className="p-4 sm:w-full md:w-1/3 mb-6">
            <div className="rounded-lg h-[300px] sm:h-[250px] md:h-[480px] w-full overflow-hidden rounded-[5px]">
              <img alt="content" className="object-cover object-center h-full w-full" src={Living} />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Living</h2>
          </div>

          <div className="p-4 sm:w-full md:w-1/3 mb-6">
            <div className="rounded-lg h-[300px] sm:h-[250px] md:h-[480px] w-full overflow-hidden rounded-[5px]">
              <img alt="content" className="object-cover object-center h-full w-full" src={BedRoom} />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">Bedroom</h2>
          </div>
        </div>
      </div>
    </section>
    <ProductList/>
    <section className="h-screen py-16 px-8 bg-[#FCF8F3] carosal-section ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full">
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#a77d1f] text-white py-3 px-6 font-medium hover:bg-[#925f18] transition-all">
            Explore More
          </button>
        </div>

        {/* Center Content */}
        <div className="relative mx-auto">
          <div className="w-2/3 mx-auto overflow-hidden shadow-lg relative">
            <img
              src={BedRoomImg}
              alt="Beautiful Room"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-lg">
              <p className="text-sm text-gray-500">01 — Bed Room</p>
              <h3 className="text-lg font-bold text-gray-800">Inner Peace</h3>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start gap-4 ">
          {/* Carousel */}
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-72">
              {/* Item 1 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={RectangleImg}
                  className="absolute block w-full h-full object-cover"
                  alt="Room 1"
                />
              </div>
              {/* Item 2 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={RectangleImg}
                  className="absolute block w-full h-full object-cover"
                  alt="Room 2"
                />
              </div>
              {/* Item 3 */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src={RectangleImg}
                  className="absolute block w-full h-full object-cover"
                  alt="Room 3"
                />
              </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 space-x-3">
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-gray-300"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>

            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default HeroSection;
