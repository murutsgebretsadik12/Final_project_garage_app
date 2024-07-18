import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './componenets/ProtectedRoute'
import Layout from './componenets/Layout'
import './assets/styles/color.css';
import Order from './pages/Order'




function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}


function App() {

  return (
   <BrowserRouter>
     <Layout>
        <Routes>
          <Route path="/" element={
                      <ProtectedRoute roles={['Admin', 'Manager', 'Employee']}>
                           <Home/>
                        </ProtectedRoute>
                     }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="/order" element={
            <ProtectedRoute roles={['Admin', 'Manager']}>
                <Order />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
   </BrowserRouter>
  )
}

export default App
