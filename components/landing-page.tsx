"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Zap, Globe, Lock, BarChart } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const singleVendorResponse = {
  IDV: [
    {
      vendor: "Trulioo",
      liveness_detection_status: true,
      face_match_status: true,
      face_match_score: 80,
    },
  ],
};

const multiVendorResponse = {
  Sanctions: [
    {
      vendor: "LexisNexis",
      match_result: false,
      target_name: "John Doe",
      target_dob: "1982-02-11",
      name_match_score: "100%",
      overall_match_score: "20%",
      dob_match_score: "0%",
      address_match_score: "10%",
    },
    {
      vendor: "SymphonyAI",
      review_recommendation: false,
      false_positive_score: "95%",
      ai_match_explanation:
        "Although the user and the target have 100% matches in full name and DOB, the date-of-birth is different and no other risk factors from the user's identity verification indicate high likelihood of fraud.",
    },
  ],
  PEP: [
    {
      vendor: "LexisNexis",
      match_result: true,
      match_name_score: "100%",
      target_name: "John Doe",
      datasets: "PACER",
      target_dob: "1990-01-01",
    },
    {
      vendor: "SymphonyAI",
      review_recommendation: false,
      false_positive_score: "75%",
      ai_match_explanation:
        "Although the user and the target PEP have 100% matches in both full name and DOB, John Doe is a common name and there are more than 50 individuals currently in the US with this name and date-of-birth. Multiple high-fidelity data sources indicate the target held residence in Texas from 2010-2020 whereas the user lived in New York during this time.",
    },
  ],
  EDP: [
    {
      vendor: "Trulioo",
      record_status: "match",
      address1_matched: "143 Barry St, New York, NY, 10010",
      address1_matched_dates: ["2021-10-01", "2022-06-31"],
      address2_matched: "123 Main St. Unit 1, New York, NY, 10001",
      address2_matched_dates: ["2022-12-01", "2024-06-31"],
      is_deceased: false,
    },
    {
      vendor: "Equifax",
      trust_score: 85,
      device_score: 60,
      reason_codes: ["IP-address-mismatch"],
    },
    {
      vendor: "LexisNexis InstantID",
      identity_num_match: true,
    },
  ],
  IDV: [
    {
      vendor: "Trulioo",
      liveness_detection_status: true,
      face_match_status: true,
      face_match_score: 80,
    },
    {
      vendor: "Onfido",
      result: "clear",
      sub_result: "clear",
      document_chip_verification: true,
      age_validation: "over_18",
      document_expiration: "2028-01-16",
      digital_tampering: "no_indicators",
      police_record: false,
    },
  ],
};

export function LandingPageComponent() {
  const [isMultiVendor, setIsMultiVendor] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen bg-white text-gray-900 ${inter.className}`}
    >
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <div className="flex items-center gap-4 w-full max-w-7xl mx-auto">
          <span className="text-xl font-bold">Verus</span>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4"
              href="#platform"
            >
              Platform
            </a>
            <a
              className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4"
              href="#demo"
            >
              Demo
            </a>
            <a
              className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium hover:text-gray-600 hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unified Identity Verification Platform
                </h1>
                <div className="space-y-4">
                  <p className="mx-auto max-w-[700px] text-gray-800 md:text-2xl lg:text-3xl font-semibold">
                    One Integration For All Identity Needs
                  </p>
                  <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                    Integrate once, unlock multi-vendor access and smart fraud
                    prevention signals.
                  </p>
                </div>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-gray-900 text-white hover:bg-gray-700"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100"
                >
                  Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="platform"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Simplify Identity Verification
                </h2>
                <p className="text-gray-600">
                  Reduce integration time from months to minutes. Enable
                  seamless geographic and industry expansion with our unified
                  platform.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <Zap className="w-12 h-12 mb-4 text-gray-600" />
                    <h3 className="font-bold mb-2">Fast Integration</h3>
                    <p className="text-sm text-gray-600">
                      Single integration with comprehensive documentation and
                      SDKs
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Globe className="w-12 h-12 mb-4 text-gray-600" />
                    <h3 className="font-bold mb-2">Global Coverage</h3>
                    <p className="text-sm text-gray-600">
                      Support for multiple vendors across different regions
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Lock className="w-12 h-12 mb-4 text-gray-600" />
                    <h3 className="font-bold mb-2">Global Compliance</h3>
                    <p className="text-sm text-gray-600">
                      See why regulators love us
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <BarChart className="w-12 h-12 mb-4 text-gray-600" />
                    <h3 className="font-bold mb-2">Analytics</h3>
                    <p className="text-sm text-gray-600">
                      Real-time monitoring and performance metrics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See it in Action
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the power of our unified API. Toggle between single
                  and multi-vendor responses to see how simple it is with just
                  one integration.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-8">
              <div className="mb-4 flex justify-center space-x-4">
                <Button
                  onClick={() => setIsMultiVendor(!isMultiVendor)}
                  className="bg-gray-900 text-white hover:bg-gray-700"
                >
                  {isMultiVendor
                    ? "Switch to Single Vendor"
                    : "Switch to Multi-Vendor"}
                </Button>
                <Button
                  onClick={() => setShowConfig(!showConfig)}
                  className="bg-gray-900 text-white hover:bg-gray-700"
                >
                  {showConfig ? "Hide Configuration" : "Show Configuration"}
                </Button>
              </div>
              {showConfig && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-2">
                    Vendor Configuration
                  </h3>
                  <pre className="text-sm overflow-x-auto bg-gray-100 p-4 rounded">
                    {JSON.stringify(
                      {
                        IDV: ["Trulioo", "Onfido"],
                        Sanctions: ["LexisNexis", "SymphonyAI"],
                        PEP: ["LexisNexis", "SymphonyAI"],
                        EDP: ["Trulioo", "Equifax", "LexisNexis InstantID"],
                      },
                      null,
                      2
                    )}
                  </pre>
                  <p className="mt-2 text-gray-600">
                    Easily configure multiple vendors for each verification type
                    through our dashboard or API.
                  </p>
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">User GET Request</h3>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(
                      {
                        full_name: "John Doe",
                        nationality: "US",
                        date_of_birth: "1990-01-01",
                        identity_type: "passport",
                        identity_number: "123456789",
                        country_of_residence: "US",
                        user_provided_address: {
                          street: "123 Main St",
                          city: "New York",
                          state: "NY",
                          postal_code: "10001",
                          country: "US",
                        },
                        user_image: "base64_encoded_selfie_image_data",
                        id_image: "base64_encoded_id_image_data",
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {isMultiVendor ? "Multi-Vendor" : "Single Vendor"} Response
                  </h3>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    {JSON.stringify(
                      isMultiVendor
                        ? multiVendorResponse
                        : singleVendorResponse,
                      null,
                      2
                    )}
                  </pre>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600">
                With Verus, you get a unified response format regardless of the
                number of vendors. One integration, multiple possibilities.
              </p>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Core Features
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides comprehensive identity verification
                  solutions with intelligent routing and real-time analytics.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Intelligent Routing</h3>
                      <p className="text-gray-600">
                        Easily implement vendor redundancy and fallback options.
                        Pick and choose features from various vendors, or
                        experiment with new features without additional
                        development time.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Single Integration - Multiple Vendors
                      </h3>
                      <p className="text-gray-600">
                        Say goodbye to the complexities of managing multiple API
                        integrations and maintenance tasks. Connect to a wide
                        array of vendors through a single, normalized API.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Data Normalization</h3>
                      <p className="text-gray-600">
                        No custom integrations. Always get normalized responses
                        across one or many vendors.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Smart Signals</h3>
                      <p className="text-gray-600">
                        Risk-based decisions with geographic and cost
                        optimization.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow">
                <div className="h-full w-full flex items-center justify-center">
                  <Shield className="h-24 w-24 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to enhance your identity verification process? Contact
                  us today.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-lg space-y-6 mt-8">
              <form
                className="space-y-4"
                action="https://formspree.io/f/meoqkdzl"
                method="POST"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="First name"
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Last name"
                      className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    name="message"
                    className="min-h-[100px] bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    placeholder="Message"
                  />
                </div>
                <Button
                  className="w-full bg-gray-900 text-white hover:bg-gray-700"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          © 2024 Verus. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-gray-900"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-gray-900"
            href="#"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
