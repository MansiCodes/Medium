import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { useTheme } from "./ThemeContext";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const { theme } = useTheme(); 

    const containerStyle =
        theme === "light"
            ? "bg-white text-black"
            : "bg-black text-white";

    
    if (loading) {
        return (
            <div className={`${containerStyle} min-h-screen`}>
                <Appbar />
                <div className="flex justify-center">
                    <div>
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${containerStyle} min-h-screen`}>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name || "Anonymous"}
                                title={blog.title}
                                content={blog.content}
                                publishedDate={"2nd Feb 2024"} 
                            />
                        ))
                    ) : (
                        <div>No blogs found.</div>
                    )}
                </div>
            </div>
        </div>
    );
};
