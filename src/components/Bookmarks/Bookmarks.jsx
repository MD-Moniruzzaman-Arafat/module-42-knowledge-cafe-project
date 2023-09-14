import PropType from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({ bookmarks, totalTime }) => {
    console.log(totalTime)
    // console.log(bookmarks)
    // let totalTime = 0;
    // bookmarks.map(bookmark => totalTime = totalTime + bookmark.reading_time)
    return (
        <div className="w-1/3">
            <h1 className="font-bold text-[#6047EC] text-2xl border text-center p-4 rounded-lg mb-5">Spent time on read : {totalTime} min</h1>
            <div className='bg-[#1111110D] text-center font-bold text-2xl rounded-lg p-5'>
                <h1>Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropType.array,
    totalTime: PropType.number
}

export default Bookmarks;