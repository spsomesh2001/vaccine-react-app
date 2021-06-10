import styled from "styled-components";

export const PPageContainer = styled.div`
  width: 100%;
  height: 100%;
  /* min-height: 91vh; */
  padding: 10px 0;
  /* background-color: #a4a4a4; */
`;

export const PPageBack = styled.img`
  margin-top: -60px;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  position: fixed;
  filter: brightness(85%);
`;

export const PPageWrapper = styled.div`
  /* background-color: #fff; */
  background-color: rgba(255,255,255, 0.9);
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const IntroSection = styled.div`
  /* border: 1px solid #f00; */
  padding: 10px;
  height: 300px;
  min-height: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 499px) {
    width: 100%;
    min-height: 500px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const NameSection = styled.div`
  /* border: 1px solid #f00; */
  width: 60%;
  height: 85%;
  padding: 20px 30px;

  @media screen and (max-width: 499px) {
    padding: 20px 10px;
    width: 100%;
  }
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 5px;
`;

export const Email = styled.h3`
  font-size: 1.2rem;
`;

export const TStamp = styled.p`
  margin-top: 20px;
`;

export const Photo = styled.img`
  width: 14%;
  height: 85%;
  min-width: 200px;
  min-height: 200px;
  object-fit: fill;
  border-radius: 5px;
  margin-right: 20px;
  /* border: 1px solid #a4a4a4;  */
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media screen and (max-width: 499px) {
    margin: 20px 10px 10px;
    height: 100%;
    /* width: 100%; */
  }  
`;

export const MainContent = styled.div`
  min-height: 60vh;
  border-radius: 15px 15px 0 0;
`;

export const OptionDiv = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 10px 4px 1px;
  display: flex;
  background-color: rgba(50, 50, 93, 0.25);
  z-index: -1;
`;

export const OptionB = styled.button`
  font-size: 1.02rem;
  font-weight: ${({ s }) => (s ? "bold" : "none")};
  padding: 10px;
  margin: 0 ${({ s }) => (s ? 10 : 3)}px 0 ${({ s }) => (s ? 10 : 3)}px;
  min-width: 150px;
  flex-grow: 1;
  border: ${({ s }) => (s ? 2 : 1)}px solid;
  border-radius: ${({ op }) => (op === 1 ? 10 : 5)}px
    ${({ op }) => (op === 4 ? 10 : 5)}px 0 0;
  box-shadow: ${({ s }) =>
    !s
      ? "none"
      : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"};
  cursor: pointer;
  border: none;
  transform: scale(${({ s }) => (s ? 1.06 : 1)});
  z-index: ${({ s }) => (s ? 5 : 0)};
`;

export const CR = styled.div`
  padding: 10px;
`;
