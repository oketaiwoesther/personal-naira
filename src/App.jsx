import React from 'react'
import HomeIndex from './pages/HomeIndex'

const App = () => {
  return (
    <div>
      <HomeIndex />

    </div>
  )
}

export default App

























// import { 
//   createBrowserRouter, 
//   createRoutesFromElements, 
//   Route, 
//   RouterProvider 
// } from 'react-router-dom'

// // layouts and pages
// import RootLayout from './layouts/RootLayout'
// import Create from './pages/Create'
// import Profile from './pages/Profile'

// import HomeIndex from './pages/HomeIndex'

// // router and routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<HomeIndex />} />
//       <Route path="create" element={<Create />} />
//       <Route path="profile" element={<Profile />} />
//     </Route>
//   )
// )

// function App() {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App
