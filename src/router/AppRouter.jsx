import { BrowserRouter as Router, Route,  Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Navbar from "../components/Navbar"


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>

    </Router>

    
  )
}

export default AppRouter