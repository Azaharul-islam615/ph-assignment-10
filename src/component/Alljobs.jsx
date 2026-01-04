import axios from "axios";
import { use, useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaSearch } from "react-icons/fa";

const AllJobs = () => {
    const limit = 10;

    const [alljobs, setAllJobs] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalpage, setTotalpage] = useState(0);
    const [currentpage, setCurrentpage] = useState(0);

    // 🔍 NEW STATES
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("newest");

    const { toggle } = useContext(AuthContext);

    useEffect(() => {
        axios.get(
            `https://frelacing.vercel.app/jobs?limit=${limit}&skip=${currentpage * limit}&search=${search}&sort=${sort}`
        )
            .then(res => {
                setAllJobs(res.data.result);
                setTotal(res.data.total);
                setTotalpage(Math.ceil(res.data.total / limit));
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }, [currentpage, search, sort]);

    // 🔁 search করলে page reset
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setCurrentpage(0);
    };

    const handleSort = (e) => {
        setSort(e.target.value);
        setCurrentpage(0);
    };

    return (
        <div className="min-h-screen py-16 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className={`text-3xl mt-16 mb-2 md:text-4xl ${toggle ? "text-black" : "text-white"} font-bold text-center`}>
                    Explore <span className="text-[#8C00FF]">All Jobs</span>
                </h2>

                <p className="text-center mb-6 text-gray-300">
                    Discover countless job opportunities posted by trusted clients worldwide.
                </p>

                {/* 🔍 SEARCH + SORT */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

                    {/* Search */}
                    <div className="relative w-full md:w-[40%]">
                        <input
                            type="search"
                            placeholder="Search jobs..."
                            value={search}
                            onChange={handleSearch}
                            className="w-full  border border-gray-300 text-gray-300 outline-0 rounded-lg px-4 py-1"
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-500" />
                    </div>

                    {/* Sort Dropdown */}
                    <select
                        value={sort}
                        onChange={handleSort}
                        className="border border-gray-300 rounded-lg px-4 py-1 text-gray-300"
                    >
                        <option className="text-gray-800"  value="newest">Newest</option>
                        <option className="text-gray-800" value="priceLow">salary: Low to High</option>
                        <option className="text-gray-800" value="priceHigh">salary: High to Low</option>
                    </select>
                </div>

                {/* JOB CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {alljobs.map(job => (
                        <div
                            key={job._id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col hover:scale-[1.02] duration-300"
                        >
                            <img
                                src={job.coverImage}
                                alt={job.title}
                                className="w-full h-38 object-cover hover:scale-125 transition duration-300"
                            />

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl text-gray-800 font-bold">{job.title}</h3>
                                <p className="text-sm text-gray-700">Category: {job.category}</p>
                                <p className="text-sm text-gray-700">Salary: {job.price}</p>
                                <p className="text-sm text-gray-600">Posted By: {job.postedBy}</p>

                                <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-grow">
                                    {job.summary}
                                </p>

                                <Link to={`/categories/${job._id}`} className="mt-4">
                                    <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-md">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex items-center justify-center flex-wrap gap-3 mt-7">
                    {currentpage > 0 && (
                        <button
                            onClick={() => setCurrentpage(currentpage - 1)}
                            className="btn px-3 py-2"
                        >
                            <FaLongArrowAltLeft /> Prev
                        </button>
                    )}

                    {[...Array(totalpage).keys()].map(i => (
                        <button
                            key={i}
                            onClick={() => setCurrentpage(i)}
                            className={`btn px-4 py-2 ${i === currentpage && "bg-purple-700 text-white"}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {currentpage < totalpage - 1 && (
                        <button
                            onClick={() => setCurrentpage(currentpage + 1)}
                            className="btn px-3 py-2"
                        >
                            Next <FaLongArrowAltRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllJobs;
