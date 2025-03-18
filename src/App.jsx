import { Routes, Route } from "react-router-dom";
import M from "./components/Analytics/Main";
// import Menu from "./components/Menu/Menu";
// import Header from "./Analytics/Headers/Haeder";

export default function App() {
  return(
    <div>

    <Routes>
      <Route path="/RadTrak" element={<M />}/>
    </Routes>
    </div>
  )  
}
