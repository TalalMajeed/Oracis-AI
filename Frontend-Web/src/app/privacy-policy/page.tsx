"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-[var(--secondary-color)]"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Home
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-square-transparent.png"
                alt="Oracis Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold">Oracis AI</span>
            </Link>
          </div>

          {/* Privacy Policy Content */}
          <Card className="w-full">
            <CardContent className="pt-6">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-gray-600 mb-4">Last updated: May 10, 2024</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                  <p className="text-gray-700">
                    Welcome to Oracis AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                  <p className="text-gray-700 mb-3">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Identity Data (name, username, or similar identifier)</li>
                    <li>Contact Data (email address and telephone numbers)</li>
                    <li>Technical Data (internet protocol (IP) address, browser type and version, time zone setting and location)</li>
                    <li>Usage Data (information about how you use our website and services)</li>
                    <li>Profile Data (your username and password, preferences, feedback and survey responses)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-3">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>To provide and maintain our service</li>
                    <li>To notify you about changes to our service</li>
                    <li>To provide customer support</li>
                    <li>To gather analysis or valuable information so that we can improve our service</li>
                    <li>To monitor the usage of our service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                  <p className="text-gray-700">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Your Legal Rights</h2>
                  <p className="text-gray-700 mb-3">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing your personal data</li>
                    <li>Request transfer of your personal data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  </p>
                  <div className="mt-2 text-gray-700">
                    <p>Email: privacy@oracis.ai</p>
                    <p>Address: [Your Company Address]</p>
                  </div>
                </section>
              </div>

              {/* Back to Home Button */}
              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  className="bg-[#001230] hover:bg-[#1d4ed8]"
                >
                  <Link href="/">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 