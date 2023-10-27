import { Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import UserProfile from './pages/UserProfile'
import Home from './pages/Home'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>}></Route>
      </Routes>
    </>
  )
}

export default App
