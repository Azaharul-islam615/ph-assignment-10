const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">

                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
                    Contact Us
                </h1>

                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                    Have a question, issue, or suggestion? Feel free to reach out to us.
                </p>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 text-center">
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            support@freelancemarketplace.com
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            +880 1XXXXXXXXX
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block mb-1 text-gray-700 dark:text-gray-300">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 dark:text-gray-300">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 dark:text-gray-300">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Enter subject"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
