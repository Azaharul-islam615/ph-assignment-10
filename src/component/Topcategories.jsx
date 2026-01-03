import img1 from"../assets/photo-1609921212029-bb5a28e60960.avif"
const TopCategories = () => {
    const categories = [
        { title: "Web Development", image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
        { title: "Graphics Design", image: "https://i.ibb.co/B2jNnRGJ/graphic-design.png" },
        { title: "Digital Marketing", image: "https://cdn-icons-png.flaticon.com/512/9068/9068698.png" },
        { title: "Video Editing", image: "https://cdn-icons-png.flaticon.com/512/1161/1161388.png" },
        { title: "UI/UX Design", image: "https://cdn-icons-png.flaticon.com/512/9530/9530608.png" },
        { title: "Admin Support", image: "https://cdn-icons-png.flaticon.com/512/900/900618.png" }
    ];

    return (
        <div data-aos="fade-up" className="max-w-7xl mx-auto my-16 px-4 text-white">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-2 text-[#8C00FF]">
                Top  <span className='text-[#8C00FF]'> Categories</span>🔥
            </h2>
            <p data-aos="fade-up" className="text-gray-300 text-center mb-6">Explore our top categories to discover in-demand skills and services. <br />
                Choose the right category and start building your <br /> career with confidence.</p>

            <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                {categories.map((cat, i) => (
                    <div data-aos="fade-up" key={i} className="bg-[#1B2A4A] border border-[#2F3F63] p-4 rounded-xl flex flex-col items-center hover:border-blue-600 shadow-md hover:-translate-y-2 transition-all duration-300">
                        <img src={cat.image} alt={cat.title} className="h-12 mb-3 rounded-full" />
                        <p  className="font-semibold text-center">{cat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopCategories;
