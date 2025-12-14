"use client";

import { useState, useRef } from "react";
import { Upload, Heart, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Nav from "@/components/Nav";

export default function CreateCampaign() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    story: "",
    goal: "",
    daysLeft: "30",
    category: "",
    documents: [""],
    imageUrl: "", // base64
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        imageUrl: reader.result, // base64 string
      }));
      setPreviewUrl(URL.createObjectURL(file));
    };

    reader.readAsDataURL(file);
  };

  const addDocument = () => {
    setFormData((prev) => ({ ...prev, documents: [...prev.documents, ""] }));
  };

  const updateDocument = (i, value) => {
    const copy = [...formData.documents];
    copy[i] = value;
    setFormData((prev) => ({ ...prev, documents: copy }));
  };

  const removeDocument = (i) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, index) => index !== i),
    }));
  };

  const submit = async () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.story ||
      !formData.goal ||
      !formData.imageUrl
    ) {
      alert("Please fill all required fields and upload an image");
      return;
    }

    const payload = {
      title: formData.title,
      description: formData.description,
      story: formData.story,
      goal: Number(formData.goal),
      daysLeft: Number(formData.daysLeft),
      category: formData.category,
      imageUrl: formData.imageUrl, // base64
      documents: formData.documents.filter((d) => d.trim()),
    };

    try {
      const res = await fetch("http://localhost:3000/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Campaign created!");
        window.location.href = "/admin";
      } else {
        const err = await res.json();
        alert("Error: " + err.message);
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <>
      <Nav />

      <div className="min-h-screen bg-gray-50 py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Start a Campaign</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-12">

            {/* Image Upload */}
            <div>
              <Label>Campaign Photo *</Label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer"
              >
                {previewUrl ? (
                  <img src={previewUrl} className="max-h-80 mx-auto rounded-xl" />
                ) : (
                  <p>Click to upload</p>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </div>

            {/* Title */}
            <div>
              <Label>Campaign Title *</Label>
              <Input name="title" value={formData.title} onChange={handleChange} />
            </div>

            {/* Description */}
            <div>
              <Label>Short Description *</Label>
              <Textarea name="description" value={formData.description} onChange={handleChange} />
            </div>

            {/* Category */}
            <div>
              <Label>Category *</Label>
              <Input
                name="category"
                placeholder="e.g. Medical Emergency"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            {/* Days Left */}
            <div>
              <Label>Days Left *</Label>
              <Input
                name="daysLeft"
                type="number"
                value={formData.daysLeft}
                onChange={handleChange}
              />
            </div>

            {/* Story */}
            <div>
              <Label>Full Story *</Label>
              <Textarea name="story" value={formData.story} onChange={handleChange} />
            </div>

            {/* Goal */}
            <div>
              <Label>Goal *</Label>
              <Input
                name="goal"
                type="number"
                value={formData.goal}
                onChange={handleChange}
              />
            </div>

            {/* Documents */}
            <div>
              <Label>Supporting Documents</Label>
              {formData.documents.map((doc, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <Input
                    value={doc}
                    onChange={(e) => updateDocument(i, e.target.value)}
                  />
                  {formData.documents.length > 1 && (
                    <Button variant="ghost" onClick={() => removeDocument(i)}>
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </Button>
                  )}
                </div>
              ))}
              <Button onClick={addDocument}>
                <Plus className="mr-2" /> Add Document
              </Button>
            </div>

            {/* Submit */}
            <Button onClick={submit} className="w-full py-6 text-xl">
              Create Campaign
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
