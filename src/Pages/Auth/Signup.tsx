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
import type { FormValues, InputConfig } from "@/types/InputConfig.type";
import { Eye, EyeOff } from "lucide-react"; // Import eye icons

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    role: "",
    password: "",
    address: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const key = e.target.name as keyof FormValues;
    let value = e.target.value;

    if (key === "role") {
      value = value.toUpperCase();
    }

    setForm({ ...form, [key]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const inputs: InputConfig[] = [
    { name: "name", placeholder: "Full Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
    {
      name: "role",
      placeholder: "Select role",
      type: "select",
      options: [
        { value: "USER", label: "USER" },
        { value: "AGENT", label: "AGENT" },
      ],
    },
    { name: "password", placeholder: "Password", type: "password" },
    { name: "address", placeholder: "Address", type: "text" },
    { name: "phone", placeholder: "Phone Number", type: "text" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Card className="w-full max-w-md bg-transparent shadow-2xl border-2 border-[#E2136E] rounded-xl transition-all duration-300 transform">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold text-[#E2136E]">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {inputs.map((input) => {
              if (input.type === "select") {
                return (
                  <div key={input.name} className="relative">
                    <select
                      name={input.name}
                      value={form[input.name]}
                      onChange={handleChange}
                      required
                      className="w-full p-3 pr-12 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E2136E] appearance-none cursor-pointer text-base placeholder-gray-500"
                    >
                      <option value="" disabled className="text-gray-500">
                        {input.placeholder}
                      </option>
                      {input.options.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          className="bg-white dark:bg-black text-gray-900 dark:text-white"
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-[#E2136E]">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                );
              } else if (input.type === "password") {
                return (
                  <div key={input.name} className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={input.placeholder}
                      name={input.name}
                      value={form[input.name]}
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
                );
              } else {
                return (
                  <Input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={form[input.name]}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white dark:text-white text-gray-900 border-2 border-gray-300 focus:border-[#E2136E] focus:outline-none focus:ring-2 focus:ring-[#E2136E] text-base placeholder-gray-500"
                  />
                );
              }
            })}
            <Button
              type="submit"
              className="w-full py-3 bg-[#E2136E] text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-[#E2136E] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Sign Up"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#E2136E] font-semibold underline hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;