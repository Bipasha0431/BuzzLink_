import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import ChatProvider from "./Context/ChatProvider";

function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/chats" element={<Chatpage />} />
          </Routes>
        </div>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App;
