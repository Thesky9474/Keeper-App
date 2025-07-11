import React from "react";
import "../styles.css";
import HighlightIcon from '@mui/icons-material/Highlight';
import { useAuth } from "../context/AuthContext";
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme } from "../context/ThemeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, CircularProgress } from "@mui/material";

function Header() {
  const { user, signOut, loading } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header-styles">
      <h1>
        <HighlightIcon className="highlight-icon" />
        Keeper App
      </h1>
      <div className="user-info">
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          user && (
            <React.Fragment>
              <AccountCircleIcon className="user-icon" />
              <span className="user-name">
                {user.displayName || user.email}
              </span>
              <Button
                variant="text"
                className="logout-button"
                onClick={signOut}
                startIcon={<LogoutIcon />}
              >
                Log Out
              </Button>
            </React.Fragment>
          )
        )}
      </div>
    </header>
  );
}

export default Header;  