import { useNavigate } from "react-router";

const LatestJobs = () => {
    const navigate=useNavigate()
    const jobs = [
        {
            title: "React Frontend Developer Needed",
            category: "Web Development",
            deadline: "Nov 30, 2025",
            price: "$150"
        },
        {
            title: "Logo Design for Tech Brand",
            category: "Graphics Design",
            deadline: "Nov 22, 2025",
            price: "$50"
        },
        {
            title: "SEO Specialist for Website",
            category: "Digital Marketing",
            deadline: "Dec 10, 2025",
            price: "$100"
        },
        {
            title: "Mobile App UI Prototype",
            category: "UI/UX Design",
            deadline: "Nov 19, 2025",
            price: "$80"
        },
        {
            title: "Data Entry Assistant Needed",
            category: "Admin Support",
            deadline: "Nov 15, 2025",
            price: "$40"
        },
        {
            title: "Social Media Video Editing",
            category: "Video Editing",
            deadline: "Dec 01, 2025",
            price: "$120"
        }
    ];
    const handlebtn=()=>{
        navigate('/categories')
    }

    return (
        <div className="max-w-7xl mx-auto my-10 px-4  text-white py-12 rounded-lg">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-center">
                Latest 6 <span className='text-[#8C00FF]'> Jobs</span> 
            </h2>
            <p data-aos="fade-up" className="text-center text-gray-400 mb-6">
                Discover recent job opportunities across web development,<br /> design,marketing, and more.  Stay updated <br /> and apply to trusted listings.
            </p>

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job, i) => (
                    <div data-aos="fade-up"
                        key={i}
                        className="bg-[#1B2A4A] border border-[#2F3F63] rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                                {job.category}
                            </span>

                            <h3 className="text-xl font-semibold mt-4 mb-3 leading-snug">
                                {job.title}
                            </h3>

                            <p className="text-sm text-gray-300 mb-1">
                                 Deadline: {job.deadline}
                            </p>
                            <p className="text-lg font-bold text-green-400">
                                 {job.price}
                            </p>
                        </div>

                        <button
                        onClick={handlebtn}
                            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-lg font-medium shadow-md transition-all duration-300 w-full"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );

};

export default LatestJobs;
