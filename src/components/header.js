import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 6vw;
  padding: 0 3vw;
  z-index: 2;
`
const Nav = styled.nav`
  padding-left: 3vw;
`
const Ul = styled.nav`
  display: flex;
`
const Li = styled.li`
  padding-left: 3vw;
  list-style-type: none;
`

const menuElements = [
  'oferta', 'portfolio', 'o nas', 'blog', 'kontakt'
]

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
    <Nav>
      <Ul>
        {menuElements.map((element, i)=> {
          return <Li key={i}>
            <Link to={`/${element}`} activeStyle={{color: '#ff0420'}} rel='noopener noreferer'>{element}</Link>
          </Li>
        })}
      </Ul>
    </Nav>
  </StyledHeader>
)

export default Header
