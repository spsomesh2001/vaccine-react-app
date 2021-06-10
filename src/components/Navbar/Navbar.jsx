import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import {
  BWrapper,
  Logo,
  LogoWrapper,
  MobileMenu,
  NavContainter,
  NavWrapper,
  SiteName,
} from "./NavbarElements";
import siteLogo from "../../media/medical-record-logo.svg";

import { Menu, MenuOpen } from "@material-ui/icons";

const Navbar = ({ type, nm }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [lIn, setLIn] = useState(false);
  const [aOption, setAOption] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("adminProfile"))
  );

  // Mobile Menu part --------------------------------------------------------------------------------
  const [mobilemenu, setMobilemenu] = useState(false);

  const handleMobile = () => setMobilemenu(!mobilemenu);

  window.addEventListener("resize", () => {
    // console.log(window.innerWidth);
    if (window.innerWidth > 650) {
      setMobilemenu(false);
    }
  });

  // Mobile Menu part --------------------------------------------------------------------------------

  const logOut = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/auth/login");

    setUser(null);

    setLIn(false);
  };

  const aLogOut = () => {
    dispatch({ type: "ADMIN_LOGOUT" });

    history.push("/auth/admin/login");

    setAdmin(null);

    setLIn(false);
  };

  useEffect(() => {
    if (type === "user") {
      const token = user?.token;
      if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
      }
      setUser(JSON.parse(localStorage.getItem("profile")));
    } else if (type === "admin") {
      setAOption(true);
      const token = admin?.token;
      if (token) {
        const decodedToken = decode(token);

        if (decodedToken.exp * 1000 < new Date().getTime()) aLogOut();
      }
      setAdmin(JSON.parse(localStorage.getItem("adminProfile")));
    }
    setMobilemenu(false);
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (user || admin) {
      setLIn(true);
    } else {
      setLIn(false);
    }
  }, [user, admin]);

  return (
    <>
      <NavContainter>
        <NavWrapper>
          <LogoWrapper>
            <Logo src={siteLogo} alt="logo"></Logo>
            <SiteName>Vaccine App</SiteName>
          </LogoWrapper>

          {nm ? (
            <></>
          ) : (
            <MobileMenu>
              {mobilemenu ? <MenuOpen style={{fontSize: 35}} onClick={handleMobile}/> : <Menu style={{fontSize: 35}} onClick={handleMobile}/>}
            </MobileMenu>
          )}

          <BWrapper
            w={lIn}
            mobile={admin || user}
            hh={window.innerHeight}
            mobilemenu={mobilemenu}
            onClick={handleMobile}
          >
            {aOption ? (
              admin ? (
                <>
                  <Typography variant="h6" style={{ color: "var(--white)" }}>
                    {admin.user.email}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={aLogOut}
                    style={{ width: mobilemenu ? "90%" : "" }}
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <Typography
                  variant="h6"
                  style={{ color: "var(--white)"}}
                >
                  Admin Login Page
                </Typography>
              )
            ) : user ? (
              <>
                <Typography variant="h6" style={{ color: "var(--white)" }}>
                  {user.user.email}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={logOut}
                  style={{ width: mobilemenu ? "90%" : "" }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/auth/signup"
                  color="primary"
                  style={{
                    marginRight: mobilemenu ? "0" : "20px",
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "var(--white)",
                  }}
                >
                  Signup
                </Button>
                <Button
                  component={Link}
                  to="/auth/login"
                  color="primary"
                  style={{
                    marginRight: mobilemenu ? "0" : "20px",
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "var(--white)",
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </BWrapper>
        </NavWrapper>
      </NavContainter>
    </>
  );
};

export default Navbar;
