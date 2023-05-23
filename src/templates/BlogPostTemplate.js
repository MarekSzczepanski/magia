import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
`;
const Container = styled.div`
  padding: 3vw;
  > h1 {
    font-size: 6vw;
    color: #eb001a;
  }
  > p {
    max-width: 75ch;
    padding-left: .1vw;
    font-size: clamp(.75rem, 1vw, 1rem);
    line-height: clamp(1rem, 1.5vw, 1.5rem);
  }
  p + p {
    padding-top: 1.5vw;
  }
  > h1 + p {
    max-width: 75ch;
    font-weight: 600;
  }
  > h2 {
    max-width: 45vw;
    padding-top: 3vw;
    font-size: clamp(1.5rem, 2vw, 3rem);
    line-height: clamp(2rem, 3vw, 4rem);
    letter-spacing: .1vw;
    color: #eb001a;
  }
  > h3 {
    padding-top: 1.5vw;
    font-size: 2vw;
    color: #eb001a;
  }
  > ul {
    padding-top: .75vw;
  }
  > ul > li {
    position: relative;
    padding-left: 1.5vw;
    font-size: clamp(.75rem, 1vw, 1rem);
    font-weight: 500;
    line-height: clamp(1rem, 1.5vw, 1.5rem);
    list-style: none;
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: .4vw;
        height: .4vw;
        transform: translateY(-50%);
        background-color: #eb001a;
    }
  }
  > ol > li {
    max-width: 75ch;
    margin-top: 1.5vw;
    font-size: clamp(.75rem, 1vw, 1rem);
    line-height: clamp(1rem, 1.5vw, 1.5rem);
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
      max-width: 100%;
      padding-top: 7.5vw;
      font-size: 7.5vw;
      line-height: 9vw;
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
`;

const BlogPostTemplate = ({ pageContext }) => {
  const image = getImage(pageContext.featuredImage.node.localFile.childImageSharp.gatsbyImageData);

  return (
    <Layout headerColor="#1a1e23">
      <Wrap>
        <GatsbyImage image={image} alt={pageContext.alt} />
        <Container
          dangerouslySetInnerHTML={{
            __html: `<h1>${pageContext.title}</h1> ${pageContext.content}`
          }}
        />
      </Wrap>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.object,
  featuredImage: PropTypes.string
};

export const Head = ({ pageContext }) => (
  <Seo title={pageContext.title + ' | Magia'} description={pageContext.excerpt} />
);

Head.propTypes = {
  pageContext: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string
};

export default BlogPostTemplate;
