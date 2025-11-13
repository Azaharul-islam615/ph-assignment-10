import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../Context/Authprovider";

const AddJob = () => {
    const { user,toggle } = useContext(AuthContext);

    // State to store form data
    const [formData, setFormData] = useState({
        title: "",
        postedBy: user?.displayName || "",
        category: "",
        summary: "",
        imageUrl: "",
        email: user?.email || "",
        postedAt: "", 
    });

   
    useEffect(() => {
        const now = new Date().toISOString(); 
        setFormData(prev => ({ ...prev, postedAt: now }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = () => {
        axios.post("http://localhost:3000/addjob", formData)
            .then((res) => {
                console.log("Job added:", res.data);
                alert("Job added successfully!");
              
                setFormData({
                    title: "",
                    postedBy: user?.displayName || "",
                    category: "",
                    summary: "",
                    imageUrl: "",
                    email: user?.email || "",
                    postedAt: new Date().toISOString(),
                });
            });
    };

    return (
        <div className={`min-h-screen ${toggle ? "bg-white text-black" :"bg-[#0D1B3E]"} py-14 px-6 font-sans text-white`}>
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-indigo-300 flex justify-center items-center gap-3">
                    <FaPlusCircle /> Add New Job
                </h2>
                <p className="text-gray-400 font-semibold mt-2">
                    Share a job opportunity for freelancers
                </p>
            </div>

            <form className="max-w-4xl mx-auto bg-[#0F2349] p-10 rounded-3xl shadow-2xl border border-indigo-800 space-y-6">

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Job Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter job title"
                        className="w-full bg-[#091631] text-white p-3 rounded-lg border border-gray-700 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Posted By</label>
                    <input
                        name="postedBy"
                        value={formData.postedBy}
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-[#091631] text-gray-300 p-3 rounded-lg border border-gray-700"
                    >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Graphics Design">Graphics Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Data Entry">Data Entry</option>
                    </select>
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Short job summary..."
                        className="w-full bg-[#091631] text-gray-200 p-3 rounded-lg border border-gray-700"
                    ></textarea>
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Cover Image URL</label>
                    <input
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="w-full bg-[#091631] text-white p-3 rounded-lg border border-gray-700"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">User Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">Posted Date / Time</label>
                    <input
                        name="postedAt"
                        value={formData.postedAt}
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition shadow-lg"
                >
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
