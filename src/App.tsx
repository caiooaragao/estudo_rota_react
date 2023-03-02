import './App.css'

import FeedButton from './components/atoms/FeedsButton/FeedsButton'
import Search from './components/atoms/Search/Search'
import SearchDropDown from './components/Molecules/SearchDropDown/SearchDropDown'
import { Link, RouterProvider } from 'react-router-dom'
import { Route, BrowserRouter, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Navigation from './components/Organism/Navigation'
import RootLayout from './components/Molecules/RootLayout/RootLayout'
import SearchTitle from './components/atoms/SearchTitle/SearchTitle'
import NotFound from './components/Pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}>
        <Route path='item1' element={<SearchDropDown/>} />
        <Route  path='item2' element={<SearchTitle/>} />
        
      </Route>
      <Route path='*'  element={<NotFound/>}/>
    </Route>

  )
)

export const App = () => {
  return (
    <div className="App">
     
      <div>
        <RouterProvider router={router}/>
      </div>
      
    </div>
  )
}

export default App
