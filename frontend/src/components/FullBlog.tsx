import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";
import { useTheme } from "../pages/ThemeContext";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const { theme } = useTheme();

  const containerStyle =
    theme === "light" ? "bg-white text-black" : "bg-black text-white";

  return (
    <div className={`${containerStyle} min-h-screen`}>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 px-4 w-full max-w-screen-xl pt-12">
          <div className="lg:col-span-8 col-span-1">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            
            <div className="flex items-center pt-4">
              <div className="pr-4 ">
                <Avatar name={blog.author.name || "Anonymous"} theme={theme} /> 
              </div>
              <div className="text-xl font-bold">{blog.author.name || "Anonymous"}</div>
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};



