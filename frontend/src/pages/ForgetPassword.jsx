import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [step, setStep] = useState(1); // 1=email, 2=otp, 3=reset
  const navigate = useNavigate();

  return (
    <section>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-black mb-2">
              Reset Password
            </h1>
            <p className="text-gray-500">
              {step === 1 && "Enter your email to get OTP"}
              {step === 2 && "Enter the OTP sent to your email"}
              {step === 3 && "Enter your new password"}
            </p>
          </div>

          {/* STEP 1 → EMAIL FORM */}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2  
                             placeholder-gray-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Send OTP
              </button>
            </form>
          )}

          {/* STEP 2 → OTP FORM */}
          {step === 2 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(3);
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2  
                             placeholder-gray-400"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 → RESET PASSWORD FORM */}
          {step === 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Password reset successful ✅");
                navigate("/login");
              }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2  
                             placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg 
                             focus:outline-none focus:ring-2  
                             placeholder-gray-400"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-black"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                >
                  Reset Password
                </button>
              </div>
            </form>
          )}

          {/* Back to login link */}
          <div
            className="mt-6 text-center text-black underline mx-auto w-fit cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Back to login
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
