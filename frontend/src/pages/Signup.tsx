import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";
import { useTheme } from "./ThemeContext"; 

export const Signup = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signup" />
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </div>
  );
};
