import PropType from 'prop-types';

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
                    <p className='text-[#11111199]'>{`${blog.reading_time} min read`}</p>
                </div>
                <h1 className='font-bold text-4xl'>{blog.title}</h1>
                <p className='text-[#11111199]'>{`#${blog.tags[0]} #${blog.tags[1]} #${blog.tags[2]}`}</p>
                <a href="">Mark as read</a>
            </div>
        </>
    );
};
Blog.propTypes = {
    blog: PropType.object
}

export default Blog;