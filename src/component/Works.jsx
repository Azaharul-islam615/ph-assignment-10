import React from "react";

// Steps data
const steps = [
    {
        title: "📝 Post a Job",
        description: "Create a job post with clear requirements so freelancers can apply.",
    },
    {
        title: "🔍 Hire Freelancer",
        description: "Review applications, choose the best freelancer, and start the project.",
    },
    {
        title: "✅ Track & Complete",
        description: "Manage tasks, monitor progress, and complete the job efficiently.",
    },
];

const HowItWorks = () => {
    return (
        <section data-aos="fade-up" className=" ">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 data-aos="fade-up" className="text-3xl md:text-3xl font-bold text-center text-[#8C00FF] mb-2">
                    How It Works
                </h2>
                <p data-aos="fade-up" className="text-center text-gray-300 mb-6">Our platform follows a simple and user-friendly process.
                    Post a task, connect <br /> with freelancers, and get your work done smoothly.</p>

                {/* Steps Grid */}
                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 p-4 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center"
                        >
                            {/* Emoji / Icon */}
                            <div className="text-5xl mb-4">{step.title.split(" ")[0]}</div>

                            {/* Step Title */}
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
