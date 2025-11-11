const AboutPlatform = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-14 bg-[#0D1A38] text-white rounded-2xl mt-20 shadow-lg">
            <div className="text-center">
                <h2 className="text-3xl md:text-3xl font-bold mb-4">
                    Welcome to Smart Deals Marketplace ✨
                </h2>
                <p className=" max-w-3xl text-gray-400  mx-auto  leading-relaxed">
                    A secure and reliable freelance platform where sellers list their products or services
                    and buyers can place offers with confidence. We help connect skilled professionals
                    and real buyers with a smooth and transparent workflow.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-center mt-10">
                <div>
                    <h3 className="text-3xl font-bold text-green-400">10K+</h3>
                    <p className="text-gray-400">Trusted Users</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-blue-400">5000+</h3>
                    <p className="text-gray-400">Jobs Listed</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-purple-400">98%</h3>
                    <p className="text-gray-400">Positive Ratings</p>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition shadow-md">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AboutPlatform;
