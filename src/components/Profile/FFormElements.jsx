import styled from "styled-components";

export const FFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormBack = styled.img`
  margin-top: -60px;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  position: fixed;
  filter: brightness(40%);
`

export const FFormWrapper = styled.div`
  width: 95%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95) ;
  border-radius: 5px;
`;

export const FFormHeading = styled.h1`
  padding-bottom: 5px;
  border-bottom: 3px solid;
`;

export const FormSection = styled.div`
  margin-top: 25px;
`;

export const SubHeading = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid;
`;

export const SubSection = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const UploadContainer = styled.div`
  margin: 10px 1% 10px 3%;
  width: 550px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelSpan = styled.span`
  width: 150px;
`;

export const LabelText = styled.label`
  font-size: 1.05rem;
  font-weight: 700;
`;

export const FileContainer = styled.div`
  width: 62%;
  display: flex;
  align-items: center;
`