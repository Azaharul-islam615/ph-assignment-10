import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const DashboardOverview = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [totalEarnings, setTotalEarnings] = useState(0);
    const [usersChartData, setUsersChartData] = useState([]);
    const [earningsChartData, setEarningsChartData] = useState([]);

    // Fetch all users
    useEffect(() => {
        axios
            .get("https://frelacing.vercel.app/allusers")
            .then(res => setAllUsers(res.data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);

    // Fetch all jobs
    useEffect(() => {
        axios
            .get("https://frelacing.vercel.app/jobs")
            .then(res => {
                const jobData = res.data.result || [];
                setJobs(jobData);

                // Total Earnings
                const total = jobData.reduce((acc, job) => acc + Number(job.price || 0), 0);
                setTotalEarnings(total);

                // Earnings Chart Data
                const earningsByMonth = {};
                jobData.forEach(job => {
                    const month = new Date(job.postedAt || new Date()).toLocaleString("default", { month: "short" });
                    earningsByMonth[month] = (earningsByMonth[month] || 0) + Number(job.price || 0);
                });
                const earningsData = Object.keys(earningsByMonth).map(month => ({
                    month,
                    earnings: earningsByMonth[month]
                }));
                setEarningsChartData(earningsData);
            })
            .catch(err => console.error("Error fetching jobs:", err));
    }, []);

    // Prepare Users Chart Data
    useEffect(() => {
        const usersByMonth = {};
        allUsers.forEach(user => {
            const month = new Date(user.createdAt || new Date()).toLocaleString("default", { month: "short" });
            usersByMonth[month] = (usersByMonth[month] || 0) + 1;
        });
        const usersData = Object.keys(usersByMonth).map(month => ({
            month,
            users: usersByMonth[month]
        }));
        setUsersChartData(usersData);
    }, [allUsers]);

    return (
        <div className="min-h-screen bg-[#050E3C] p-6 text-white">
            <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 text-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    <h3 className="text-lg">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">{allUsers.length}+</p>
                </div>

                <div className="p-6 text-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">
                    <h3 className="text-lg">Total Jobs</h3>
                    <p className="text-3xl font-bold mt-2">{jobs.length}+</p>
                </div>

                <div className="p-6 text-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg">
                    <h3 className="text-lg">Total Earnings</h3>
                    <p className="text-3xl font-bold mt-2">${totalEarnings.toLocaleString()}</p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0B1A55] rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Monthly Users (Bar Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={usersChartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="month" stroke="#fff" />
                            <YAxis stroke="#fff" />
                            <Tooltip />
                            <Bar dataKey="users" fill="rgba(59, 130, 246, 0.7)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-[#0B1A55] rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Earnings Growth (Line Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={earningsChartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="month" stroke="#fff" />
                            <YAxis stroke="#fff" />
                            <Tooltip />
                            <Line type="monotone" dataKey="earnings" stroke="#EC4899" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
