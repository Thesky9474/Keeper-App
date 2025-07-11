import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./AuthForm.css";
import { useAuth } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

function Login() {
  const [identifier, setIdentifier] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading, setLoading } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    let emailToUse = identifier;

    // Try to resolve username to email
    if (!identifier.includes("@")) {
      const userDoc = await getDoc(doc(db, "users", identifier));
      if (userDoc.exists()) {
        emailToUse = userDoc.data().email;
      } else {
        setLoading(false);
        return alert("Username not found");
      }
    }

    try {
      await signInWithEmailAndPassword(auth, emailToUse, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {loading ? (
        <CircularProgress />
      ) : (
        <form className="auth-form" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <input
            type="text"
            placeholder="Username or Email"
            required
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
