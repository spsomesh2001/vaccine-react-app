import * as api from "../api/index.js";

export const adminLogin = (formData, history) => async (dispatch) => {
  try {
    // log in an admin user
    const { data } = await api.adminLogIn(formData);
    dispatch({ type: "ADMIN_AUTH", data });

    // alert("Admin Authorized");

    history.push("/admin/profile");
    // history.push("/admin/vform");
  } catch (error) {
    alert("Invalid Credentials");
    console.log(error);
  }
};

export const updateVaccine = (formData, history) => async (dispatch) => {
  try {
    formData.type = formData.pid.length !== 0 ? true : false;
    // console.log(formData);
    // eslint-disable-next-line
    const { data } = await api.adminVAdd(formData);

    alert("Record Submitted");

    history.push("/admin/profile");
  } catch (error) {
    alert("Something Went Wrong!!");
    console.log(error);
  }
};
