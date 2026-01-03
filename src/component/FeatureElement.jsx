import React from "react";

const features = [
    {
        title: "Secure Payments",
        description: "All transactions are safe and protected with real-time verification.",
        img: "https://img.icons8.com/emoji/48/000000/credit-card-emoji.png",
    },
    {
        title: "Verified Freelancers",
        description: "Hire trusted and skilled freelancers for your projects.",
        img: "https://img.icons8.com/emoji/48/000000/check-mark-emoji.png",
    },
    {
        title: "Easy Task Management",
        description: "Track, manage, and complete jobs efficiently from dashboard.",
        img: "https://img.icons8.com/emoji/48/000000/hammer-emoji.png",
    },
];

const FeatureElement = () => {
    return (
        <section data-aos="fade-up" className="my-16 max-w-7xl mx-auto px-4  ">
            <h2 data-aos="fade-up" className="text-center text-3xl font-bold text-[#8C00FF]  mb-2">🚀 Core Feature</h2>
            <p data-aos="fade-up" className="text-center text-gray-300  mb-4 ">
                Explore the main features of our platform that make hiring and <br /> managing freelancers fast,
                secure, and reliable.  Designed <br /> for  efficiency and ease of use for every user.
            </p>

            <div data-aos="fade-up" className=" grid md:grid-cols-3 gap-8 text-center">
                {features.map((feature, index) => (
                    <div data-aos="fade-up"
                        key={index}
                        className="px-4 py-2 bg-[#11224E] text-gray-200 border border-green-300 rounded-lg shadow-lg transition transform hover:-translate-y-2
                      "
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="mx-auto mb-4 w-12 h-12"
                        />
                        <h3 className="text-xl font-semibold mb-2 ">{feature.title}</h3>
                        <p className="">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureElement;
