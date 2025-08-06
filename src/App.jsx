import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import SingleMovie from "./pages/SingleMovie"
import Notfound from "./component/Notfound"
import { GlobalProvider } from "./context/GlobalContext"



function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              <Route path='/' element={<HomePage />} />
              <Route path='/movies/:id' element={<SingleMovie />} />

              <Route path='*' element={<Notfound />} />


            </Route>
          </Routes>

        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
