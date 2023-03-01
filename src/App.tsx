import './App.css'

import FeedButton from './components/atoms/FeedsButton/FeedsButton'
import Search from './components/atoms/Search/Search'
import SearchDropDown from './components/Molecules/SearchDropDown/SearchDropDown'
import { Link, RouterProvider } from 'react-router-dom'
import { Route, BrowserRouter, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Navigation from './components/Organism/Navigation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route/>
    </Routes>

  )
)

export const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
