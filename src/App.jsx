import { Route, Routes } from "react-router-dom";

// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Context from "./context/Context";


function App() {
  const contextVlaue = {
    lang: "uz"
  };
  return (
    <Context.Provider value={contextVlaue}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Context.Provider>
  )
}

export default App
