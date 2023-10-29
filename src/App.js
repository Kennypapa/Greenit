import { useEffect } from "react";
import { Outlet } from "react-router-dom";
  
function App() {

  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
