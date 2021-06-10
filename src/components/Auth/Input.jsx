import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Input = ({ name, handleChange, label, type, handleShowPassword, value }) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        type={type}
        value={value}
        InputProps={
          name === "password" ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } : null
        }
      ></TextField>
    </Grid>
  );
};

export default Input;
