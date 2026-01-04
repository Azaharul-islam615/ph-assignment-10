import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen mt-16 text-gray-100 py-16 px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-3xl p-10 overflow-y-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    Terms and Conditions
                </h1>

                {/* Intro */}
                <p className="mb-6 text-gray-300 leading-relaxed text-md">
                    Welcome to Smart Deals Marketplace! By using our platform, you agree to comply with
                    and be bound by the following terms and conditions. Please read them carefully.
                </p>

                {/* Terms List */}
                <ol className="list-decimal list-inside space-y-4 text-gray-300 text-base md:text-sm">
                    <li>All users must provide accurate and truthful information when registering.</li>
                    <li>Jobs posted must not violate any applicable laws or regulations.</li>
                    <li>The platform is not responsible for disputes between buyers and sellers.</li>
                    <li>Users must respect the privacy and intellectual property rights of others.</li>
                    <li>Any fraudulent activity may lead to account suspension or termination.</li>
                    <li>The platform reserves the right to update these terms at any time.</li>
                    <li>Users are responsible for their own account security, including passwords.</li>
                    <li>All payments and financial transactions are handled securely through our platform.</li>
                    <li>Unauthorized use of the platform for spamming or advertising is prohibited.</li>
                    <li>By continuing to use our services, you acknowledge that you have read and accepted these terms.</li>
                </ol>

                {/* Footer Note */}
                <p className="mt-8 text-gray-400 text-center text-sm">
                    &copy; 2026 Smart Deals Marketplace. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
