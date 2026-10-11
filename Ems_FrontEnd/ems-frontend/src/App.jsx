import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'


function App() {
  const [count, setCount] = useState(0)

  return(
    <>
  <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      {/* //http://localhost:3000 */}
      <Route path="/" element={<ListEmployeeComponents/>}> </Route>
     {/* //http://localhost:3000/employees */}
      <Route path="/employees" element={<ListEmployeeComponents />}></Route>

    <Route path="/add-employee" element={<EmployeeComponent/>}></Route>

    <Route path="/edit-employee/:id" element={<EmployeeComponent/> }> </Route>
    
    <Route path="/delete-employee/:id" element={<EmployeeComponent/> }> </Route>

    </Routes>
    
    
    <FooterComponent/>
</BrowserRouter>
    </>
  )
}

export default App
