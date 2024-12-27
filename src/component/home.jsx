import backgroundImage from "../assets/img/Mask Group.png"; // Import your image
import Dining from "../assets/img/image 76.png";
import Living from "../assets/img/image 99.png"
import BedRoom from "../assets/img/Living-Room.png"

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

    </>
  );
};

export default HeroSection;
