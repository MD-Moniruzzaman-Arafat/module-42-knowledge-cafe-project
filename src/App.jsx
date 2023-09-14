import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [totalTime, setTotalTime] = useState(0)

  const handleBookmarks = (book) => {
    // console.log(book)
    const bookMark = [...bookmarks, book];
    setBookmarks(bookMark);
    // console.log(book)
  }

  const handleTotalTime = (id, time) => {
    setTotalTime(totalTime + time)

    const removeBookmark = bookmarks.filter(bookmark => bookmark.id != id)
    setBookmarks(removeBookmark);
  }

  return (
    <>
      <Header></Header>
      <main className='mx-20 md:flex gap-10 mt-5'>
        <Blogs handleBookmarks={handleBookmarks} handleTotalTime={handleTotalTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} totalTime={totalTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
