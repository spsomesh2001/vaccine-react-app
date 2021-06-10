const profile = (state = { fStatus: null, sites: [] }, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      var v = {};
      if (action.vInfo) {
        v = action.vInfo;
        delete v["_id"];
        // console.log(v);
      }
      localStorage.setItem(
        "profilePage",
        JSON.stringify({ ...action.userInfo, ...v })
      );
      localStorage.setItem("fStatus", action.fStatus);
      return { ...state, fStatus: action.fStatus };

    case "FETCH_SITES":
      return { ...state, sites: action.sites };

    default:
      return state;
  }
};

export default profile;
