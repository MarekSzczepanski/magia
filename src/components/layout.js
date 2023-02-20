import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Stars } from '../gatsbyImages'

import Header from "./header"
import "./layout.css"

const P = styled.p`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 1.2vw;
  font-weight: 800;
  > a {
    margin-left: 1.5vw;
    font-size: 1.2vw;
    color: #1a1e23;
    &:hover {
      color: #fff;
    }
  }
  @media (orientation: portrait) {
    display: flex;
    flex-direction column;
    margin-left: 0;
    font-size: 4.5vw;
    line-height: 6vw;
    text-align: center;
    > a {
      width: 100%;
      margin: 3vw 0 0 0;
      font-size: 4.5vw;
    }
  }
`

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer>
          <P>Spotkajmy się osobiście - Ostróda, Iława, Olsztyn!</P>
          <Stars width={'2vw'}></Stars>
          <P>Zdalnie - cała Polska!</P>
          <Stars width={'2vw'}></Stars>
          <P>© {new Date().getFullYear()} <Link to='/' rel='noopener noreferer' activeStyle={{fontWeight: '800', transition: 'color .2s ease-in'}}>magiainternetu.com</Link></P>
        </footer>
    </>
  )
}

export default Layout
