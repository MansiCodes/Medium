import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { useTheme } from "../pages/ThemeContext"; 

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { theme } = useTheme(); 

  
    const containerStyle =
        theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white"; 
    const inputStyle =
        theme === "light"
            ? "bg-gray-50 border-gray-300 text-gray-900 border-2" 
            : "bg-black border-white text-white border-2"; 
    const buttonStyle =
        theme === "light"
            ? "bg-gray-50 border-gray-300 text-gray-900 border-2"
            : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-900";
    const editorStyle =
        theme === "light"
            ? "bg-gray-50 text-gray-900 border-gray-300 border-2 " 
            : "bg-black text-white border-white border-2 "; 

    return (
        <div className={`${containerStyle} min-h-screen`}>
            <Appbar />
            <div className="flex justify-center w-full pt-8">
                <div className="max-w-screen-lg w-full">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className={`w-full p-2.5 rounded-lg ${inputStyle}`}
                        placeholder="Title"
                    />

                    <TextEditor
                        onChange={(e) => setDescription(e.target.value)}
                        editorStyle={editorStyle} 
                    />
                 
                    <button
                        onClick={async () => {
                            const response = await axios.post(
                                `${BACKEND_URL}/api/v1/blog`,
                                {
                                    title,
                                    content: description,
                                },
                                {
                                    headers: {
                                        Authorization: localStorage.getItem("token"),
                                    },
                                }
                            );
                            navigate(`/blog/${response.data.id}`);
                        }}
                        type="submit"
                        className={`mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 ${buttonStyle}`}
                    >
                        Publish post
                    </button>
                </div>
            </div>
        </div>
    );
};

function TextEditor({
    onChange,
    editorStyle,
}: {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    editorStyle: string; 
}) {
    return (
        <div className="mt-2">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between">
                    <div className="my-2 rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className={`focus:outline-none block w-full px-2 py-2 text-sm pl-2 ${editorStyle}`}
                            placeholder="Write an article..."
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


