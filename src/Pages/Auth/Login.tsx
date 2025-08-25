/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { handleApiError } from "@/utils/handleApiError";
const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginUser(form).unwrap();
      console.log("Login API Response:", result?.data?.user?.is_active);

      if (result.token) {
        sessionStorage.setItem("authToken", result.token);
      }
      if (result?.data?.user?.is_active === "BLOCKED" || result?.data?.user?.is_active === "SUSPEND") {
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
        <Card className="w-full max-w-md shadow-xl border border-[#E2136E]">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-[#E2136E]">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white text-black"
              />
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="bg-white text-black"
              />
              <Button
                type="submit"
                className="w-full bg-[#E2136E] text-white hover:bg-white hover:text-[#E2136E] transition"
                disabled={isLoading}
              >
                {isLoading ? "Login..." : "Login"}
              </Button>
            </form>
            <p className="text-center text-sm text-gray-400 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#E2136E] underline">
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
