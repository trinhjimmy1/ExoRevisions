import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Home} from "./Components/pages/Home";
import {Contact} from "./Components/pages/Contact";

function App() {

  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/">
                      <Route index element={<Home/>} />
                      <Route path="/contact" element={<Contact/>} />
                  </Route>
              </Routes>
      </BrowserRouter>
  )
}

export default App
