import * as api from "../api/index.js";

const requestStatus = async () => {
  const { data } = await api.getProfile();
  return data;
}

export const login = (formData, history) => async (dispatch) => {
  try {
    // log in an user
    const { data } = await api.logIn(formData);
    dispatch({type: "AUTH", data});
    
    const userInfo = await requestStatus();
    if(userInfo?.userInfo)
      dispatch({ type: "FETCH_PROFILE", fStatus: userInfo.fStatus, userInfo: userInfo.userInfo, vInfo: (userInfo?.vInfo ? userInfo.vInfo : null) });
    else
      dispatch({ type: "FETCH_PROFILE", fStatus: userInfo.fStatus, userInfo: null, vInfo: null });
    
    history.push("/profile");

  } catch (error) {
    alert("Invalid Email/Password");
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up an user
    const { data } = await api.signUp(formData);
    dispatch({type: "AUTH", data});

    const userInfo = await requestStatus();
    if(userInfo?.userInfo)
      dispatch({ type: "FETCH_PROFILE", fStatus: userInfo.fStatus, userInfo: userInfo.userInfo, vInfo: userInfo.vInfo });
    else
      dispatch({ type: "FETCH_PROFILE", fStatus: userInfo.fStatus, userInfo: null, vInfo: null });

    history.push("/profile");
    
  } catch (error) {
    alert("Invalid Email/Password");
    console.log(error);
  }
};
