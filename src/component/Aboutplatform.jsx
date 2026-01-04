import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { toast } from "react-toastify";

const AboutPlatform = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
            .get("https://frelacing.vercel.app/allusers")
            .then((res) => setAllUsers(res.data))
            .catch((err) => {
                toast.error("Error fetching users!");
                console.error("Error fetching users:", err);
            });

        axios
            .get("https://frelacing.vercel.app/jobs")
            .then((res) => setJobs(res.data.result || []))
            .catch((err) => {
                toast.error("Error fetching jobs!");
                console.error("Error fetching jobs:", err);
            });
    }, []);

    return (
        <div
            data-aos="fade-up"
            className="max-w-[1234px] mx-auto mt-20 px-6 py-14 bg-[#0D1A38] text-white rounded-2xl shadow-lg"
        >
            <div className="text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-3xl font-bold mb-4">
                    Welcome to Smart Deals Marketplace ✨
                </h2>
                <p
                    data-aos="fade-up"
                    className="max-w-3xl text-gray-400 mx-auto leading-relaxed"
                >
                    A secure and reliable freelance platform where sellers list their products or
                    services and buyers can place offers with confidence. We help connect skilled
                    professionals and real buyers with a smooth and transparent workflow.
                </p>
            </div>

            {/* Overview Stats */}
            <div
                data-aos="fade-up"
                className="flex flex-wrap justify-center gap-8 text-center mt-10"
            >
                <div>
                    <h3 className="text-3xl font-bold text-green-400">
                        <CountUp
                            start={0}
                            end={allUsers.length}
                            duration={2.5}
                            separator=","
                            enableScrollSpy={true}      // scroll detect করে count শুরু করবে
                            scrollSpyOnce={false}       // scroll করলে প্রতিবার count শুরু হবে
                        />+
                    </h3>
                    <p className="text-gray-400">Trusted Users</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-blue-400">
                        <CountUp
                            start={0}
                            end={jobs.length}
                            duration={2.5}
                            separator=","
                            enableScrollSpy={true}
                            scrollSpyOnce={false}
                        />+
                    </h3>
                    <p className="text-gray-400">Jobs Listed</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-purple-400">
                        <CountUp
                            start={0}
                            end={98}
                            duration={2}
                            enableScrollSpy={true}
                            scrollSpyOnce={false}
                        />%
                    </h3>
                    <p className="text-gray-400">Positive Ratings</p>
                </div>
            </div>

            <div data-aos="fade-up" className="mt-10 flex justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition shadow-md">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default AboutPlatform;
