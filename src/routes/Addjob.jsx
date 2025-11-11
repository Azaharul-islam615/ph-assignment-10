import { FaPlusCircle } from "react-icons/fa";

const AddJob = () => {
    return (
        <div className="min-h-screen bg-[#0D1B3E] py-14 px-6 font-sans text-white">

            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-indigo-300 flex justify-center items-center gap-3">
                    <FaPlusCircle /> Add New Job
                </h2>
                <p className="text-gray-400 font-semibold mt-2">
                    Share a job opportunity for freelancers 
                </p>
            </div>

            {/* Form Card */}
            <form className="max-w-4xl mx-auto bg-[#0F2349] p-10 rounded-3xl shadow-2xl border border-indigo-800 space-y-6">

                {/* Job Title */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Job Title</label>
                    <input
                        type="text"
                        placeholder="Enter job title"
                        className="w-full bg-[#091631] text-white p-3 rounded-lg border border-gray-700 focus:outline-none"
                    />
                </div>

                {/* Posted By */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Posted By</label>
                    <input
                        type="text"
                        value="John Doe"
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Category</label>
                    <select
                        className="w-full bg-[#091631] text-gray-300 p-3 rounded-lg border border-gray-700"
                    >
                        <option>Select Category</option>
                        <option>Web Development</option>
                        <option>Graphics Design</option>
                        <option>Digital Marketing</option>
                        <option>Data Entry</option>
                    </select>
                </div>

                {/* Summary */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Summary</label>
                    <textarea
                        rows="4"
                        placeholder="Short job summary..."
                        className="w-full bg-[#091631] text-gray-200 p-3 rounded-lg border border-gray-700"
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Cover Image URL</label>
                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="w-full bg-[#091631] text-white p-3 rounded-lg border border-gray-700"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">User Email</label>
                    <input
                        type="email"
                        value="user@gmail.com"
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="button"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition shadow-lg"
                >
                     Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
