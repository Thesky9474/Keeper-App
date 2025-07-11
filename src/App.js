import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import HomePage from "./component/HomePage";
import PrivateRoute from "./component/PrivateRoute"; 
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
