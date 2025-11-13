import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const LatestJobs = () => {
    const [alljobs, setAllJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => {
                setAllJobs(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);
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
    
    return (
        <div className="max-w-7xl mx-auto my-10 px-4  text-white py-12 rounded-lg">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-[#8C00FF] text-center">
                Latest 6 <span className='text-[#8C00FF]'> Jobs</span> 
            </h2>
            <p data-aos="fade-up" className="text-center text-gray-400 mb-6">
                Discover recent job opportunities across web development,<br /> design,marketing, and more.  Stay updated <br /> and apply to trusted listings.
            </p>

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alljobs.map((job) => (
                    <div
                        key={job._id}
                        className="bg-[#11224E] rounded-lg shadow-lg flex flex-col justify-between hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                    >
                        <img
                            src={job.coverImage}
                            alt={job.title}
                            className="w-full h-44 object-cover "
                        />

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p className="text-sm text-[#b7bedf] mt-1">
                                Category: {job.category}
                            </p>
                            <p className="text-sm text-[#9fb2d5] mt-1">
                                Posted By: {job.postedBy}
                            </p>

                            <p className="text-sm text-gray-300 mt-2 line-clamp-2 flex-grow">
                                {job.summary}
                            </p>

                            <Link to={`/categories/${job._id}`} className="mt-4">
                                <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-md transition font-semibold tracking-wide">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

};

export default LatestJobs;
