import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";
import { FaSearch } from "react-icons/fa";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const AllJobs = () => {
  const limit = 10;
  const [total, setTotal] = useState(0);
  const [totalpage, setTotalpage] = useState(0);
  const [currentpage, setCurrentpage] = useState(0);
  const [alljobs, setAllJobs] = useState([]);
  const { toggle } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `https://frelacing.vercel.app/jobs?limit=${limit}&skip=${
          currentpage * limit
        }`
      )
      .then((res) => {
        setAllJobs(res.data.result); 
        setTotal(res.data.total);
        setTotalpage(Math.ceil(res.data.total / limit));
      })
      .catch((err) => console.error(err));
  }, [currentpage]);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className={`text-3xl mt-16 mb-2 md:text-4xl font-bold text-center ${
            toggle ? "text-black" : "text-white"
          }`}
        >
          Explore <span className="text-[#8C00FF]">All Jobs</span>
        </h2>

        <p className="text-center mb-6 text-gray-400">
          Browse jobs posted by trusted clients and start working instantly.
        </p>

        {/* Search */}
        <div className="w-full relative flex justify-center mb-6">
          <input
            type="search"
            placeholder="Search jobs..."
            className="border rounded-lg px-4 py-2 w-full md:w-[40%]"
          />
          <FaSearch className="absolute right-4 md:right-[32%] top-3 text-gray-400" />
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {alljobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={job.coverImage}
                alt={job.title}
                className="w-full h-40 object-cover hover:scale-110 transition duration-500"
              />

              <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-800">
                  {job.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  Category: {job.category}
                </p>
                <p className="text-sm text-gray-600">
                  Salary: ${job.price}
                </p>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2 flex-grow">
                  {job.summary}
                </p>

                <Link to={`/jobs/${job._id}`} className="mt-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {currentpage > 0 && (
            <button
              onClick={() => setCurrentpage(currentpage - 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              <FaLongArrowAltLeft />
            </button>
          )}

          {[...Array(totalpage).keys()].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentpage(i)}
              className={`px-3 py-1 rounded ${
                i === currentpage
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {currentpage < totalpage - 1 && (
            <button
              onClick={() => setCurrentpage(currentpage + 1)}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              <FaLongArrowAltRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
