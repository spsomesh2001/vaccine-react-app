const admin = (state = { authAdminData: null }, action) => {
  switch (action.type) {
    case "ADMIN_AUTH":
      localStorage.setItem("adminProfile", JSON.stringify({ ...action?.data }));

      return { ...state, authAdminData: action?.data };

    case "ADMIN_LOGOUT":
      localStorage.clear();
      return { ...state, authAdminData: null };

    default:
      return state;
  }
};

export default admin;