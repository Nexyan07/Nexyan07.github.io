import { useState, useEffect } from 'react';

export default function ImageInput({ name, form, onInputChange }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setPreview(URL.createObjectURL(event.target.files[0]));
        onInputChange(event); // Call the onInputChange function to update the form state
    }

    const handleRemoveImage = () => {
        setFile(null);
        setPreview(null);
        if (form.imagePreview) {
            onInputChange({ target: { name: 'imagePreview', value: '' } }); // Reset the imagePreview in form state
        }
    }

    return (
        <div className="sm:col-span-2 relative">
            <div id="drop-area" className={`w-full p-6 border-4 text-center sm:flex justify-around ${file || form.imagePreview ? 'border-solid border-green-500' : 'border-dashed border-gray-400'}`}>
                <div className={`flex flex-col items-center justify-center`}>
                    {(!file && !preview && !form.imagePreview) && <label htmlFor={name} className="text-xl font-medium text-white w-full h-full absolute z-10 flex inset-0 items-center justify-center">Photo</label>}
                    <input onChange={handleFileChange} accept='image/*' id={name} name={name} type="file" className="hidden" />
                    <p className="text-white"> 
                        {file && <span className="text-blue-500 cursor-pointer">{file.name}</span>}
                        {form.imagePreview && <span className="text-blue-500 cursor-pointer">{form.imagePreview.split('/').pop()}</span>}
                    </p>
                    {(file || preview || form.imagePreview) && <button onClick={handleRemoveImage} type="button" className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-700 z-10">Remove Image</button>}
                </div>
                {(file || preview || form.imagePreview) && <img src={form.imagePreview !== '' ? form.imagePreview : preview} className="h-32 w-auto object-cover rounded-md" alt="Uploaded Image" />}
            </div>
        </div>
    )
}