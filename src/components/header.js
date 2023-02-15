import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Logo } from '../gatsbyImages'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 6vw;
  padding: 0 3vw;
  z-index: 2;
`
const LogoParent = styled.div`
  position: relative;
  &:after {
    content: 'magia';
    display: block;
    transform: translate(.1vw, -.3vw);
    font-family: 'Rubik', sans-serif;
    font-size: 1vw;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .15vw;
    color: #fff;
  }
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
const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
`;

const menuElements = [
  'oferta', 'portfolio', 'o nas', 'blog', 'kontakt'
]

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoParent>
      <StyledLink to="/"><Logo></Logo></StyledLink>
    </LogoParent>
    <Nav>
      <Ul>
        {menuElements.map((element, i)=> {
          return <Li key={i}>
            <StyledLink to={`/${element}`} activeStyle={{color: '#ff0420'}} rel='noopener noreferer'>{element}</StyledLink>
          </Li>
        })}
      </Ul>
    </Nav>
  </StyledHeader>
)

export default Header
