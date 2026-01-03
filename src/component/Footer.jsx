const Footer = () => {
    return (
        <footer data-aos="fade-up" className="bg-[#071231] text-gray-300">
          
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Freelance MarketPlace</h3>
                    <p className="text-gray-400 text-sm">
                        Smart Deals is a reliable freelance marketplace connecting businesses
                        with trusted professionals globally. Explore, hire, and create jobs seamlessly.
                    </p>
                </div>

               
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/allapps" className="hover:text-white transition">All Jobs</a></li>
                        <li><a href="/addJob" className="hover:text-white transition">Add a Job</a></li>
                        <li><a href="/my-accepted-tasks" className="hover:text-white transition">My Accepted Tasks</a></li>
                        <li><a href="/login" className="hover:text-white transition">Login/Register</a></li>
                        <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        <li><a href="/aboutus" className="hover:text-white transition">About Us</a></li>
                    </ul>
                </div>

               
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Top Categories</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition">Web Development</a></li>
                        <li><a href="#" className="hover:text-white transition">Graphics Design</a></li>
                        <li><a href="#" className="hover:text-white transition">Digital Marketing</a></li>
                        <li><a href="#" className="hover:text-white transition">Video Editing</a></li>
                        <li><a href="#" className="hover:text-white transition">UI/UX Design</a></li>
                    </ul>
                </div>

                {/* Contact / Socials */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact & Socials</h4>
                    <p className="text-gray-400 text-sm mb-3">
                        Email: mdazaharul725@gmail.com<br />
                        Phone: +880 1317087713
                    </p>
                    <div className="flex space-x-4">
                        <a target="_blank" href="https://www.facebook.com/soiyod.azaharul.islam" className="hover:text-white transition">Facebook</a>
                        <a target="_blank" href="https://github.com/Azaharul-islam615" className="hover:text-white transition">GitHub</a>
                        <a target="_blank" href="https://www.linkedin.com/in/azaharul-islam/" className="hover:text-white transition">LinkedIn</a>
                       
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="bg-[#061026] text-gray-500 text-center py-4 mt-6">
                &copy; {new Date().getFullYear()} Freelance MarketPlace. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
