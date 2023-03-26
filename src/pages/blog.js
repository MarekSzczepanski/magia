import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          title
          excerpt
          link
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

const Wrap = styled.div`
  padding: 3vw;
  background-color: #1a1e23;
`
const H1 = styled.h1`
  padding: 6vw 0 1.5vw;
  font-size: 6vw;
  text-align: center;
  color: #ff0420;
  @media (orientation: portrait) {
    font-size: 18vw;
    padding: 12vw 0 6vw;
  }
`
const P = styled.p`
  max-width: 66vw;
  margin: 0 auto;
  font-size: 1.4vw;
  text-align: center;
  line-height: 2.1vw;
  letter-spacing: .07vw;
  color: #fff;
  @media (orientation: portrait) {
    max-width: 100%;
    font-size: 4vw;
    line-height: 7vw;
  }
`
const H2 = styled.h2`
  margin: 0 auto;
  padding: 6vw 0 3vw;
  font-size: 2.5vw;
  text-align: center;
  letter-spacing: .1vw;
  color: #ff0420;
  @media (orientation: portrait) {
    font-size: 9vw;
    letter-spacing: .3vw;
  }
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (orientation: portrait) {
    flex-direction: column;
  }
`
const Li = styled.li`
  width: 31%;
  margin-top: 1.5vw;
  list-style-type: none;
  background-color: #ff0420;
  cursor: pointer;
  &:nth-of-type(3n+2) {
    margin: 1.5vw 3.5% 0;
  }
  > a > div {
    height: 55%;
  }
  @media (orientation: portrait) {
    width: 80%;
    margin: 3vw auto 9vw;
    &:nth-of-type(3n+2) {
      margin: 3vw auto 9vw;
    }
  }
`
const H3 = styled.h3`
  padding: 1.5vw 1.5vw 0;
  font-size: 2vw;
  line-height: 3vw;
  text-align: center;
  color: #fff;
  @media (orientation: portrait) {
    padding: 6vw 3vw;
    font-size: 4vw;
    line-height: 6vw;
  }
`
const Excerpt = styled.p`
  padding: 1.5vw;
  font-size: 1.3vw;
  font-weight: 500;
  line-height: 1.9vw;
  text-align: center;
  text-transform: none;
  @media (orientation: portrait) {
    padding: 0 3vw 6vw;
    font-size: 3.5vw;
    line-height: 5vw;
  }
`

const Blog = ({data}) => {
  return (
    <Layout>
      <Wrap>
        <H1>Blog</H1>
        <P>Witaj, podróżniku! Otwórz drzwi do naszego magicznego bloga i odkryj świat wirtualnych czarów! 
            Poznaj tajemnice i sekrety korzystania z sieci w bezpieczny i kreatywny sposób. 
            Naucz się, jak wyczarować piękne witryny i rozszyfrować technologiczne zagadki. 
            Wyrusz z nami w niezapomnianą podróż po bezgranicznej cyberprzestrzeni!</P>
        <H2>Wpisy</H2>
        <Ul>
          {data.allWpPost.edges.map(({ node }) => {
            const image = getImage(node.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

            return (
              <Li key={node.id}>
                <Link to={node.link}> 
                  <GatsbyImage image={image} alt={node.featuredImage.node.altText}/>
                  <H3>{node.title}</H3>
                  {node.excerpt ? <Excerpt>{node.excerpt.replace('<p>', '').replace('</p>', '')}</Excerpt> : null}
                </Link>
              </Li>)}
            )}
        </Ul>
      </Wrap>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog | Magia" description="Otwórz okno do magicznego świata cyberprzestrzeni i wejdź na nasz Blog! Tutaj odkryjesz tajemnice, które pozwolą Ci poznać i zrozumieć działanie sieci."/>
export default Blog
