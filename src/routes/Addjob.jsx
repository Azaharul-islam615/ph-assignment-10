import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddJob = () => {

    const user = {
        displayName: "Logged User",
        email: "user@gmail.com",
    };

    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted ✅");
        // TODO: Send data to MongoDB using fetch()
        // TODO: Show toast success message
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 font-sans ">

            {/* Page Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg text-center mb-10">
                <h2 className="text-3xl font-bold flex justify-center gap-3 items-center">
                    <FaPlusCircle /> Add New Job
                </h2>
                <p className="opacity-90 mt-2">Share a new job opportunity with others</p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg border space-y-6"
            >
                {/* Title */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">Job Title</label>
                    <input
                        type="text"
                        placeholder="Enter job title"
                        className="w-full border rounded-lg p-3 focus:outline-blue-500"
                        required
                    />
                </div>

                {/* Posted By (Auto Filled) */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">Posted By</label>
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="w-full border bg-gray-100 rounded-lg p-3"
                    />
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">Category</label>
                    <select
                        className="w-full border rounded-lg p-3 focus:outline-blue-500"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
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
                    <label className="block font-semibold text-gray-700 mb-2">Summary</label>
                    <textarea
                        rows="4"
                        placeholder="Short job summary"
                        className="w-full border rounded-lg p-3 focus:outline-blue-500"
                        required
                    ></textarea>
                </div>

                {/* Cover Image */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">Cover Image (URL)</label>
                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="w-full border rounded-lg p-3 focus:outline-blue-500"
                        required
                    />
                </div>

                {/* User Email (Auto Filled) */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-2">User Email</label>
                    <input
                        type="email"
                        value={user.email}
                        readOnly
                        className="w-full border bg-gray-100 rounded-lg p-3"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                    ✅ Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
