"use client";

import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const CandidateSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    phoneNumber: "",
    age: "",
    occupation: "",
    gender: ""
  });

  // Handle input changes
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container max-w-none flex h-14 items-center px-[30px]">
          <div className="flex items-center mr-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-square-transparent.png"
                alt="Oracis Logo"
                width={32}
                height={32}
              />
              <span className="font-bold text-xl">Oracis AI</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <Link 
              href="/role-selector" 
              className="flex items-center text-gray-600 hover:text-[var(--secondary-color)]"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Role Selection
            </Link>
          </div>

          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Create Your Candidate Account</CardTitle>
              <CardDescription>
                Let's get started with your professional journey
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">First Name</div>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="First Name" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Last Name</div>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Email Address</div>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Password</div>
                    <div className="relative">
                      <Input 
                        id="password" 
                        name="password"
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Confirm Password</div>
                    <div className="relative">
                      <Input 
                        id="confirmPassword" 
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"} 
                        placeholder="••••••••" 
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Country</div>
                    <select 
                      id="country"
                      name="country"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your country</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="france">France</option>
                      <option value="india">India</option>
                      <option value="china">China</option>
                      <option value="japan">Japan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Phone Number</div>
                    <Input 
                      id="phoneNumber" 
                      name="phoneNumber"
                      placeholder="+1 xxx xxx xxxx" 
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Age</div>
                    <Input 
                      id="age" 
                      name="age"
                      type="number" 
                      placeholder="25" 
                      value={formData.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Occupation</div>
                    <Input 
                      id="occupation" 
                      name="occupation"
                      placeholder="Software Engineer" 
                      value={formData.occupation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Gender</div>
                    <select 
                      id="gender"
                      name="gender"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select your gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-[#001230] text-white hover:bg-[#1d4ed8] transition-colors duration-200 cursor-pointer"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Separator />
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link 
                  href="/login" 
                  className="text-[var(--secondary-color)] hover:underline"
                >
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/40 bg-[#001230] text-white backdrop-blur">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-500">
            © 2025 Oracis AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CandidateSignup;