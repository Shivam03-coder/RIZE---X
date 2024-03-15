import "./App.css";
import { useContext } from "react";
import ChatPage from "./components/ChatPage";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ModalBox from "./components/Modal";
import Private from "./Routes/Private";
BrowserRouter;

function App() {
  return (
    <div className="App bg-Dark">
      <Navbar />
      <ModalBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/chatbox"
          element={
            <Private>
              <ChatPage />
            </Private>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
