import axios from "axios";
import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const AllJobs = () => {
    const [alljobs, setAllJobs] = useState([]);
    const { toggle } = use(AuthContext)

    useEffect(() => {
        axios.get('https://frelacing.vercel.app/jobs')
            .then(res => {
                setAllJobs(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div data-aos="fade-up" className=" min-h-screen py-16 text-white">
            <title>Freelance MarketPlac-alljobs</title>
            <div data-aos="fade-up" className="max-w-7xl mx-auto px-6">
                <h2 className={`text-3xl md:text-4xl ${toggle ? "text-black" : "text-white"} font-bold text-center mb-6`}>
                    Explore <span className='text-[#8C00FF]'>All Jobs</span>
                </h2>
                <p className="text-center mb-4 text-gray-400">
                    Discover countless job opportunities posted by trusted clients worldwide. <br />
                    Browse, apply, and start working on the tasks that match your <br />
                    skills — all in one reliable platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {alljobs.map((job) => (
                        <div
                            key={job._id}
                            className="bg-[#11224E] rounded-lg shadow-lg flex flex-col justify-between hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                        >
                            <img
                                src={job.coverImage}
                                alt={job.title}
                                className="w-full h-44 object-cover"
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
        </div>
    );
};

export default AllJobs;
