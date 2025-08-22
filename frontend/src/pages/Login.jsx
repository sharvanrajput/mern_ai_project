import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApis } from "../api/authApis";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("Student");
    const [loading, setLoading] = useState(false);

    // form state
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        // Fake async login delay


        try {
            const res = await authApis.login({ ...formData, role: userType });
            console.log(res.data)
            console.log("Login Data:", {
                ...formData,
                role: userType,
            });
            setLoading(false);
            navigate("/");


        } catch (error) {

        }



    };

    return (
        <section>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-black mb-2">
                            Let's get Started
                        </h1>
                        <p className="text-gray-500">Login to your account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="************"
                                    className="w-full px-3 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    👁
                                </button>
                            </div>
                        </div>

                        {/* User Type Selection */}
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

                        {/* Submit Button with Spinner */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex justify-center items-center"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-2 border-white border-dashed rounded-full animate-spin"></div>
                            ) : (
                                "Login"
                            )}
                        </button>

                        <span className="block text-right text-sm text-gray-600 cursor-pointer hover:underline">
                            Forgot Password?
                        </span>

                        {/* Divider */}
                        <div className="flex items-center justify-center my-6">
                            <div className="border-t border-gray-300 flex-grow"></div>
                            <span className="px-4 text-gray-500 text-sm">
                                Or continue with
                            </span>
                            <div className="border-t border-gray-300 flex-grow"></div>
                        </div>

                        {/* Google Sign In */}
                        <button
                            type="button"
                            className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                        >
                            <span className="text-gray-600 font-bold text-lg">G</span>
                            <span className="text-gray-700">oogle</span>
                        </button>

                        {/* Signup Link */}

                    </form>
                    <div className="text-center mt-6">
                        <span className="text-gray-500">Don't have an account? </span>
                        <button
                            onClick={() => navigate("/signup")}
                            className="text-black font-medium hover:underline"
                        >
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
