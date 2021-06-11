import React, { useEffect, useState } from "react";
import Input from "./Input";
import { Link, useHistory } from "react-router-dom";
import { login, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { AuthBack, AuthContainer, AuthH, AuthWrapper, FormCon, FormItem } from "./AuthElements";
import { Button } from "@material-ui/core";
import authBg from "../../media/auth-backgd.jpg"

const AuthMy = ({ type }) => {
  const initialState = { email: "", password: "", confirmPassword: "" };

  const dispatch = useDispatch();
  const history = useHistory();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const [h, setH] = useState(window.innerHeight);

  const heightcal = () => {
    setH(window.innerHeight);
    // console.log(window.innerHeight);
  };

  window.addEventListener("resize", heightcal);

  useEffect(() => {
    if (type === "login") {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
    setShowPassword(false);
    setFormData(initialState);
    // eslint-disable-next-line
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

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchOption = () => {
    setIsSignUp((p) => !p);

    setShowPassword(false);
  };

  return (
    <AuthContainer h={h - 60}>
      <AuthBack src={authBg}></AuthBack>
      <AuthWrapper>
        <AuthH>{isSignUp ? "Sign Up" : "Login"}</AuthH>
        <FormCon onSubmit={handleSubmit}>
          <FormItem>
            <Input
              name="email"
              handleChange={handleChange}
              label="Email"
              type="email"
              value={formData.email}
            ></Input>
          </FormItem>
          <FormItem>
            <Input
              name="password"
              handleChange={handleChange}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              handleShowPassword={handleShowPassword}
            ></Input>
          </FormItem>
          <FormItem>
            {isSignUp && (
              <Input
                name="confirmPassword"
                handleChange={handleChange}
                label="Re-enter Password"
                type="password"
                value={formData.confirmPassword}
              ></Input>
            )}
          </FormItem>
          <FormItem>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{background:"var(--royal-blue-dark)"}}>
              {isSignUp ? "Sign Up" : "Login"}
            </Button>
          </FormItem>
          <FormItem>
            {isSignUp ? (
              <h5 style={{ textAlign: "end" }}>
                Already registered?{" "}
                <Link to="/auth/login" onClick={switchOption}>
                  Login
                </Link>
              </h5>
            ) : (
              <h5 style={{ textAlign: "end" }}>
                Not registered yet?{" "}
                <Link to="/auth/signup" onClick={switchOption}>
                  Sign Up
                </Link>
              </h5>
            )}
          </FormItem>
        </FormCon>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default AuthMy;
