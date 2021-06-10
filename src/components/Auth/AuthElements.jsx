import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;  
  /* background-color: #000; */
`

export const AuthBack = styled.img`
  margin-top: -60px;
  width: 100%;
  height: 100%;
  z-index: -2;
  object-fit: cover;
  position: fixed;
  filter: brightness(40%);
`

export const AuthWrapper = styled.div`
  width: 80%;
  max-width: 360px;
  height: 400px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: rgba(255, 255, 255, 0.8) 0px 3px 10px; */
  border-radius: 10px;
  background-color: var(--white);
`

export const AuthH = styled.h2`
  margin: 10px 0;
`

export const FormItem = styled.div`
  margin: 12px 0;
`