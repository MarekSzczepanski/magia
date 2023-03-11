import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import PrivacyPolicy from "../components/PrivacyPolicy"
import "./layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 33%;
  height: 4.5vw;
  > p {
    color: #fff;
  }
  @media (orientation: portrait) {
    max-width: 100%;
    height: 18vw;
    > p {
      font-size: 5vw;
    }
  }
`
const P = styled.p`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 1.2vw;
  font-weight: 800;
  letter-spacing: .1vw;
  a {
    margin-left: 1.5vw;
  }
  @media (orientation: portrait) {
    font-size: 4.5vw;
    justify-content: center;
    padding-bottom: 3vw;
    letter-spacing: .3vw;
  }
`
const StyledLink = styled.span`
  > a {
    font-size: 1.2vw;
    font-weight: 800;
    letter-spacing: .1vw;
    text-decoration: underline;
    text-decoration-thickness: .15vw;
    text-underline-offset: .3vw;
    color: #1a1e23;
    transition: color .1s ease-in;
  }
  &:hover > a {
    color: #fff;
  }
  @media (orientation: portrait) {
    > a {
      display: flex;
      flex-direction column;
      width: 100%;
      font-size: 4.5vw;
      line-height: 6vw;
      text-align: center;
      letter-spacing: .3vw;
    }
  }
`

const Layout = ({ children, headerColor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} headerColor={headerColor} />
      <main>{children}</main>
      <footer>
        <Container>
          <P>Spotkajmy się osobiście:</P>
          <StyledLink><Link to='/strony-internetowe-ostroda'>strony internetowe Ostróda</Link></StyledLink>
          {/* <StyledLink><Link to='/strony-internetowe-ostroda'>strony internetowe Iława</Link></StyledLink> */}
          {/* <StyledLink><Link to='/#'>strony internetowe Olsztyn</Link></StyledLink> */}
        </Container>
        <StaticImage
          src="../images/gwiazdy.svg"
          placeholder="blurred"
          width={60}
          height={60}
          formats={["auto", "webp"]}
          alt="gwiazdy - przerywnik oferta"
          transformOptions={{ fit: "cover", cropFocus: "attention" }}
          loading='eager'
          className='footer-stars'
        />
        <P>Zdalnie - cała Polska!</P>
          <StaticImage
            src="../images/gwiazdy.svg"
            placeholder="blurred"
            width={60}
            height={60}
            formats={["auto", "webp"]}
            alt="gwiazdy - przerywnik oferta"
            transformOptions={{ fit: "cover", cropFocus: "attention" }}
            loading='eager'
            className='footer-stars'
          />
          <P>© {new Date().getFullYear()} <StyledLink><Link to='/#'>magiainternetu.com</Link></StyledLink></P>
        </footer>
        <PrivacyPolicy />
    </>
  )
}

export default Layout
