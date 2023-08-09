import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;

// import { Outlet } from "react-router-dom"
// import Nzavbar from "../components/navbar/Navbar"
// import Footer from "../components/Footer"

// export default function RootLayout({children}) {
//   return (
//     <div>

//       <Outlet />
//       <Navbar/>
//       {children}
//       <Footer/>

//     </div>
//   )
// }
