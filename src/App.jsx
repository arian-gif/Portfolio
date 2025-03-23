import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import routes from './router/routes.jsx';
import Navbar from "./components/Navbar"
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
            <Navbar />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
