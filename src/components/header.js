import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 6vw;
  padding: 0 3vw;
  background-color: ${props => props.headerColor ? props.headerColor : 'transparent'};
  z-index: 2;
  @media (orientation: portrait) {
    flex-direction: column;
    position: fixed;
    top: 0;
    height: 100vh;
    height: 100dvh;
    ${props => props.isActiveOnPortrait ? null : 'transform: translateX(-100%);'}
    background-color: #eb001a;
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
  align-items: center;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`
const Li = styled.li`
  list-style-type: none;
  &.socials {
    padding-left: 0;
  }
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
    &.phone, &.socials {
      position: absolute;
      bottom: 3vh;
      height: 6vh;
      border: 0;
    }
    &.socials {
      bottom: 12vh;
      width: 12vw;
    }
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  color: #fff;
  transition: color .2s ease-out;
  &:hover {
    color: #ff0420;
  }
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
  mix-blend-mode: difference;
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
const PhoneParent = styled.div`
  display: flex;
  align-items: center;
  > div {
    width: 1.5vw;
    height: 1.5vw;
  }
  @media (orientation: portrait) {
    > div {
      width: 4.5vw;
      height: 4.5vw;
    }
  }
`
const A = styled.a`
  display: flex;
  align-items: center;
  padding-left: .9vw;
  color: #fff;
  transition: color .2s ease-out;
  @media (orientation: landscape) {
    &:hover {
      color: #ff0420;
    }
  }
  @media (orientation: portrait) {
    margin-left: 1.5vw;
    font-size: 4.5vw;
    font-weight: 800;
    letter-spacing: .4vw;
    transition: color .1s ease-in;
  }
`
const SocialsParent = styled.div`
  > a > div {
    width: 1.5vw;
    height: 1.5vw;
    transition: transform .1s ease-out;
    &:hover {
      transform: scale(1.2);
    } 
  }
  &.facebook {
    margin-left: 1.5vw;
  }
  @media (orientation: portrait) {
    > a > div {
      width: 6vw;
      height: 6vw;
    }
    &.facebook {
      margin: 0 24vw 6vh 0;
    }
    &.youtube {
      margin: 0 0 6vh 24vw;
    }
  }
`

const menuElements = [
  'oferta', 'blog'/*, 'portfolio', 'o nas', 'blog', 'kontakt'*/
]

const Header = ({headerColor}) => {
  const [isPortraitMenuActive, togglePortraitMenu] = useState(false);
  const handleClick = () => {
    togglePortraitMenu(!isPortraitMenuActive);
  }

  return (
    <>
      <StyledHeader isActiveOnPortrait={isPortraitMenuActive} headerColor={headerColor}>
        <LogoParent>
          <StyledLink to="/">
            <StaticImage
              src="../images/logo-magia.svg"
              className='logo'
              placeholder="blurred"
              width={250}
              height={250}
              formats={["auto", "webp"]}
              alt="logo Magia"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
              loading='eager'
            />
          </StyledLink>
        </LogoParent>
        <Nav>
          <Ul>
            {menuElements.map((element, i)=> {
              return <Li key={i} >
                <StyledLink to={`/${element}`}>{element}</StyledLink>
              </Li>
            })}
            <Li className='phone'>
              <PhoneParent>
                <StaticImage
                  src="../images/telefon-magia.svg"
                  placeholder="blurred"
                  width={50}
                  height={50}
                  formats={["auto", "webp"]}
                  alt="telefon Magia"
                  transformOptions={{ fit: "cover", cropFocus: "attention" }}
                  loading='eager'
                />
                <A href="tel:+48723062926">+48 723 062 926</A>
              </PhoneParent>
            </Li>
            <Li className='socials'>
              <SocialsParent className='facebook'>
                <A href='https://www.facebook.com/profile.php?id=100090169522227' rel='noreferrer noopener' target='_blank'>
                  <StaticImage
                    src="../images/facebook-magia.svg"
                    placeholder="blurred"
                    width={64}
                    height={64}
                    formats={["auto", "webp"]}
                    alt="Facebook Magia"
                    transformOptions={{ fit: "cover", cropFocus: "attention" }}
                    loading='eager'
                  />
                </A>
              </SocialsParent>
            </Li>
            <Li className='socials'>
              <SocialsParent className='youtube'>
                <A href='https://www.youtube.com/@magia-strony-internetowe' rel='noreferrer noopener' target='_blank'>
                <StaticImage
                    src="../images/youtube-magia.svg"
                    placeholder="blurred"
                    width={64}
                    height={64}
                    formats={["auto", "webp"]}
                    alt="Youtube Magia"
                    transformOptions={{ fit: "cover", cropFocus: "attention" }}
                    loading='eager'
                  />
                </A>
              </SocialsParent>
            </Li>
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
