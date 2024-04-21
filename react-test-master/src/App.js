import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>

        <Route exact path="/">
          {user ? <Home /> : <Navigate to="/register" />}
        </Route>

        <Route path="/register">
          {!user ? <Register /> : <Navigate to="/" />}
        </Route>

        <Route path="/login">
          {!user ? <Login /> : <Navigate to="/" />}
        </Route>
        
        {user && (
          <Route path="/items">
            <Home type="Items" />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
