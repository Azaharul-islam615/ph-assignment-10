const Contact = () => {
    return (
        <div className="min-h-screen mt-16 px-4 py-14 
        bg-gradient-to-br from-[#050E3C] via-[#0B1A55] to-[#2A0E5C]">

            <div className="max-w-4xl mx-auto 
            bg-white/10 backdrop-blur-xl 
            rounded-2xl shadow-2xl p-8 border border-white/20">

                <h1 className="text-3xl font-bold text-center text-white mb-4">
                    Contact Us
                </h1>

                <p className="text-center text-gray-300 mb-8">
                    Have a question, issue, or suggestion? Feel free to reach out to us.
                </p>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
                    <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-300">
                            mdazaharul725@gmail.com
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">
                            +880 1317087713
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-gray-300">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-300">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 text-white border border-white/20
                            focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 text-white border border-white/20
                            focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 text-white border border-white/20
                            focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message"
                            className="w-full px-4 py-2 rounded-lg 
                            bg-white/10 text-white border border-white/20
                            focus:outline-none focus:ring-2 focus:ring-purple-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-xl font-semibold text-white
                        bg-gradient-to-r from-purple-500 to-indigo-600
                        hover:from-purple-600 hover:to-indigo-700
                        transition shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
