import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { AuthContext } from "../Context/Authprovider";
import { toast } from "react-toastify";

const AddJob = () => {
    const { user, toggle } = useContext(AuthContext);


    const [formData, setFormData] = useState({
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
            .then((res) => {
                console.log(" Job added:", res.data);

                toast(<div>Job added successfully!</div>)


                setFormData({
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
                toast(<p>Something went wrong!{err}</p>)

            });
    };

    return (
        <div
            className={`min-h-screen ${toggle ? "bg-white text-black" : "bg-[#0D1B3E] text-white"
                } py-14 px-6 font-sans`}
        >
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-indigo-300 flex justify-center items-center gap-3">
                    <FaPlusCircle /> Add New Job
                </h2>
                <p className="text-gray-400 font-semibold mt-2">
                    Share a job opportunity for freelancers
                </p>
            </div>

            <form
                className={`max-w-4xl mx-auto ${toggle ? "bg-gray-100 text-black" : "bg-[#0F2349] text-white"
                    } p-10 rounded-3xl shadow-2xl border border-indigo-800 space-y-6`}
            >

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Job Title
                    </label>
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
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Posted By
                    </label>
                    <input
                        name="postedBy"
                        value={formData.postedBy}
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>


                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Category
                    </label>
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
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Summary
                    </label>
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
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Cover Image URL
                    </label>
                    <input
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="w-full bg-[#091631] text-white p-3 rounded-lg border border-gray-700"
                    />
                </div>


                {formData.coverImage && (
                    <div className="mt-3 flex justify-center">
                        <img
                            src={formData.coverImage}
                            alt="Preview"
                            className="w-64 h-40 object-cover rounded-xl border border-indigo-400 shadow-lg"
                        />
                    </div>
                )}


                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">
                        User Email
                    </label>
                    <input
                        name="email"
                        value={formData.userEmail}
                        readOnly
                        className="w-full bg-gray-800 text-gray-300 p-3 rounded-lg border border-gray-700"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-2 text-indigo-300">
                        Posted Date / Time
                    </label>
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
