import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import blokPng from "../assets/blok.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    "& .MuiPaper-root": {
      borderRadius: "30px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 30,
      maxWidth: "500px",
    },
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(25),
    height: theme.spacing(25),
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { loginWithGoogle } = useAuth();

  const handleGoogleProvider = () => {
    loginWithGoogle();
  };

  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="center" className={classes.image}>
        <Grid item component={Paper} elevation={6} square xs={12} sm={8} md={6}>
          <Grid className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src={blokPng} style={{ width: 200 }} alt="candela" />
            </Avatar>
            <Typography className={classes.header} component="h1" variant="h5">
              ── Register ──
            </Typography>
            <div className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
              />

              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Register
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleGoogleProvider}
                  className={classes.googleBtn}
                >
                  With
                  <img
                    src={googlePng}
                    alt="google"
                    className={classes.googleImg}
                  />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;