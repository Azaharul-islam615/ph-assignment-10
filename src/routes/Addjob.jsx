import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";

const AddJob = () => {
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        price: "",
        title: "",
        postedBy: user?.displayName || "",
        category: "",
        summary: "",
        coverImage: "",
        userEmail: user?.email || "",
        postedAt: "",
    });

    useEffect(() => {
        const now = new Date().toISOString();
        setFormData((prev) => ({ ...prev, postedAt: now }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.category || !formData.summary || !formData.coverImage) {
            alert("Please fill in all required fields!");
            return;
        }

        axios
            .post("https://frelacing.vercel.app/addjob", formData)
            .then(() => {
                toast.success("Job added successfully!");
                setFormData({
                    price: "",
                    title: "",
                    postedBy: user?.displayName || "",
                    category: "",
                    summary: "",
                    coverImage: "",
                    userEmail: user?.email || "",
                    postedAt: new Date().toISOString(),
                });
            })
            .catch((err) => {
                toast.error("Something went wrong!");
                console.log(err);
            });
    };

    return (
        <div
            className="min-h-screen py-16 px-6 font-sans 
           "
        >
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center mb-8 mt-16">
                <h2 className="text-3xl font-bold text-indigo-200 flex justify-center items-center gap-3">
                    <FaPlusCircle className="text-indigo-400" /> Add New Job
                </h2>
                <p className="text-gray-300 font-medium mt-2">
                    Share a job opportunity for freelancers
                </p>
            </div>

            {/* Gradient Border Wrapper */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B]


 p-[2px] rounded-3xl bg-[#0A1445]
              
"
            >
                {/* Form */}
                <form
                    className="hover:from-[#020726] hover:to-[#162FCC] rounded-3xl p-10 space-y-4 shadow-2xl"
                >
                    {/* Job Title */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Job Title
                        </label>
                        <input
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter job title"
                            className="w-full bg-[#111C55] text-gray-200 p-3 rounded-lg border border-indigo-800 focus:outline-none focus:border-indigo-400"
                        />
                    </div>

                    {/* Posted By */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Posted By
                        </label>
                        <input
                            value={formData.postedBy}
                            readOnly
                            className="w-full bg-[#111C55] text-gray-300 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full bg-[#111C55] text-gray-200 p-3 rounded-lg border border-indigo-800"
                        >
                            <option value="">Select Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Data Entry">Data Entry</option>
                        </select>
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Summary
                        </label>
                        <textarea
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Short job summary..."
                            className="w-full bg-[#111C55] text-gray-200 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Cover Image */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Cover Image URL
                        </label>
                        <input
                            name="coverImage"
                            value={formData.coverImage}
                            onChange={handleChange}
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            className="w-full bg-[#111C55] text-gray-200 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Image Preview */}
                    {formData.coverImage && (
                        <div className="mt-4 flex justify-center">
                            <img
                                src={formData.coverImage}
                                alt="Preview"
                                className="w-64 h-40 object-cover rounded-xl 
                                border-2 border-indigo-500 shadow-lg"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            User Email
                        </label>
                        <input
                            value={formData.userEmail}
                            readOnly
                            className="w-full bg-[#111C55] text-gray-300 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Posted Date */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Posted Date / Time
                        </label>
                        <input
                            value={formData.postedAt}
                            readOnly
                            className="w-full bg-[#111C55] text-gray-300 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Salary */}
                    <div>
                        <label className="block font-semibold mb-1 text-indigo-300">
                            Salary
                        </label>
                        <input
                            name="price"
                            type="number"
                            placeholder="Enter salary (e.g. 500)"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full bg-[#111C55] text-gray-200 p-3 rounded-lg border border-indigo-800"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="w-full py-3 rounded-xl font-semibold text-white
                        bg-gradient-to-r from-[#050E3C] to-[#1E40FF] hover:opacity-90 transition shadow-xl"
                    >
                        Add Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;
