import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const LatestJobs = () => {
    const [alljobs, setAllJobs] = useState([]);

    useEffect(() => {
        axios.get('https://frelacing.vercel.app/sortedjob')
            .then(res => {
                console.log(res)
                setAllJobs(res.data);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div data-aos="fade-up" className="max-w-7xl bg-[#11224E] mx-auto mt-14 md:20 lg:mt-28  px-4  text-white py-12 rounded-b-lg">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-4 text-white text-center">
                Latest 8 <span className='text-[#8C00FF]'> Jobs</span>
            </h2>
            <p data-aos="fade-up" className="text-center text-gray-300 text-[16px] mb-6">
                Discover recent job opportunities across web development,<br /> design,marketing, and more.  Stay updated <br /> and apply to trusted listings.
            </p>

            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {alljobs.map((job) => (
                    <div
                        key={job._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                    >
                        <img
                            src={job.coverImage}
                            alt={job.title}
                            className="w-full h-38 object-cover rounded-t-lg hover:scale-125 transition duration-300"
                        />

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                            <p className="text-sm text-gray-800 mt-1">
                                Category: {job.category}
                            </p>
                            <p className="text-sm text-gray-800 mt-1">
                                salary: {job.price}$
                            </p>
                            <p  className="text-sm text-gray-600 mt-1">
                                Posted By: {job.postedBy}
                            </p>

                            <p  className="text-sm text-gray-600 mt-2 line-clamp-2 flex-grow">
                                {job.summary}
                            </p>

                            <Link  to={`/categories/${job._id}`} className="mt-4">
                                <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-lg transition font-semibold tracking-wide">
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
