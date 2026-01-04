import { FaMoneyBillWave, FaClock, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";

const Categories = () => {
    const { user, addJob } = useContext(AuthContext);
    const { id } = useParams();
    const [job, setJob] = useState(null);

    // fetch job details
    useEffect(() => {
        axios.get(`https://frelacing.vercel.app/jobs/${id}`)
            .then(res => setJob(res.data))
            .catch(err => console.error('Error fetching job details:', err));
    }, [id]);

    if (!job) {
        return (
            <div className="w-full flex justify-center mt-20">
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }

    // handle Accept Job
    const handles = () => {
        addJob(job); // context update

        // POST job + uploader info to DB
        axios.post("https://frelacing.vercel.app/saveJobDetails", {
            job,
            uploader: user
        })
            .then(res => {
                toast.success("Job details saved successfully!");
            })
            .catch(err => {
                toast.error("Failed to save job details!");
                console.error(err);
            });
    }

    return (
        <div data-aos="fade-up" className="bg-[#0D1B3E] min-h-screen font-sans text-white">
            <title>Freelance Marketplace - Categories Details</title>

            <img
                data-aos="fade-up"
                src={job.coverImage}
                alt="Job"
                className="w-full h-[350px] object-cover rounded-b-2xl"
            />

            <div data-aos="fade-up" className="max-w-6xl mx-auto p-6 md:p-10">
                <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
                    Professional {job.title} Needed
                </h1>
                <p data-aos="fade-up" className="mt-2 text-gray-300 text-lg">
                    {job.summary}
                </p>

                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaMoneyBillWave size={28} className="text-green-500" />
                        <div>
                            <p className="font-semibold">Salary</p>
                            <span className="text-gray-300">{job.price} $</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaClock size={28} className="text-orange-400" />
                        <div>
                            <p className="font-semibold">Deadline</p>
                            <span className="text-gray-300">30 Nov 2025</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaBriefcase size={28} className="text-blue-400" />
                        <div>
                            <p className="font-semibold">Job Category</p>
                            <span className="text-gray-300">{job.category}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-10 bg-[#10224D] p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                    <p className="text-gray-300 leading-7">{job.description}</p>

                    <div className="mt-6 flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-red-500" />
                        Remote — Worldwide
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        {user?.email !== job.userEmail && (
                            <button
                                onClick={handles}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
                            >
                                Accept Job
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
