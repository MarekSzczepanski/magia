import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 5vw;
  z-index: 2;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">{siteTitle}</Link>
  </StyledHeader>
)

export default Header
