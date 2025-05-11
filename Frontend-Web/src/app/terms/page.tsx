"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TermsOfService() {
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

          {/* Terms of Service Content */}
          <Card className="w-full">
            <CardContent className="pt-6">
              <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
              <p className="text-gray-600 mb-4">Last updated: May 10, 2024</p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using Oracis AI's platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
                  <p className="text-gray-700 mb-3">Permission is granted to temporarily use Oracis AI's platform for personal, non-commercial purposes, subject to the following restrictions:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>You must not modify or copy the materials</li>
                    <li>You must not use the materials for any commercial purpose</li>
                    <li>You must not attempt to decompile or reverse engineer any software contained on the platform</li>
                    <li>You must not remove any copyright or other proprietary notations from the materials</li>
                    <li>You must not transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                  <p className="text-gray-700 mb-3">When creating an account with us, you must provide accurate and complete information. You are responsible for:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                    <li>Ensuring that you exit from your account at the end of each session</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
                  <p className="text-gray-700">
                    The platform and its original content, features, and functionality are owned by Oracis AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. User Content</h2>
                  <p className="text-gray-700 mb-3">Our platform allows you to post, link, store, share and otherwise make available certain information, text, or other material. You are responsible for the content you post, and you retain any ownership rights you have in the content you post. By posting content, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the platform.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Prohibited Uses</h2>
                  <p className="text-gray-700 mb-3">You may use our platform only for lawful purposes and in accordance with these Terms. You agree not to use the platform:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>In any way that violates any applicable law or regulation</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                    <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
                  <p className="text-gray-700">
                    We may terminate or suspend your account and bar access to the platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                  <p className="text-gray-700">
                    In no event shall Oracis AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="mt-2 text-gray-700">
                    <p>Email: legal@oracis.ai</p>
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