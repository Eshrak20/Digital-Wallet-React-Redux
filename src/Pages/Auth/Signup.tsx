import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await createUser(form).unwrap();
      console.log("API Response:", result);
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 1500); // Redirect after 1.5s
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Signup error:", err);
      toast.error(err?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md shadow-xl border border-[#E2136E]">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-[#E2136E]">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
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
            <Input
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
            <Input
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="bg-white text-black"
            />
            <Button
              type="submit"
              className="w-full bg-[#E2136E] text-white hover:bg-white hover:text-[#E2136E] transition"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Sign Up"}
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#E2136E] underline">
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
