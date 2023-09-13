import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='mx-20 md:flex gap-10 mt-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
