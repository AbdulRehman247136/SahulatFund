import { useRef, useState } from "react";
import { Upload, Shield } from "lucide-react";

export default function DocumentsStep({ formData, setFormData }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Save to parent formData
    setFormData((prev) => ({
      ...prev,
      proofDocument: file || null,
    }));
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[var(--color-primary)/0.1] rounded-lg">
          <Shield className="w-7 h-7" style={{ color: "var(--color-primary)" }} />
        </div>
        <h2 className="text-2xl font-bold">Upload Proof Document (Optional)</h2>
      </div>

      {/* Info Banner */}
      <div className="bg-[var(--color-primary)/0.05] border border-[var(--color-primary)/0.2] rounded-lg p-4">
        <p className="text-sm" style={{ color: "var(--color-primary)" }}>
          You may upload any supporting document (medical proof, bills, estimate letter, etc).  
          This is optional but helps us verify your campaign faster.
        </p>
      </div>

      {/* Upload Box */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition cursor-pointer"
        onClick={openFileDialog}
      >
        <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />

        {selectedFile ? (
          <p className="text-lg font-medium text-green-600">
            Uploaded: {selectedFile.name}
          </p>
        ) : (
          <>
            <p className="text-lg font-medium">Upload a Proof Document (Optional)</p>
            <p className="text-sm text-gray-500 mt-2">Click to upload</p>
            <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
          </>
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
        />
      </div>

      {/* Bottom Info Box */}
      <div className="bg-[var(--color-primary)/0.05] border border-[var(--color-primary)/0.2] rounded-lg p-4 text-center">
        <p className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
          What happens next?
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--color-primary)/0.8" }}>
          If uploaded, our team reviews your document within 48 hours.
        </p>
      </div>
    </div>
  );
}
