import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropType from 'prop-types';

const Blogs = ({ handleBookmarks, handleTotalTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <>
            <div className="w-2/3">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleTotalTime={handleTotalTime}></Blog>)
                }
            </div>
        </>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropType.func,
    handleTotalTime: PropType.func
}

export default Blogs;