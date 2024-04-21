import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
  <Router>
    <Routes>
     
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects/>} />
        <Route path='*' element={<Error />} />
      </Route> 

    </Routes>
  </Router>
  );
}

export default App;
