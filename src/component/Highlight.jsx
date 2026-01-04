import React from "react";

const highlights = [
    {
        title: "⚡ Fast Hiring",
        description: "Find and hire skilled freelancers in just a few clicks.",
    },
    {
        title: "🏆 Trusted Platform",
        description: "Verified freelancers and secure payments for peace of mind.",
    },
    {
        title: "💼 Wide Job Categories",
        description: "Access a variety of job categories to match your needs.",
    },
    {
        title: "📞 24/7 Support",
        description: "Get assistance anytime from our dedicated support team.",
    },
];

const Highlights = () => {
    return (
        <section data-aos="fade-up" className=" mt-16 bg-[#11224E] max-w-7xl mx-auto px-4">
            <div className="">
                {/* Section Title */}
                <h2 data-aos="fade-up" className="text-3xl md:text-3xl font-bold text-center text-white mb-2">
                    Highlights
                </h2>
                <p data-aos="fade-up" className="text-center text-gray-300 mb-6">Our highlights showcase the key strengths that set our platform apart. 
                    Experience reliability, <br /> performance, and user-focused  features in one place.</p>

                {/* Highlights Grid */}
                <div data-aos="fade-up" className="grid md:grid-cols-4 gap-8 text-center">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
                        >
                            {/* Emoji / Icon */}
                            <div className="text-5xl mb-4">{highlight.title.split(" ")[0]}</div>

                            {/* Highlight Title */}
                            <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700">{highlight.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
