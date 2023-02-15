import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from "gatsby"
import { Stars } from '../gatsbyImages'

import Header from "./header"
import "./layout.css"

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

  const P = styled.p`
    padding: 0;
    font-size: 1.2vw;
    font-weight: 800;
    text-align: center;
  `
  const B = styled.span`
   
  `

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer>
          <P>Spotkajmy się osobiście - <B>Ostróda</B>, <B>Iława</B>, <B>Olsztyn!</B></P>
          <Stars width={'2vw'}></Stars>
          <P>Zdalnie - <B>cała Polska!</B></P>
          <Stars width={'2vw'}></Stars>
          <P>© {new Date().getFullYear()} - <Link to='/' rel='noopener noreferer' activeStyle={{color: '#1a1e23', fontSize: '1.2vw', fontWeight: '800'}}>magiainternetu.com</Link></P>
        </footer>
    </>
  )
}

export default Layout
