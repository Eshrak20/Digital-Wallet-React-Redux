/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { handleApiError } from "@/utils/handleApiError";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginUser(form).unwrap();
      console.log("Login API Response:", result?.data?.user?.is_active);

      if (result.token) {
        sessionStorage.setItem("authToken", result.token);
      }

      if (
        result?.data?.user?.is_active === "BLOCKED" ||
        result?.data?.user?.is_active === "SUSPEND"
      ) {
        navigate("/login");
        toast.error(`User is ${result?.data?.user?.is_active}`);
      } else {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (err: any) {
      handleApiError(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <Card className="w-full max-w-md bg-transparent shadow-2xl border-2 border-[#E2136E] rounded-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-extrabold text-[#E2136E]">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-white dark:text-white text-gray-900 border-2 border-gray-300 focus:border-[#E2136E] focus:outline-none focus:ring-2 focus:ring-[#E2136E] text-base placeholder-gray-500"
              />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pr-12 rounded-lg bg-white dark:text-white text-gray-900 border-2 border-gray-300 focus:border-[#E2136E] focus:outline-none focus:ring-2 focus:ring-[#E2136E] text-base placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-[#E2136E] transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                </button>
              </div>
              <Button
                type="submit"
                className="w-full py-3 bg-[#E2136E] text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-[#E2136E] transition-all duration-300 transform  shadow-md"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-6">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-[#E2136E] font-semibold underline hover:text-white transition-colors duration-300"
              >
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;