import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./pages/hooks/context/AuthContext.jsx";
import  SocketContextProvider  from "./pages/hooks/context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
       <SocketContextProvider>

          <App />
       </SocketContextProvider>
       
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
