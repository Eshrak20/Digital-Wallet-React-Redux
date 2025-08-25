/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/api/authApi";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { handleApiError } from "@/utils/handleApiError";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    address: "",
    phone: "",
  });
  type FormValues = {
    name: string;
    email: string;
    role: string;
    password: string;
    address: string;
    phone: string;
  };

  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name as keyof FormValues;
    let value = e.target.value;

    // force uppercase only for role
    if (key === "role") {
      value = value.toUpperCase();
    }

    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(form).unwrap();
      toast.success("Account created successfully! ✅");
      navigate("/login");
    } catch (err: any) {
      handleApiError(err);
    }
  };

  const inputs: {
    name: keyof FormValues;
    placeholder: string;
    type: string;
  }[] = [
    { name: "name", placeholder: "Full Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
    { name: "role", placeholder: "USER or AGENT", type: "text" },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "address", placeholder: "Address", type: "text" },
    { name: "phone", placeholder: "Phone Number", type: "text" },
  ];

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
            {inputs.map((input) => (
              <Input
                key={input.name}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                value={form[input.name]}
                onChange={handleChange}
                required
                className="bg-white text-black"
              />
            ))}
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
            <Link to="/login" className="text-[#E2136E] underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
