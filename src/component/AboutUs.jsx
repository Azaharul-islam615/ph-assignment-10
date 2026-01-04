const AboutUs = () => {
    return (
        <div className="min-h-screen  dark:bg-gray-900 px-4 mt-16 py-10">
            <div className="max-w-7xl mx-auto p-1   rounded-xl ">

                <h1 className="text-3xl font-bold text-center text-gray-300  mb-2">
                    About Us
                </h1>

                <p className="text-gray-300 dark:text-gray-300 text-center mb-6">
                    Freelance Marketplace is a platform where clients and freelancers
                    connect to get work done efficiently and securely.
                </p>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="px-6 py-4 border rounded-lg border-green-300">
                        <h3 className="text-xl font-semibold text-gray-300 dark:text-white mb-2">
                            Our Mission
                        </h3>
                        <p className="text-gray-400 ">
                            Our mission is to create a trusted marketplace where freelancers
                            can find meaningful work and clients can hire skilled professionals
                            with confidence.
                        </p>
                    </div>

                    <div className="px-6 py-4 border rounded-lg border-green-300">
                        <h3 className="text-xl font-semibold text-gray-300 mb-2">
                            Our Vision
                        </h3>
                        <p className="text-gray-400 ">
                            We envision a world where work opportunities are accessible to
                            everyone, regardless of location or background.
                        </p>
                    </div>

                    <div className="px-6 py-4 border rounded-lg border-green-300">
                        <h3 className="text-xl font-semibold text-gray-300  mb-2">
                            Our Values
                        </h3>
                        <p className="text-gray-400 ">
                            Transparency, trust, quality, and user satisfaction are the core
                            values that guide everything we build.
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-12">
                    <h2 className="text-2xl px-6 lg:pl-36 font-semibold text-gray-300  mb-4">
                        Why Choose Us?
                    </h2>
                    <ul className="list-disc px-6 lg:pl-36 text-gray-400  space-y-2">
                        <li>Simple and user-friendly interface</li>
                        <li>Secure authentication and data protection</li>
                        <li>Real-time job management and tracking</li>
                        <li>Role-based dashboard for users and admins</li>
                        <li>Reliable platform built with modern technologies</li>
                    </ul>
                </div>

                {/* Closing Text */}
                <p className="text-gray-400  text-center">
                    Whether you are a freelancer looking for work or a client searching for
                    talent, our platform is designed to support your success.
                </p>

            </div>
        </div>
    );
};

export default AboutUs;
