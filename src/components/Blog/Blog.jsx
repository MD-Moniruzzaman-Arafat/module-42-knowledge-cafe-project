import PropType from 'prop-types';
import { BiBookmark } from "react-icons/bi";

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <>
            <div className='space-y-4 mb-5'>
                <img className='w-[800px] rounded-lg' src={blog.cover_img} alt="" />
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                        <img className='w-14' src={blog.author_img} alt="" />
                        <div>
                            <h1 className='font-bold'>{blog.author_name}</h1>
                            <p className='text-[#11111199]'>{blog.posted_date}</p>
                        </div>
                    </div>
                    <p className='text-[#11111199] flex gap-2 items-center'>{`${blog.reading_time} min read `} <button><BiBookmark></BiBookmark></button></p>
                </div>
                <h1 className='font-bold text-4xl'>{blog.title}</h1>
                <p className='text-[#11111199]'>{`#${blog.tags[0]} #${blog.tags[1]} #${blog.tags[2]}`}</p>
                <a href="" className='text-[#6047EC] border-b-2 border-[#6047EC]'>Mark as read</a>
            </div>
        </>
    );
};
Blog.propTypes = {
    blog: PropType.object
}

export default Blog;