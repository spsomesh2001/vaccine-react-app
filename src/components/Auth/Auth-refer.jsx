import React, { useEffect, useState } from "react";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import Input from "./Input";
import { Link, useHistory } from "react-router-dom";
import { login, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";



const Auth = ({ type }) => {
  const initialState = { email: "", password: "", confirmPassword: "" };

  const dispatch = useDispatch();
  const history = useHistory();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (type === "login") {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(formData, history));
    } else {
      dispatch(login(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchOption = () => {
    setIsSignUp((p) => !p);
    
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Login"}</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              handleChange={handleChange}
              label="Email"
              type="email"
            ></Input>
            <Input
              name="password"
              handleChange={handleChange}
              label="Password"
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input>
            {isSignUp && (
              <Input
                name="confirmPassword"
                handleChange={handleChange}
                label="Re-enter Password"
                type="password"
              ></Input>
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              {isSignUp ? (
                <h5>
                  Already registered?{" "}
                  <Link to="/auth/login" onClick={switchOption}>
                    Login
                  </Link>
                </h5>
              ) : (
                <h5>
                  Not registered yet?{" "}
                  <Link to="/auth/signup" onClick={switchOption}>
                    Sign Up
                  </Link>
                </h5>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
