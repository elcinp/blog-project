import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useHistory } from "react-router-dom";
import woman from "../assets/woman.png";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

    fontFamily: "Girassol",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
      display:'none'
    },
    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  appBar: {
    backgroundColor: "#046582",
  },
  logo: {
    width: 40,
  },
  linkStyle: {
    textDecoration: "none",
    color: "black",
  },

  login: {
    padding: 10,
    fontSize: 20,
    color: "white",
    textDecoration: "none",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  const handleDashboard = () => {
    setAnchorEl(null);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
          <div style={{ display: "flex", flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDashboard}
            >
              <img
                src={woman}
                style={{ width: 70, borderRadius: "50% " }}
                alt="candela"
              />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Blog-App
            </Typography>
          </div>

            
          <div style={{ display: "flex", flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
            <SearchBar />
            {currentUser ? (
              <div onClick={handleMenu}>
                <img
                  src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                  style={{ width: 50, height: 50, borderRadius: "50% " }}
                  alt="profile"
                />{" "}
              </div>
            ) : (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: "60px" }} />
              </IconButton>
            )}
            
            {currentUser?.email ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/profile" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link to="/new-blog" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link to="/register" className={classes.linkStyle}>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
