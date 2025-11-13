import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const UpdateJob = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({ title: "", category: "", summary: "", coverImage: "" });
    const formRef = useRef();

    useEffect(() => {
        axios.get(`http://localhost:3000/jobs/${id}`)
            .then(res => {
                setFormData(res.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = e => {
        e.preventDefault();
        const updatedJob = {
            title: e.target.title.value,
            category: e.target.category.value,
            summary: e.target.summary.value,
            coverImage: e.target.coverImage.value,
        };

        axios.patch(`http://localhost:3000/jobs/${id}`, updatedJob)
            .then(() => {
                alert("✅ Job updated successfully!");
            })
            .catch(err => console.error(err));
    };

    const handleCancel = () => {
        // Clear all input fields
        formRef.current.reset();
    };

    return (
        <div className="bg-[#0D1B3E] min-h-screen text-white p-10">
            <h1 className="text-4xl font-bold mb-8">Update Job</h1>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto bg-[#10224D] p-8 rounded-xl space-y-5"
            >
                <input
                    name="title"
                    defaultValue={formData.title}
                    placeholder="Title"
                    className="w-full p-3 rounded bg-[#0F2A54]"
                    required
                />

                <select
                    name="category"
                    defaultValue={formData.category}
                    className="w-full p-3 rounded bg-[#0F2A54]"
                    required
                >
                    <option>Web Development</option>
                    <option>Graphics Design</option>
                    <option>Digital Marketing</option>
                    <option>Video Editing</option>
                    <option>UI/UX Design</option>
                </select>

                <textarea
                    name="summary"
                    defaultValue={formData.summary}
                    rows="4"
                    placeholder="Summary"
                    className="w-full p-3 rounded bg-[#0F2A54]"
                    required
                />

                <input
                    name="coverImage"
                    defaultValue={formData.coverImage}
                    placeholder="Cover Image URL"
                    className="w-full p-3 rounded bg-[#0F2A54]"
                    required
                />

                <div className="flex gap-4 mt-5">
                    <button type="submit" className="bg-blue-600 px-6 py-3 rounded font-semibold flex items-center gap-2">
                        <FaCheckCircle /> Update
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-red-600 px-6 py-3 rounded font-semibold flex items-center gap-2"
                    >
                        <FaTimes /> Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateJob;
