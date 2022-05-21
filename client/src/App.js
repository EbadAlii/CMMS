import { useState } from "react";
import Navbar from "./components/Navbar";
import Startup from "./components/Start";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Startup />
      <Navbar isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
