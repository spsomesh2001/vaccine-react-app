import * as api from "../api/index";

const requestStatus = async () => {
  const { data } = await api.getProfile();
  return data;
};

export const formfill = (formFill, history) => async (dispatch) => {
  try {
    // eslint-disable-next-line
    const { data } = await api.formFill(formFill);
    // console.log(data);

    const userInfo = await requestStatus();
    dispatch({ type: "FETCH_PROFILE", fStatus: userInfo.fStatus, userInfo: (userInfo?.userInfo ? userInfo.userInfo : null), vInfo: (userInfo?.vInfo ? userInfo.vInfo : null)});

    alert("Registration Form Submitted");
    history.push("/auth/login");
  } catch (error) {
    console.log(error);
    alert("Not able to submit");
    history.push("/profile");
  }
};

export const getSites = (locForm) => async (dispatch) => {
  try {
    const { data } = await api.locInfo(locForm);

    // console.log(data);
    dispatch({type: "FETCH_SITES", sites: data.sites});

  } catch(error) {
    console.log(error);
    alert("Something went wrong!");
  }
}