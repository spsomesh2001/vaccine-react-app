import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FForm from "./FForm";
import PPage from "./PPage";

const Profile = () => {
  
  const history = useHistory();

  const [fT, setFT] = useState(JSON.parse(localStorage.getItem("fStatus")));
  const [u, setU] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const existingUsr = u?.user;
    if (!existingUsr) {
      history.push("/auth/login");
    }
    setFT(JSON.parse(localStorage.getItem("fStatus")));
    setU(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {fT ? <PPage /> : <FForm/>}
    </>
  );
};

export default Profile;
