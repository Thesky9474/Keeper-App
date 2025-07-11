import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import HomePage from "./component/HomePage"; // This is your main note-taking page
import PrivateRoute from "./component/PrivateRoute"; // Protect routes
import { useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext"; // Import ThemeProvider

function App() {
  const { user } = useAuth();

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
