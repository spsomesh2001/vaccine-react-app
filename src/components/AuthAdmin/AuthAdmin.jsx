import React, { useEffect, useState } from "react";
import Input from "../Auth/Input";
import { useHistory } from "react-router-dom";
import { adminLogin } from "../../actions/admin";
import { useDispatch } from "react-redux";
import { AuthBack, AuthContainer, AuthH, AuthWrapper, FormItem } from "../Auth/AuthElements";
import { Button } from "@material-ui/core";
import adminAuthBg from "../../media/admin-auth-bg.jpg"

const AuthAdmin = () => {
  const initialState = { email: "", password: ""};

  const dispatch = useDispatch();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    setShowPassword(false);
    setFormData(initialState);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(formData, history))
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  return (
    <AuthContainer>
      <AuthBack src={adminAuthBg}></AuthBack>
      <AuthWrapper>
        <AuthH>Admin Login</AuthH>
        <form onSubmit={handleSubmit}>
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
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
          </FormItem>
        </form>
      </AuthWrapper>
    </AuthContainer>
  );
};

export default AuthAdmin;
