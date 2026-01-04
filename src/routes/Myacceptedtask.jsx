import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/Authprovider";
import axios from "axios";

const MyAcceptedTask = () => {
    const { removeJob, user } = useContext(AuthContext);
    const [jobs, setAllJobs] = useState([]);

    console.log(jobs);

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`https://frelacing.vercel.app/userdetails/${user.email}`)
            .then(res => {
                setAllJobs(res.data); // backend sends array directly
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, [user?.email]);

    if (!jobs || jobs.length === 0) {
        return <p className="text-center mt-10 text-white">No accepted jobs yet</p>;
    }

    return (
        <div className="min-h-screen p-6 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">My Accepted Jobs</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {jobs.map((job) => (
                    <div
                        key={job._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] duration-300"
                    >
                        <img
                            className="w-full rounded-t-lg h-38 object-cover hover:scale-125 transition duration-300"
                            src={job.coverImage}
                            alt={job.title}
                        />
                        <h3 className="text-xl text-gray-800 font-bold px-3 mt-4">{job.title}</h3>
                        <p className="px-3 text-sm text-gray-700">Category: {job.category}</p>
                        <p className="px-3 text-sm text-gray-700">Email: {job.userEmail}</p>
                        <p className="text-sm px-3 text-gray-600">Posted By: {job.postedBy}</p>
                        <p className="text-sm px-3 text-gray-600 mt-1 line-clamp-2 flex-grow">
                            {job.summary}
                        </p>

                        <div className="flex gap-3 px-4 pb-4 mt-4">
                            <button
                                onClick={() => removeJob(job._id)}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                                ✅ Done
                            </button>
                            <button
                                onClick={() => removeJob(job._id)}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                ❌ Cancel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAcceptedTask;
