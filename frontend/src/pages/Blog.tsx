import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { useTheme } from "../pages/ThemeContext";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  const { theme } = useTheme();

  const containerStyle =
    theme === "light"
      ? "bg-white text-black" 
      : "bg-gray-900 text-white"; 
  if (loading || !blog) {
    return (
      <div className={`${containerStyle} min-h-screen`}>
        <Appbar />
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${containerStyle} min-h-screen`}>
      <Appbar />
      <FullBlog blog={blog} />
    </div>
  );
};
