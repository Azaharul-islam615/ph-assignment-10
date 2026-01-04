import React, { useContext, useState, useEffect, use } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEdit, FaSave } from "react-icons/fa";
import { AuthContext } from "../Context/Authprovider";

const ProfilePage = () => {
    const { user, setUser, toggle } = use(AuthContext);

    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({
        name: user?.displayName || "",
        email: user?.email || "",
        photoURL: user?.photoURL || "",
        phone: "",
        bio: "",
    });

    // Fetch profile from backend
    useEffect(() => {
        if (!user?.email) return;
        axios
            .get(`https://frelacing.vercel.app/users/${user.email}`)
            .then((res) => {
                if (res.data) {
                    setProfile((prev) => ({ ...prev, ...res.data }));
                }
            })
            .catch(() => { });
    }, [user?.email]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = () => {
        axios
            .patch(`https://frelacing.vercel.app/users/${user.email}`, profile)
            .then(() => {
                toast.success("Profile updated successfully!");
                setUser((prev) => ({
                    ...prev,
                    displayName: profile.name,
                    photoURL: profile.photoURL,
                }));
                setEditMode(false);
            })
            .catch(() => {
                toast.error("Failed to update profile!");
            });
    };

    return (
        <div className="min-h-screen mt-16 p-8 bg-gradient-to-br from-[#050E3C] via-[#0B1A55] to-[#2A0E5C] text-gray-200">
            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/20">

                <h1 className="text-3xl font-bold mb-4 text-center text-white">
                    My Profile
                </h1>

                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src={profile.photoURL || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover border-4 border-purple-400 shadow-xl"
                    />
                </div>

                {/* Profile Fields */}
                <div className="space-y-4 w-full">

                    {/* Name */}
                    <div>
                        <label className="block font-semibold mb-1 text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            readOnly={!editMode}
                            className={`w-full p-3 rounded-lg border outline-none text-white
              ${editMode
                                    ? "border-purple-400 bg-white/10"
                                    : "border-white/20 bg-white/5"
                                }`}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-semibold mb-1 text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            value={profile.email}
                            readOnly
                            className="w-full p-3 rounded-lg border border-white/20 bg-white/5 text-gray-400 cursor-not-allowed"
                        />
                    </div>

                    {/* Phone + PhotoURL */}
                    <div className="md:flex md:gap-4">
                        <div className="flex-1">
                            <label className="block font-semibold mb-1 text-gray-300">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                readOnly={!editMode}
                                className={`w-full p-3 rounded-lg border text-white
                ${editMode
                                        ? "border-purple-400 bg-white/10"
                                        : "border-white/20 bg-white/5"
                                    }`}
                            />
                        </div>

                        <div className="flex-1 mt-4 md:mt-0">
                            <label className="block font-semibold mb-1 text-gray-300">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                value={profile.photoURL}
                                onChange={handleChange}
                                readOnly={!editMode}
                                className={`w-full p-3 rounded-lg border text-white
                ${editMode
                                        ? "border-purple-400 bg-white/10"
                                        : "border-white/20 bg-white/5"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block font-semibold mb-1 text-gray-300">
                            Bio
                        </label>
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            readOnly={!editMode}
                            rows={4}
                            className={`w-full p-3 rounded-lg border text-white
              ${editMode
                                    ? "border-purple-400 bg-white/10"
                                    : "border-white/20 bg-white/5"
                                }`}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-6">
                        {!editMode ? (
                            <button
                                onClick={() => setEditMode(true)}
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition shadow-lg"
                            >
                                <FaEdit /> Edit Profile
                            </button>
                        ) : (
                            <button
                                onClick={handleSave}
                                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl font-semibold transition shadow-lg"
                            >
                                <FaSave /> Save Changes
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
