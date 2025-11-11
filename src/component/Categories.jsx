import { FaMoneyBillWave, FaClock, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import jobImg from "../assets/windows-MYomVPpR5FU-unsplash.jpg";
import { useNavigate } from "react-router";

const Categories = () => {
    const navigate=useNavigate()
    const handle=()=>{
     navigate('/update')
    }
    return (
        <div data-aos="fade-up" className="bg-[#0D1B3E] min-h-screen font-sans text-white">

            <title>Freelance MarketPlac-Categoriesdetails</title>
            <img data-aos="fade-up"
                src={jobImg}
                alt="Job"
                className="w-full h-[350px] object-cover rounded-b-2xl"
            />

            <div data-aos="fade-up" className="max-w-6xl mx-auto p-6 md:p-10">

                
                <h1 data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
                    Professional Frontend Developer Needed
                </h1>
                <p data-aos="fade-up" className="mt-2 text-gray-300 text-lg">
                    Build high-quality UI & Interactions
                </p>

               
                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-6 mt-8">
                    <div data-aos="fade-up" className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaMoneyBillWave size={28} className="text-green-500" />
                        <div> 
                            <p className="font-semibold">Salary</p>
                            <span className="text-gray-300">$400 — $600</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaClock size={28} className="text-orange-400" />
                        <div>
                            <p className="font-semibold">Deadline</p>
                            <span className="text-gray-300">30 Nov 2025</span>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex items-center gap-3 bg-[#10224D] p-5 rounded-xl shadow">
                        <FaBriefcase size={28} className="text-blue-400" />
                        <div>
                            <p className="font-semibold">Job Category</p>
                            <span className="text-gray-300">Web Development</span>
                        </div>
                    </div>
                </div>

               
                <div data-aos="fade-up" className="mt-10 bg-[#10224D] p-8 rounded-2xl shadow-lg">
                    <h2 data-aos="fade-up" className="text-2xl font-bold mb-4">Job Description</h2>
                    <p data-aos="fade-up" className="text-gray-300 leading-7">
                        We are looking for a frontend developer experienced in React & Tailwind.
                        You will create smooth UI interactions and responsive layouts. Must understand
                        REST APIs and Git workflow.
                    </p>

                    
                    <div data-aos="fade-up" className="mt-6 flex items-center gap-3 text-gray-300">
                        <FaMapMarkerAlt className="text-red-500" />
                        Remote — Worldwide
                    </div>

                   
                    <div data-aos="fade-up" className="mt-10 flex flex-wrap gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold">
                             Accept Job
                        </button>
                        <button onClick={handle} className="bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-lg font-semibold text-black">
                             Update Job
                        </button>
                        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold">
                             Delete Job
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;
