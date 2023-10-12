import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  );
}

export default App;
