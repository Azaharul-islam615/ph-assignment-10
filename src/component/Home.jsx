import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { FaRegMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router";
import LatestJobs from "./Latestjobs";
import TopCategories from "./Topcategories";
import AboutPlatform from "./Aboutplatform";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img1 from "../assets/windows-MYomVPpR5FU-unsplash.jpg";
import img2 from "../assets/brandy-kennedy-SO6RFdA1RZw-unsplash.jpg";
import img3 from "../assets/windows-241bwQl2uWE-unsplash.jpg";
import img4 from "../assets/faizur-rehman-pHPzdEHN6Os-unsplash.jpg";
import FeatureElement from "./FeatureElement";
import WhyChoose from "./WhyChoose";
import Works from "./Works";
import Highlights from "./Highlight";
import FAQSection from "./Faq";
import BlogSection from "./BlogSection";

const Home = () => {
    const navigate = useNavigate();
    
    const handlebtn1 = () => navigate("/allapps");
    const handlebtn2 = () => navigate("/addjob");

    return (
        <div >
           
            
          
            <div data-aos="fade-up" className="relative h-[70vh]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={1200}
                    pagination={{ clickable: true }}
                    className="rounded-md"
                >
                    {[img1, img2, img3, img4].map((img, i) => (
                        <SwiperSlide key={i}>
                         
                            <motion.img
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }} 
                                className="h-[530px] w-full hover:scale-110 object-cover brightness-[0.45]"
                                src={img}
                                alt="banner"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

               
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10"
                >
                    <h2  className="text-3xl md:text-5xl mt-24 text-white font-bold drop-shadow-lg">
                        Reliable Freelance 
                        <span data-aos="fade-up" className="text-[#0046FF] ml-2">MarketPlace</span>
                    </h2>
                    <p  className="mt-3 text-lg md:text-xl text-gray-400 drop-shadow-lg">
                        Connect with trusted professionals worldwide
                    </p>
                    <div className="mt-6 flex gap-4 justify-center">
                        <button data-aos="fade-up"
                            onClick={handlebtn1}
                            className="bg-blue-500 hover:scale-110 transition duration-500 hover:bg-blue-600  text-white px-5 py-2 rounded-lg shadow-lg"
                        >
                            Explore Jobs
                        </button>
                        <button data-aos="fade-up"
                            onClick={handlebtn2}
                            className="bg-green-500 hover:scale-110 hover:bg-green-600 transition duration-500 text-white px-5 py-2 rounded-lg shadow-lg"
                        >
                            Create a Job
                        </button>
                    </div>
                </motion.div>
            </div>

            
            <LatestJobs />
            <TopCategories />
            <AboutPlatform />
           <FeatureElement></FeatureElement>
           <Works></Works>
           <Highlights></Highlights>
           <FAQSection></FAQSection>
           <BlogSection></BlogSection>
           <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;
