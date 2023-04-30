import { Route, Routes } from "react-router-dom";
import data from './lang/database.json';

// import pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Context from "./context/Context";
import { useState } from "react";
import Location from "./components/Location";


function App() {
  const [lang, setLang] = useState(1);
  const contextVlaue = {
    lang,
    setLang,
    data
  };
  return (
    <Context.Provider value={contextVlaue}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/loc" element={<Location/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Context.Provider>
  )
}

export default App;
