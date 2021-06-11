import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: var(--royal-blue-dark);

  @media screen and (min-height: 1000px) {
    position: absolute;
    bottom: 0;
    z-index: 999;
  }
`
export const FooterWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CText = styled.p`
  margin: 10px 0 5px;
  color: var(--white);
`

export const Tags = styled.div`
  margin: 0 0 5px;
  color: var(--white);
  text-align: center;
  overflow-x: auto;
`

export const TLs = styled.a`
  text-decoration: none;
  color: var(--white);
`