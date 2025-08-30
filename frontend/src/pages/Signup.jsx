import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApis } from "../api/authApis";
import getCurrentuser from "../customeHooks/getCurrentuser";



const Signup = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState(""); // keep role separate
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const finalData = {
            ...formData,
            role: userType,
        };

        try {
            const res = await authApis.signup(finalData);
            console.log(res.data)
            

            navigate("/");
                getCurrentuser();
        } catch (error) {
            console.error(error);
        }


        console.log(finalData);
    };

    return (
        <section>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-black mb-2">Welcome user</h1>
                        <p className="text-gray-500">Lets Login </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full px-3 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4 mb-6">
                            <button
                                type="button"
                                onClick={() => setUserType("Student")}
                                className={`px-6 py-2 rounded-full border transition-colors ${userType === "Student"
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setUserType("Educator")}
                                className={`px-6 py-2 rounded-full border transition-colors ${userType === "Educator"
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-black border-gray-300 hover:border-gray-400"
                                    }`}
                            >
                                Educator
                            </button>
                        </div>
                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white border-dashed rounded-full animate-spin"></div>
                            ) : (
                                "Sign Up"
                            )}
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-6">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <span className="px-4 text-gray-500 text-sm">Or continue with</span>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div>

                    {/* Google Sign Up */}
                    <button
                        type="button"
                        className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                    >
                        <span className="text-gray-600 font-bold text-lg">G</span>
                        <span className="text-gray-700">oogle</span>
                    </button>

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <span className="text-gray-500">Already have an account? </span>
                        <button onClick={() => navigate("/login")} className="text-black font-medium hover:underline">
                            Login
                        </button>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Signup
