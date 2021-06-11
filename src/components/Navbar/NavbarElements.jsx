import styled from "styled-components";

export const NavContainter = styled.div`
  background-color: #fff;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--cg-blue) ;
`;

export const NavWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  width: 20%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  /* margin-left: 10px; */
  width: 40px;
  height: 45px;
  margin-right: 8px;
`;

export const SiteName = styled.h2`
  font-size: 1.7em;
  /* width: 250px; */
  color: var(--white);
`

export const BWrapper = styled.div`
  margin-right: ${({w}) => w ? "3%" : "1%"};
  width: ${({w}) => w ? "20%" : "15%"};
  min-width: ${({w}) => w ? "275" : "200"}px;
  display: ${({w}) => w ? "flex" : ""};
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* width: 35%; */
    height: 150px;
    margin-right: 0;
    border-radius: 0 0 0 10px;
    position: absolute;
    top: 60px;
    right: ${({mobilemenu}) => ( mobilemenu ? "0" : "100%")};
    background: var(--indigo-dye);
    transition: all 0.2s ease-out;
  }
`;

// Mobile menu part
export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
    height: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    /* font-size: 20rem; */
    transition: all 0.3s ease-out;
  }
`

