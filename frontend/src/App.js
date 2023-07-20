import "./App.css";
import { Button } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
