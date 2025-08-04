import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/movies/:id' element={<SingleMovie />}/>
      
      
      
      
      </Route>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
