"use client";

import { ChevronLeft, Eye, EyeOff, Info } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

const CompanySignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    companyName: "",
    companyWebsite: "",
    companySize: "",
    industry: "",
    description: "",
    headquartersCountry: "",
    headquartersCity: "",
    foundedYear: "",
    adminFirstName: "",
    adminLastName: "",
    adminEmail: "",
    adminPassword: "",
    adminConfirmPassword: "",
    adminPosition: "",
    adminPhoneNumber: "",
    hiringNeeds: "",
    howHeard: ""
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
      <main className="flex-1 py-12 px-6">
        <div className="container mx-auto max-w-4xl">
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
              <CardTitle className="text-2xl">Create Your Company Account</CardTitle>
              <CardDescription>
                Connect with top talent using AI-powered profile matching and secure blockchain contracts
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Company Information</h3>
                  <div className="space-y-4">
                    {/* Company name and website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Company Name</div>
                        <Input 
                          id="companyName" 
                          name="companyName"
                          placeholder="Oracis Technologies Inc." 
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Company Website</div>
                        <Input 
                          id="companyWebsite" 
                          name="companyWebsite"
                          placeholder="https://www.example.com" 
                          value={formData.companyWebsite}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Company size and industry */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Company Size</div>
                        <select 
                          id="companySize"
                          name="companySize"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.companySize}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1001-5000">1001-5000 employees</option>
                          <option value="5000+">5000+ employees</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Industry</div>
                        <select 
                          id="industry"
                          name="industry"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.industry}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select industry</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="retail">Retail</option>
                          <option value="consulting">Consulting</option>
                          <option value="telecommunications">Telecommunications</option>
                          <option value="energy">Energy</option>
                          <option value="media">Media and Entertainment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Company Description</div>
                      <Textarea 
                        id="description" 
                        name="description"
                        placeholder="Tell us about your company, mission, and values..." 
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        required
                      />
                    </div>

                    {/* HQ location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Headquarters Country</div>
                        <select 
                          id="headquartersCountry"
                          name="headquartersCountry"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={formData.headquartersCountry}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select country</option>
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
                        <div className="text-sm font-medium">Headquarters City</div>
                        <Input 
                          id="headquartersCity" 
                          name="headquartersCity"
                          placeholder="Islamabad" 
                          value={formData.headquartersCity}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Founded year */}
                    <div className="space-y-2 max-w-xs">
                      <div className="text-sm font-medium">Year Founded</div>
                      <Input 
                        id="foundedYear" 
                        name="foundedYear"
                        type="number" 
                        placeholder="2020" 
                        min="1900"
                        max={new Date().getFullYear()}
                        value={formData.foundedYear}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Administrator Information</h3>
                  <div className="space-y-4">
                    {/* Admin name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">First Name</div>
                        <Input 
                          id="adminFirstName" 
                          name="adminFirstName"
                          placeholder="First name" 
                          value={formData.adminFirstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Last Name</div>
                        <Input 
                          id="adminLastName" 
                          name="adminLastName"
                          placeholder="Last Name" 
                          value={formData.adminLastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Admin email */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Email Address</div>
                      <Input 
                        id="adminEmail" 
                        name="adminEmail"
                        type="email" 
                        placeholder="example@gmail.com" 
                        value={formData.adminEmail}
                        onChange={handleChange}
                        required
                      />
                      <p className="text-xs text-gray-500">
                        This email will be used for account login and communications
                      </p>
                    </div>

                    {/* Admin password */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Password</div>
                        <div className="relative">
                          <Input 
                            id="adminPassword" 
                            name="adminPassword"
                            type={showPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            value={formData.adminPassword}
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
                            id="adminConfirmPassword" 
                            name="adminConfirmPassword"
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="••••••••" 
                            value={formData.adminConfirmPassword}
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

                    {/* Additional admin info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Position/Job Title</div>
                        <Input 
                          id="adminPosition" 
                          name="adminPosition"
                          placeholder="HR Manager" 
                          value={formData.adminPosition}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Phone Number</div>
                        <Input 
                          id="adminPhoneNumber" 
                          name="adminPhoneNumber"
                          placeholder="+1 xxx xxx xxxx" 
                          value={formData.adminPhoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4">Hiring & Platform Needs</h3>
                  <div className="space-y-4">
                    {/* Hiring needs */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Primary Hiring Needs</div>
                      <select 
                        id="hiringNeeds"
                        name="hiringNeeds"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.hiringNeeds}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select primary hiring need</option>
                        <option value="technical">Technical Roles (Engineering, Development)</option>
                        <option value="business">Business Roles (Sales, Marketing, Operations)</option>
                        <option value="creative">Creative Roles (Design, Content)</option>
                        <option value="leadership">Leadership Positions</option>
                        <option value="support">Support Roles (Customer Service, Admin)</option>
                        <option value="mixed">Multiple Role Types</option>
                      </select>
                    </div>

                    {/* How they heard about you */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium">How did you hear about Oracis AI?</div>
                      <select 
                        id="howHeard"
                        name="howHeard"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.howHeard}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select option</option>
                        <option value="search">Search Engine</option>
                        <option value="social">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="event">Event or Conference</option>
                        <option value="article">News or Article</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-md flex items-start space-x-3">
                  <Info size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium mb-1">Why create a company account?</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Access AI-powered candidate matching</li>
                      <li>Use blockchain for secure, tamper-proof contracts</li>
                      <li>Get real-time profile verification and insights</li>
                      <li>Streamline your hiring process with data-driven recommendations</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-[#001230] text-white hover:bg-[#1d4ed8] transition-colors duration-200 cursor-pointer"
                  >
                    Create Company Account
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

export default CompanySignup;