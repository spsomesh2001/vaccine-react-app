import React from "react";
import { TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

var styles = {
  "item-container": {
    margin: "10px 1% 10px 3%",
    width: "550px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "item-span" :{
    width: "250px"
  },
  "item-label": {
    // width: "200px",
    fontSize: "1.05rem",
    fontWeight: "700"
  },
  txtH: {
    width: "75%",
  },
};

const Input = ({ name, handleChange, label, type, value, d , sText, nReq}) => {
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    if (type === "date") {
      setMaxDate((d.getFullYear() - 18) + "-" + ((d.getMonth() === 11 || d.getMonth() === 12) ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)) + "-" + d.getDate());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div style={styles["item-container"]}>
      <span style={styles["item-span"]}>
      <label htmlFor={name} style={styles["item-label"]}>{label}</label>
      {sText && <p>{sText}</p>}
      </span>
      <TextField
        name={name}
        id={name}
        onChange={handleChange}
        variant="outlined"
        required={nReq ? false : true}
        type={type}
        value={value}
        style={styles.txtH}
        InputProps={
          type === "date"
            ? { inputProps: { min: "1950-01-01", max: maxDate } }
            : null
        }
      ></TextField>
    </div>
  );
};

export default Input;
