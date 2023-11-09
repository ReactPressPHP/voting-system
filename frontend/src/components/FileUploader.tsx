import { useState } from "react";

type AllowedTypes = {
  [key: string]: string[];
};

type Props = {
  allowedTypes: AllowedTypes;
  onFileUpload: (file: File) => void;
};

const FileUploader = ({ allowedTypes, onFileUpload }: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      const fileExtension = file.name.split(".").pop().toLowerCase();
      const allowedTypeKeys = Object.keys(allowedTypes);

      let isValidType = false;

      for (const type of allowedTypeKeys) {
        const allowedExtensions = allowedTypes[type];
        if (allowedExtensions.includes(`.${fileExtension}`)) {
          isValidType = true;
          break;
        }
      }

      if (isValidType) {
        setSelectedFile(file);
        setError("");
      } else {
        setSelectedFile(null);
        setError(
          `Invalid file type. Allowed types: ${allowedTypeKeys.join(", ")}`
        );
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      setError("Please select a valid file.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} name="cover_image" />
      <button onClick={handleUpload} className="bg-accent p-3 rounded-xl">
        Upload
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default FileUploader;
