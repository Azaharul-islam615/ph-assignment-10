
import { use } from "react";

import { AuthContext } from "../Context/Authprovider";

const MyAcceptedTask = () => {
    const { acceptedJobs, removeJob,toggle } = use(AuthContext)

    if (acceptedJobs.length === 0) {
        return <p className="text-center mt-10 text-white">No accepted jobs yet</p>;
    }

    return (
        <div className="min-h-screen p-6  text-white">
            <h2 className={`text-3xl ${toggle?'text-black':"text-white"} font-bold text-center mb-8`}>My Accepted Jobs</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {acceptedJobs.map((job) => (
                    <div key={job._id} className="bg-[#10224D] p-5 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p>Category: {job.category}</p>
                        <p>Email: {job.userEmail}</p>

                        <div className="flex gap-3 mt-4">
                            <button
                                onClick={() => removeJob(job._id)}
                                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
                            >
                                ✅ Done
                            </button>
                            <button
                                onClick={() => removeJob(job._id)}
                                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
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
