import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Logo } from '../gatsbyImages'
import { useState } from 'react'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 6vw;
  padding: 0 3vw;
  z-index: 2;
  @media (orientation: portrait) {
    flex-direction: column;
    position: fixed;
    top: 0;
    height: 100vh;
    ${props => props.isActiveOnPortrait ? null : 'transform: translateX(-100%);'}
    background-color: #ff0420;
    transition: transform .2s ease-out;
    z-index: 4;
  }
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
  @media (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 33vw;
    background-color: #1a1e23;
    &:after {
      transform: translate(.1vw, -2vw);
      font-size: 6vw;
      letter-spacing: .5vw;
    }
  }
`
const Nav = styled.nav`
  @media (orientation: landscape) {
    padding-left: 3vw;
  }
`
const Ul = styled.ul`
  display: flex;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`
const Li = styled.li`
  list-style-type: none;
  @media (orientation: landscape) {
    padding-left: 3vw;
  }
  @media (orientation: portrait) {
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 3vw 0;
    border-bottom: 1px solid #1a1e23;
    &:hover > a {
      color: #fff;
    }
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
  @media (orientation: portrait) {
    font-size: 9vw;
    font-weight: 800;
    letter-spacing: .4vw;
    color: #1a1e23;
    transition: color .1s ease-in;
  }
`;
const Burger = styled.div`
  position: fixed;
  top: 3vw;
  right: 3vw;
  padding: 3vw;
  cursor: pointer;
  z-index: 4;
  @media (orientation: landscape) {
    display: none;
  }
`
const BurgerBar = styled.div`
  width: 9vw;
  height: 1.5vw;
  margin-bottom: 1.5vw;
  border-radius: 3vw;
  background-color: #fff;
  transition: background-color .1s ease-in, transform .1s ease-in;
  &:nth-of-type(2) {
    transition: background-color .1s ease-in, transform .3s ease-out, opacity .3s ease-in;
  }
  &:first-of-type.active {
    position: absolute;
    top: 6vw;
    transform: rotate(45deg);
  }
  &:nth-of-type(2).active {
    opacity: 0;
    margin-top: 3vw;
    transform: translateX(20vw);
  }
  &:last-of-type.active {
    position: absolute;
    top: 6vw;
    transform: rotate(-45deg);
  }
`

const menuElements = [
  'oferta', 'portfolio', 'o nas', 'blog', 'kontakt'
]

const Header = () => {
  const [isPortraitMenuActive, togglePortraitMenu] = useState(false);

  const handleClick = () => {
    togglePortraitMenu(!isPortraitMenuActive);
  }

  return (
    <>
      <StyledHeader isActiveOnPortrait={isPortraitMenuActive}>
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
      <Burger onClick={handleClick}>
        <BurgerBar className={isPortraitMenuActive ? 'active' : null}></BurgerBar>
        <BurgerBar className={isPortraitMenuActive ? 'active' : null}></BurgerBar>
        <BurgerBar className={isPortraitMenuActive ? 'active' : null}></BurgerBar>
      </Burger>
    </>
  )
}

export default Header
