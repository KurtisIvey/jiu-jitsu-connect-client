import React, { useState } from "react";

interface ImageUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    onChange(e);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {imagePreviewUrl && (
        <img
          className="w-[220px] h-[220px] rounded-full object-cover"
          src={imagePreviewUrl}
          alt="Preview"
        />
      )}
      <label
        className="block mb-4 text-sm font-medium text-black"
        htmlFor="file_input"
      >
        Change Profile photo?
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-grey-300 
        bg-clip-padding px-3 py-[0.32rem] font-normal bg-white  text-neutral-700 transition duration-200  text-md
         ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 
         file:border-solid file:border-inherit file:bg-blue-500 file:px-3 file:py-[0.32rem] file:text-white
          file:transition file:duration-200 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]
           hover:file:bg-blue-600/70 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
        id="file_input"
      ></input>
    </div>
  );
};

export default ImageUpload;
