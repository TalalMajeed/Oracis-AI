"use client";

import { ArrowRight, Building2, Check, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react"; // ✨ added useRef

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RoleSelection = () => {
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState<'candidate' | 'company' | null>(null);

  // ✨ Refs for auto-scrolling
  const candidateRef = useRef<HTMLButtonElement | null>(null);
  const companyRef = useRef<HTMLButtonElement | null>(null);

  const handleSelectRole = (role: 'candidate' | 'company') => {
    setSelectedRole(role);

    const targetRef = role === 'candidate' ? candidateRef.current : companyRef.current;

    // ✨ Smooth scroll into view
    targetRef?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/${selectedRole}-signup`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#001230] text-white">
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
          <div className="flex-1" />
          <div className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center text-sm text-white hover:text-gray-400">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[var(--background-color)]">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/logo-square-transparent.png"
                  alt="Oracis Logo"
                  width={64}
                  height={64}
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Join Oracis AI</h2>
              <p className="mt-2 text-gray-600">How would you like to use our platform?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Candidate Option */}
              <button
                ref={candidateRef}
                type="button"
                className={`text-left w-full border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedRole === 'candidate'
                    ? 'border-[#1d4ed8] bg-blue-50 ring-2 ring-[#1d4ed8]/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleSelectRole('candidate')}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full ${
                    selectedRole === 'candidate' ? 'bg-[#1d4ed8]/10 text-[#1d4ed8]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <User size={24} />
                  </div>
                  {selectedRole === 'candidate' && (
                    <div className="bg-[#1d4ed8] text-white p-1 rounded-full">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Candidate</h3>
                <p className="text-gray-600 mb-4">
                  Looking for job opportunities and profile analysis to enhance your career prospects
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    AI-powered CV builder and analysis
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    Personalized job recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    Secure profile sharing with companies
                  </li>
                </ul>
              </button>

              {/* Company Option */}
              <button
                ref={companyRef}
                type="button"
                className={`text-left w-full border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                  selectedRole === 'company'
                    ? 'border-[#1d4ed8] bg-blue-50 ring-2 ring-[#1d4ed8]/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleSelectRole('company')}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-full ${
                    selectedRole === 'company' ? 'bg-[#1d4ed8]/10 text-[#1d4ed8]' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <Building2 size={24} />
                  </div>
                  {selectedRole === 'company' && (
                    <div className="bg-[#1d4ed8] text-white p-1 rounded-full">
                      <Check size={16} />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Company</h3>
                <p className="text-gray-600 mb-4">
                  Seeking top talent with AI-powered candidate matching and secure document handling
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    AI matching with qualified candidates
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    Blockchain NDA signing capabilities
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <Check size={14} className="text-green-600" />
                    </div>
                    Advanced analytics dashboard
                  </li>
                </ul>
              </button>
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleContinue}
                disabled={!selectedRole}
                className={`px-8 py-2 h-12 flex items-center ${
                  selectedRole
                    ? 'bg-[#001230] text-white hover:bg-[#1d4ed8]'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-[#1d4ed8] hover:text-blue-500"
                  >
                    Log in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 Oracis AI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RoleSelection;
