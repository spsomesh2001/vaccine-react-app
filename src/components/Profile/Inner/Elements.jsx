import styled from "styled-components";

export const Sec = styled.div`
  width: 100%;
  padding: 20px 10px;
`;

export const SecH = styled.h1`
  padding-bottom: 5px;
  border-bottom: 1.5px solid #0f0;
`;

export const SecConW = styled.div`
  padding: 50px 20px 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  overflow-x: auto;

  @media screen and (max-width: 350px) {
    padding-left: 0;
  }
`;

export const SecCon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SecF = styled.h3`
  padding: 10px;
  width: 35%;
  font-size: 1.3rem;
  border: 1px solid #9c9c9c;
  border-radius: ${({ k }) =>
    k === "house" || k === "_id"
      ? "10px 0 0 0"
      : k === "pincode" || k === "aadhar"
      ? "0 0 0 10px"
      : "0"};
  @media screen and (min-width: 900px) {
    max-width: 273px;
  }
  @media screen and (min-width: 300px) {
    min-width: 200px;
  }
`;

export const SecV = styled.p`
  padding: 10px;
  width: 58%;
  font-size: 1.3rem;
  border: 1px solid #9c9c9c;
  border-radius: ${({ k }) =>
    k === "house" || k === "_id"
      ? "0 10px 0 0"
      : k === "pincode" || k === "aadhar"
      ? "0 0 10px 0"
      : "0"};
  @media screen and (min-width: 900px) {
    max-width: 473px;
  }
  @media screen and (min-width: 300px) {
    min-width: 350px;
  }
`;

// For Table Sections
export const VTable = styled.table`
  border: 1px solid #9c9c9c;
  border-collapse: collapse;
`;

export const VTRow = styled.tr`
  border: 1px solid #9c9c9c;
`;

export const VTHead = styled.th`
  border: 1px solid #9c9c9c;
  text-align: start;
  padding: 5px;
  font-size: 1.3rem;
  height: 40px;
  min-width: 180px;
`;

export const VTEle = styled.td`
  border: 1px solid #9c9c9c;
  padding: 5px;
  font-size: 1.2rem;
  height: 70px;
`;

// For vaccine location section
export const InpContainer = styled.form`
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 350px) {
    width: 100%;
    padding-left: 0;
    height: 180px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const InpText = styled.input`
  margin: 10px 0;
  padding: 8px;
  font-size: 1rem;
  margin-right: 10px;
  width: 250px;
  /* background-color: #fff; */
  /* border-radius: 5px; */
  @media screen and (max-width: 350px) {
    width: 100%;
  }
`

export const SiteCon = styled.div`
  
  margin: 15px 20px 20px;
  @media screen and (max-width: 350px) {
    margin-left: 0;
  }
`