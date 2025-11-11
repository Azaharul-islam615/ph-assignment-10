import { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const UpdateJobStatic = () => {

    const [form, setForm] = useState({
        title: "Frontend Developer Needed",
        category: "Web Development",
        summary: "Build a high-quality UI for dashboard with React & Tailwind CSS.",
        coverImage: "https://i.ibb.co/z6VSMdD/react-job.jpg"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Static form (no update logic yet)");
    };

    return (
        <div className="bg-[#0D1B3E] min-h-screen text-white font-sans pb-20">

            {/* Page Title */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-10 text-center">
                <h1 className="text-4xl font-bold">Update Job</h1>
                <p className="text-gray-200 mt-2 text-lg">
                    Edit your job information and click Update
                </p>
            </div>

            {/* Update Form */}
            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto mt-10 bg-[#10224D] rounded-2xl p-8 shadow-xl border border-[#1c355f]"
            >

                {/* Title */}
                <label className="text-gray-200 font-medium block mb-1">Job Title</label>
                <input
                    type="text"
                    name="title"
                    required
                    value={form.title}
                    onChange={handleChange}
                    className="w-full bg-[#0F2A54] px-4 py-3 rounded-lg border border-[#244173]
                    focus:ring-2 focus:ring-blue-500 outline-none mb-5"
                />

                {/* Category */}
                <label className="text-gray-200 font-medium block mb-1">Category</label>
                <select
                    name="category"
                    required
                    value={form.category}
                    onChange={handleChange}
                    className="w-full bg-[#0F2A54] px-4 py-3 rounded-lg border border-[#244173] 
                    focus:ring-2 focus:ring-blue-500 outline-none mb-5"
                >
                    <option>Web Development</option>
                    <option>Graphics Design</option>
                    <option>Digital Marketing</option>
                    <option>Video Editing</option>
                    <option>UI/UX Design</option>
                </select>

                {/* Summary */}
                <label className="text-gray-200 font-medium block mb-1">Summary</label>
                <textarea
                    name="summary"
                    required
                    rows="4"
                    value={form.summary}
                    onChange={handleChange}
                    className="w-full bg-[#0F2A54] px-4 py-3 rounded-lg border border-[#244173] 
                    focus:ring-2 focus:ring-blue-500 outline-none mb-5 resize-none"
                ></textarea>

                {/* Cover Image */}
                <label className="text-gray-200 font-medium block mb-1">Cover Image URL</label>
                <input
                    type="text"
                    name="coverImage"
                    required
                    value={form.coverImage}
                    onChange={handleChange}
                    className="w-full bg-[#0F2A54] px-4 py-3 rounded-lg border border-[#244173]
                    focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* Preview */}
                <div className="w-full h-52 mt-4 border border-[#244173] rounded-lg overflow-hidden">
                    <img
                        src={form.coverImage}
                        alt="Cover Preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">

                    {/* Submit = Update */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition text-white w-full sm:w-auto px-7 py-3 rounded-lg font-semibold flex items-center gap-2"
                    >
                        <FaCheckCircle /> Update
                    </button>

                    {/* Reset Button */}
                    <button
                        type="reset"
                        className="bg-transparent border border-red-600 hover:bg-red-600 
                        transition text-white w-full sm:w-auto px-7 py-3 rounded-lg font-semibold flex items-center gap-2"
                    >
                        <FaTimes /> Cancel
                    </button>
                </div>

            </form>
        </div>
    );
};

export default UpdateJobStatic;
