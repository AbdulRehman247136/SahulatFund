"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { HiCheck } from "react-icons/hi"; // Only react-icons for checkmark
import { Button } from "@/components/ui/button";
import BasicInfoStep from "@/components/campaign/BasicInfoStep";
import StoryStep from "@/components/campaign/StoryStep";
import FinancialStep from "@/components/campaign/FinancialStep";
import DocumentsStep from "@/components/campaign/DocumentsStep";
import Nav from "@/components/Nav";

const steps = [
  { name: "Basic Info", component: BasicInfoStep },
  { name: "Your Story", component: StoryStep },
  { name: "Financial", component: FinancialStep },
  { name: "Documents", component: DocumentsStep },
];

export default function CreateCampaign() {
  const [currentStep, setCurrentStep] = useState(0); // Example: Step 3 active (0-indexed)
  const [formData, setFormData] = useState({});
  console.log("Form Data:", formData);
  console.log("Current Step:", currentStep);

  const CurrentComponent = steps[currentStep].component;

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const progress = ((currentStep + 1) / steps.length) * 100;

  // -------------------------------
  // NEW FUNCTION TO SAVE DATA TO FILE
  // -------------------------------
  const saveToFile = async () => {
    try {
      const res = await fetch("/api/save-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentStep,
          formData,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      console.log("Saved:", data);
      alert("Campaign data saved successfully!");
    } catch (err) {
      console.error("Failed to save campaign:", err);
      alert("Failed to save campaign data!");
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 py-8 px-4 mt-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <img src="./logo9.png" alt="Logo" className="w-16 h-16 -ml-4" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Create Your Campaign</h1>
            <p className="text-gray-600 mt-2">Tell your story and get the support you need</p>
          </div>

          {/* New Progress + Step Pills Section */}
          <div className="mb-12">
            {/* Top Labels */}
            <div className="flex justify-between items-center mb-5 text-sm">
              <span className="text-gray-600 font-medium">
                Step {currentStep + 1} of {steps.length}
              </span>
              <span className="text-gray-600 font-semibold">
                {Math.round(progress)}% complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-8">
              <div
                className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-500 ease-out rounded-full"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
              <div
                className="absolute left-0 top-0 h-full bg-[var(--color-primary)] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step Pills */}
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center py-3 px-6 rounded-full text-sm font-medium transition-all shadow-sm ${
                    index < currentStep
                      ? "bg-green-100 text-green-700 border-2 border-green-300"
                      : index === currentStep
                      ? "bg-[var(--color-primary)] text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {index < currentStep ? (
                    <span className="flex items-center gap-2">
                      <HiCheck className="w-5 h-5" />
                      {step.name}
                    </span>
                  ) : (
                    step.name
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <CurrentComponent formData={formData} setFormData={setFormData} />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={prev}
                disabled={currentStep === 0}
                className="px-8 py-6 text-base"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              {/* -------------------------------
                  CHANGED THIS BUTTON TO CALL saveToFile()
              ------------------------------- */}
              {currentStep === steps.length - 1 ? (
                <Button
                  onClick={saveToFile} // <- SAVE DATA TO FILE
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 px-10 py-6 text-base font-medium"
                >
                  <HiCheck className="w-6 h-6 mr-2" />
                  Submit for Review
                </Button>
              ) : (
                <Button
                  onClick={next}
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 px-10 py-6 text-base font-medium"
                >
                  Next Step
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
