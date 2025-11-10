import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img1 from "../assets/windows-MYomVPpR5FU-unsplash.jpg";
import img2 from "../assets/brandy-kennedy-SO6RFdA1RZw-unsplash.jpg";
import img3 from "../assets/windows-241bwQl2uWE-unsplash.jpg";
import img4 from "../assets/faizur-rehman-pHPzdEHN6Os-unsplash.jpg"
import LatestJobs from "./Latestjobs";
import TopCategories from "./Topcategories";
import AboutPlatform from "./Aboutplatform";

const Home = () => {
    return (
        <div className="bg-[#0D1B3E]">
            <div className="relative">


                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    speed={1200}
                    pagination={{ clickable: true }}
                    className="rounded-md"
                >
                    {[img1, img2, img3, img4].map((img, i) => (
                        <SwiperSlide key={i}>
                            <img
                                className="h-[530px] w-full object-cover brightness-[0.45]"
                                src={img}
                                alt="banner"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                        Reliable Freelance <span className='text-[#0046FF]'>MarketPlace</span>
                    </h2>
                    <p className="mt-3 text-lg md:text-xl text-[#CBCBCB] drop-shadow-lg">
                        Connect with trusted professionals worldwide
                    </p>
                    <div className="mt-6 flex gap-4 justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 duration-300 text-white px-5 py-2 rounded-lg shadow-lg">
                            Explore Jobs
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 duration-300 text-white px-5 py-2 rounded-lg shadow-lg">
                            Create a Job
                        </button>
                    </div>
                </div>

            </div>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <AboutPlatform></AboutPlatform>
        </div>
    );
};

export default Home;
