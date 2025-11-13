import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Authprovider";
import axios from "axios";
import img1 from "../assets/App-Error.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const MyAddedJobs = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [alljobs, setAllJobs] = useState([]);
    const [addjob, setAddJob] = useState([]);


    useEffect(() => {
        axios
            .get("https://frelacing.vercel.app/jobs")
            .then((res) => setAllJobs(res.data))
            .catch((err) => {
                toast.error("Error fetching data!");
                console.error("Error fetching data:", err);
            });
    }, []);


    useEffect(() => {
        if (user?.email && alljobs.length > 0) {
            const result = alljobs.filter((job) => job.userEmail === user.email);
            setAddJob(result);
        }
    }, [user, alljobs]);


    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };


    const handleDelete = (id) => {
        axios
            .delete(`https://frelacing.vercel.app/jobs/${id}`)
            .then(() => {

                toast(<div>Job deleted successfully!</div>)
                setAddJob((prev) => prev.filter((job) => job._id !== id));
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to delete the job!");
            });
    };

    return (
        <div className="min-h-screen p-6 font-sans text-white bg-[#0D1B3E]">
            <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">
                My Added Jobs
            </h2>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addjob.length > 0 ? (
                    addjob.map((job) => (
                        <div
                            key={job._id}
                            className="bg-[#10224D] rounded-2xl shadow-lg flex flex-col overflow-hidden"
                        >
                            <img
                                src={
                                    job.coverImage ||
                                    job.imageUrl ||
                                    job.image ||
                                    "https://via.placeholder.com/400x200?text=No+Image"
                                }
                                alt={job.title}
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />

                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-white">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-300 mb-1">
                                        <span className="font-semibold">Category:</span>{" "}
                                        {job.category}
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        <span className="font-semibold">Posted on:</span>{" "}
                                        {job.postedAt
                                            ? new Date(job.postedAt).toLocaleString()
                                            : "N/A"}
                                    </p>
                                </div>

                                <div className="mt-4 flex gap-3">
                                    <button
                                        onClick={() => handleUpdate(job._id)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center mb-8">
                        <div className="lg:w-[1200px] mt-4 mx-auto">
                            <img
                                className="mx-auto w-[150px] lg:w-[220px] mb-2"
                                src={img1}
                                alt="No jobs found"
                            />
                            <h1 className="text-center font-semibold text-[20px] lg:text-[40px]">
                                OOPS!! JOB NOT FOUND
                            </h1>
                            <p className="font-[400] text-[14px] lg:text-[20px] text-[#627382] mb-2">
                                The job you are looking for was not found. Please add or try
                                another one.
                            </p>
                            <button
                                onClick={() => window.history.back()}
                                className="btn btn-primary text-[16px]"
                            >
                                Go Back!
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAddedJobs;
