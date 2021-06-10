import React from 'react'
import { CText, FooterContainer, FooterWrapper, Tags, TLs } from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <CText>Copyright © 2021</CText>
          <Tags>Icons made by <TLs href="https://www.flaticon.com/authors/linector" target="_blank" title="Linector">Linector</TLs> from <TLs href="https://www.flaticon.com/" target="_blank" title="Flaticon">FlatIcon</TLs></Tags>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer
