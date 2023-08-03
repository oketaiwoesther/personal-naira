import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <div>
      
      <Outlet />
      <Navbar/>
      <Footer/>
    
    </div>
  )
}
