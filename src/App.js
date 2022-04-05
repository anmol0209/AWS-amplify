import { Routes, Route } from 'react-router-dom'
import './App.scss'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Layout from './component/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
