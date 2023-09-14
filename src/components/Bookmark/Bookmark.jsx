import PropType from 'prop-types';

const Bookmark = ({ bookmark }) => {
    console.log(bookmark)
    return (
        <div>
            <h1 className="bg-[#FFFFFF] p-5 m-5 rounded-lg">{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropType.object
}

export default Bookmark;