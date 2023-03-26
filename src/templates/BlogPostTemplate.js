import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Wrap = styled.article`
  background-color: #fff;
  > .gatsby-image-wrapper {
    width: 100%;
    height: 30vw;
  }
  @media (orientation: portrait) {
    > .gatsby-image-wrapper {
      height: 60vw;
    }
  }
`
const Container = styled.div`
  padding: 3vw;
  > h1 {
    font-size: 6vw;
    color: #ff0420;
  }
  > p {
    padding-left: .1vw;
    font-size: 1.6vw;
    line-height: 2.5vw;
  }
  p + p {
    padding-top: 1.5vw;
  }
  > h1 + p {
    max-width: 66%;
    font-weight: 600;
  }
  > h2 {
    padding-top: 3vw;
    font-size: 3vw;
    letter-spacing: .1vw;
    color: #ff0420;
  }
  > h3 {
    padding-top: 1.5vw;
    font-size: 2vw;
    color: #ff0420;
  }
  > ul {
    padding-top: .75vw;
  }
  > ul > li {
    position: relative;
    padding-left: 1.5vw;
    font-size: 1.5vw;
    font-weight: 500;
    line-height: 2.5vw;
    list-style: none;
    &:before {
        content: '';
        position: absolute;
        top: 1.05vw;
        left: 0;
        width: .4vw;
        height: .4vw;
        background-color: #ff0420;
    }
  }
  > ol > li {
    margin-top: 1.5vw;
    font-size: 1.5vw;
    line-height: 2.5vw;
  }
  a {
    font-size: 1.3vw;
    color: #ff0420;
  }
  @media (orientation: portrait) {
    padding: 6vw 3vw;
    > h1 {
      font-size: 10.5vw;
    }
    > p {
      padding-left: .3vw;
      font-size: 4vw;
      line-height: 6vw;
    }
    p + p {
      padding-top: 3vw;
    }
    > h1 + p {
      max-width: 100%;
    }
    > h2 {
      padding-top: 7.5vw;
      font-size: 7.5vw;
      letter-spacing: .3vw;
    }
    > h3 {
      padding-top: 4.5vw;
      font-size: 6vw;
    }
    > ul {
      padding-top: 3vw;
    }
    > ul > li {
      padding-left: 3vw;
      font-size: 4vw;
      line-height: 7.5vw;
      &:before {
        top: 3.25vw;
        width: 1vw;
        height: 1vw;
      }
    }
    > ol > li {
      font-size: 4vw;
      line-height: 7.5vw;
    }
    a {
      font-size: 3.5vw;
    }
  }
}
`

const BlogPostTemplate = ({pageContext}) => {
  const image = getImage(pageContext.featuredImage.node.localFile.childImageSharp.gatsbyImageData);

  return(
    <Layout headerColor='#1a1e23'>
      <Wrap>
        <GatsbyImage image={image} alt={pageContext.alt}/>
        <Container dangerouslySetInnerHTML={{ __html:  `<h1>${pageContext.title}</h1> ${pageContext.content}` }} />
      </Wrap>
		</Layout>
  )
}

export const Head = ({pageContext}) => <Seo title={pageContext.title + ' | Magia'} description={pageContext.excerpt}/>
export default BlogPostTemplate
