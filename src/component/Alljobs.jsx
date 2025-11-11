import { Link } from "react-router";

const AllJobs = () => {

    const jobs = [
        {
            id: "1",
            title: "React Frontend Development",
            category: "Web Development",
            postedBy: "John Doe",
            summary: "Build a modern UI dashboard using React and Tailwind.",
            image: "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVtb3RlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            id: "2",
            title: "Professional Logo Design",
            category: "Graphics Design",
            postedBy: "Emma Brown",
            summary: "Create a modern and stylish logo for a startup brand.",
            image: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            id: "3",
            title: "SEO Optimization for Website",
            category: "Digital Marketing",
            postedBy: "Michael Smith",
            summary: "Boost search ranking and improve traffic organically.",
            image: "https://images.unsplash.com/photo-1487537708572-3c850b5e856e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        },
        {
            id: "4",
            title: "Android App UI Redesign",
            category: "Mobile App",
            postedBy: "Sophia Wilson",
            summary: "Enhance UI experience based on latest UI principles.",
            image: "https://images.unsplash.com/photo-1610473068745-cf5589c24f77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWVsYW5jaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        },
        {
            id: "5",
            title: "Short Video Editing for Ads",
            category: "Video Editing",
            postedBy: "David Miller",
            summary: "Create captivating social media promo videos.",
            image: "https://i.ibb.co/8Yr0g4x/video-edit.jpg",
        },
        {
            id: "6",
            title: "Data Entry Specialist Needed",
            category: "Admin Support",
            postedBy: "Sarah Parker",
            summary: "Fast typing and data correction for e-commerce data.",
            image: "https://i.ibb.co/X2WRtFf/data-entry.jpg",
        },
    ];

    return (
        <div data-aos="fade-up" className="bg-[#0D1B3E] min-h-screen py-16 text-white">
            <title>Freelance MarketPlac-alljobs</title>
            <div data-aos="fade-up" className="max-w-7xl mx-auto px-6">
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-center mb-6">
                    Explore  <span className='text-[#8C00FF]'>All  Jobs</span>
                </h2>
                <p data-aos="fade-up" className="text-center mb-4 text-gray-400">Discover countless job opportunities posted by trusted clients worldwide. <br /> Browse, apply, and start working on the tasks that  match your <br /> skills — all in one reliable platform.</p>

                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobs.map((job) => (
                        <div data-aos="fade-up"
                            key={job.id}
                            className="bg-[#11224E] rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                        >
                            <img
                                src={job.image}
                                alt={job.title}
                                className="w-full h-44 object-cover"
                            />

                            <div className="p-5">
                                <h3 className="text-xl font-bold">{job.title}</h3>
                                <p className="text-sm text-[#b7bedf] mt-1">
                                    Category: {job.category}
                                </p>
                                <p className="text-sm text-[#9fb2d5] mt-1">
                                    Posted By: {job.postedBy}
                                </p>

                                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                                    {job.summary}
                                </p>

                                <Link data-aos="fade-up" to={`/allJobs/${job.id}`}>
                                    <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 mt-4 rounded-md transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllJobs;
