import React from "react";

const FAQSection = () => {
    const faqs = [
        {
            question: "How do I post a task?",
            answer:
                "Simply create an account and post your task with clear requirements and budget.",
        },
        {
            question: "Is the payment system secure?",
            answer:
                "Yes, all payments are encrypted and processed through a secure system.",
        },
        {
            question: "How can I become a freelancer?",
            answer:
                "Sign up, complete your profile, and start accepting tasks that match your skills.",
        },
        {
            question: "What if I face an issue?",
            answer:
                "You can contact our support team anytime for quick assistance.",
        },
    ];

    return (
        <section data-aos="fade-up" className="mt-16 max-w-7xl mx-auto px-4">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-center text-[#8C00FF] mb-2">
                Frequently  <span className="text-white">Asked Questions</span>
            </h2>
            <p data-aos="fade-up" className="text-center text-gray-300 mb-6">
                Find answers to the most common questions about our platform.
            </p>

            <div data-aos="fade-up" className="space-y-4">
                {faqs.map((faq, index) => (
                    <details data-aos="fade-up"
                        key={index}
                        className="group bg-gray-300 border rounded-lg p-5 shadow"
                    >
                        <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-800">
                            {faq.question}
                            <span className="text-[#8C00FF] group-open:rotate-180 transition">
                                ⌄
                            </span>
                        </summary>
                        <p className="text-gray-600 mt-3">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
