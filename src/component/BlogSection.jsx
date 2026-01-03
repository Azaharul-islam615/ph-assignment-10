import React from "react";

const BlogSection = () => {
    const blogs = [
        {
            title: "How to Hire the Right Freelancer",
            description:
                "Learn practical tips to find skilled freelancers and manage projects effectively.",
            date: "Jan 10, 2026",
            image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        },
        {
            title: "Top Skills in Demand for Freelancers",
            description:
                "Explore the most in-demand skills that clients are actively looking for.",
            date: "Jan 15, 2026",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
        {
            title: "Secure Payments in Freelance Marketplaces",
            description:
                "Understand how secure payment systems protect both clients and freelancers.",
            date: "Jan 20, 2026",
            image:
                "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        },
    ];

    return (
        <section className="mt-16  ">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#8C00FF] mb-2">
                    Latest Blogs
                </h2>
                <p className="text-center text-gray-300 mb-6">
                    Insights, tips, and updates from our freelance marketplace platform.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                            />

                            <div className="p-6">
                                <span className="text-sm text-gray-500">{blog.date}</span>
                                <h3 className="text-xl font-semibold mt-2 mb-3">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {blog.description}
                                </p>

                                <button className="text-[#8C00FF] font-semibold hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
