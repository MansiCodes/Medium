import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@mansiyadav/medium-common2";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useTheme } from "../pages/ThemeContext"; 

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  const { theme } = useTheme(); 

  async function sendRequest() {
    console.log(
      "Sending request to:",
      `${BACKEND_URL}/api/v1/user/${
        type === "signup" ? "signup" : "signin"
      }`
    );
    console.log("Request Payload:", postInputs);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error while signing up");
      
    }
  }

  return (
    <div
      className={`h-screen flex justify-center flex-col ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-center">
        <div>
          <div className="px-10">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="pt-8">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Mansi Yadav..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
                theme={theme}
              />
            ) : null}
            <LabelledInput
              label="Username"
              placeholder="mansi@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
              theme={theme}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
              theme={theme}
            />
            <button
              onClick={sendRequest}
              type="button"
              className={`mt-8 w-full text-white ${
                theme === "dark"
                  ? "bg-gray-500 text-white hover:bg-gray-700"
                  : "bg-white text-black hover:bg-black"
              } focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5`}
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  theme: string;
}

function LabelledInput({ label, placeholder, onChange, type, theme }: LabelledInputType) {
  return (
    <div>
      <label
        className={`block mb-2 text-sm font-semibold pt-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className={`${
          theme === "dark" ? "bg-white text-black" : "bg-gray-50 text-black"
        } border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
