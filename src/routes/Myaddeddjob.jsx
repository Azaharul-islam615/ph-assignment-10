import React from "react";


const MyAddedJobs = () => {
    // Static data - only jobs added by logged-in user
    const jobs = [
        {
            id: 1,
            title: "Frontend Development with React",
            category: "Web Development",
            date: "05 Nov 2025",
            image: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600", 
        },
        {
            id: 2,
            title: "UI/UX Design for Mobile App",
            category: "Design",
            date: "10 Nov 2025",
            image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            id: 3,
            title: "Create Landing Page",
            category: "Web Development",
            date: "12 Nov 2025",
            image: "https://images.unsplash.com/photo-1610473068745-cf5589c24f77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWVsYW5jaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0D1B3E] p-6 font-sans text-white">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">
                 My Added Jobs
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-[#10224D] rounded-2xl shadow-lg flex flex-col overflow-hidden"
                    >
                        {/* Image */}
                        <img
                            src={job.image}
                            alt={job.title}
                            className="w-full h-40 object-cover rounded-2xl "
                        />

                        {/* Job Info */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {job.title}
                                </h3>
                                <p className="text-gray-300 mb-1">
                                    <span className="font-semibold">Category:</span> {job.category}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    <span className="font-semibold">Posted on:</span> {job.date}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex gap-3">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition">
                                    Update
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition">
                                     Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAddedJobs;
