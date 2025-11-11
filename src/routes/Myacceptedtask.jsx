import { useState } from "react";

const Myacceptedtask = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Logo Design", category: "Graphics", email: "test@gmail.com" },
        { id: 2, title: "Data Entry Work", category: "Data Entry", email: "test@gmail.com" },
        { id: 3, title: "Social Media Banner", category: "Graphics", email: "test@gmail.com" },
    ]);

    const handleRemove = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="min-h-screen bg-[#0D1B3E] text-white py-10 px-4 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2E8A99] mb-8">
                ✅ My Accepted Tasks
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-[#11224E] rounded-xl overflow-hidden">
                    <thead className="bg-[#1C365F] text-left">
                        <tr>
                            <th className="px-6 py-3 font-semibold text-gray-200">Title</th>
                            <th className="px-6 py-3 font-semibold text-gray-200">Category</th>
                            <th className="px-6 py-3 font-semibold text-gray-200">Email</th>
                            <th className="px-6 py-3 font-semibold text-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id} className="border-b border-gray-700">
                                <td className="px-6 py-4">{task.title}</td>
                                <td className="px-6 py-4">{task.category}</td>
                                <td className="px-6 py-4">{task.email}</td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button
                                        onClick={() => handleRemove(task.id)}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        ✅ Done
                                    </button>
                                    <button
                                        onClick={() => handleRemove(task.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                                    >
                                        ❌ Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myacceptedtask;
