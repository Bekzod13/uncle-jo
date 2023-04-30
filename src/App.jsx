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
  const [modal, setModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const contextValue = {
    lang,
    setLang,
    data,
    modal, 
    setModal,
    modalMessage, 
    setModalMessage
  };
  return (
    <Context.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Context.Provider>
  )
}

export default App;
