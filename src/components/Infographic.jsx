import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 3vw 6vw;
  border-top: .1vw solid #1a1e23;
  @media (orientation: portrait) {
    width: 100%;
    padding: 6vw;
  }
`
const AboveHeading = styled.span`
  font-size: 2.4vw;
  font-weight: 600;
  text-transform: uppercase;
  color: #1a1e23;
  @media (orientation: portrait) {
    font-size: 6vw;
  }
`
const H2 = styled.h2`
  max-width: 60%;
  padding: 1.3vw 0 2.6vw;
  font-size: 2.5vw;
  text-align: center;
  color: #fff;
  @media (orientation: portrait) {
    max-width: 90%;
    padding: 3vw 0 6vw;
    font-size: 7.5vw;
  }
`
const InfographicPart = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    .infographic-image-container {
      justify-content: flex-end;
    }
    .infographic-half-circle {
      transform: scale(-1) translateX(-100%);
    }
    > .infographic-part-text {
      padding: 0 1.5vw 0 0;
    }
  }
  > * {
    width: 33%;
    height: 12vw;
  }
  @media (orientation: portrait) {
    &:nth-of-type(even) {
      .infographic-half-circle {
        transform: scale(-1) translateX(calc(-100% + 7vw));
      }
      > .infographic-part-text {
        padding: 0;
      }
    }
    > * {
      height: 36vw;
    }
  }
`
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
const Circles = styled.div`
  position: relative;
  padding-left: 4%;
`
const HalfCircle = styled.div`
  width: 6vw;
  height: 12vw;
  background-color: #1a1e23;
  border-bottom: 0;
  &:nth-of-type(odd) {
    border-top-left-radius: 7vw;
    border-bottom-left-radius: 7vw;
  }
  &:nth-of-type(even) {
    border-top-right-radius: 7vw;
    border-bottom-right-radius: 7vw;
  }
  @media (orientation: portrait) {
    width: 18vw;
    height: 36vw;
    transform: translateX(-7vw);
    &:nth-of-type(odd) {
      border-top-left-radius: 21vw;
      border-bottom-left-radius: 21vw;
    }
    &:nth-of-type(even) {
      border-top-right-radius: 21vw;
      border-bottom-right-radius: 21vw;
    }
  }
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3vw;
  left: 50%;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 3;
  @media (orientation: portrait) {
    top: 9vw;
    width: 18vw;
    height: 18vw;
  }
`
const CircleNumber = styled.span`
  position: relative;
  font-size: 4vw;
  color: #1a1e23;
  z-index: 3;
  @media (orientation: portrait) {
    font-size: 12vw;
  }
`
const InfographicText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5vw;
  @media (orientation: portrait) {
    padding-left: 0;
  }
`
const H3 = styled.h3`
  font-size: 1.5vw;
  text-align: ${props => props.align ? props.align : 'left'};
  color: #fff;
  @media (orientation: portrait) {
    font-size: 4vw;
  }
`
const P = styled.p`
  font-size: 1.2vw;
  font-weight: 500;
  text-align: ${props => props.align ? props.align : 'left'};
  @media (orientation: portrait) {
    font-size: 3.6vw;
  }
`
const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: .2vw;
  height: 12vw;
  background-color: #fff;
  z-index: 2;
  @media (orientation: portrait) {
    height: 36vw;
  }
`
const Container = styled.div`
  display: ${props => props.isReadMoreActive ? 'none' : 'flex'}; 
  justify-content: center;
  width: 100%;
  padding-top: 9vw;
  &: > h3 {
    display: flex;
  }
  @media (orientation: landscape) {
    display: none;
  }
`

const infographicParts = [
  {
    image: <StaticImage
      src='../images/reputacja.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp", "avif"]}
      alt="strony internetowe reputacja"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      loading='eager'
      class={'infographic-image'}
      />,
    heading: 'wizerunek',
    paragraph: 'Zaimponuj klientom budując swoją reputację w sieci.'
  },
  {
    image: <StaticImage
      src='../images/przystepnosc.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp", "avif"]}
      alt="dostępność stron internetowych"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      loading='eager'
      class={'infographic-image'}
      />,
    heading: 'dostępność',
    paragraph: 'Pozwól klientom przeglądać Twoją ofertę 24/7.'
  },
  {
    image: <StaticImage
      src='../images/reklama-online.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp", "avif"]}
      alt="reklama w internecie"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      loading='eager'
      class={'infographic-image'}
      />,
    heading: 'marketing',
    paragraph: 'Wykorzystaj swoją stronę jako skuteczne narzędzie marketingowe.'
  },
  {
    image: <StaticImage
      src='../images/e-commerce.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp", "avif"]}
      alt="magia sklepy internetowe"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      loading='eager'
      class={'infographic-image'}
    />,
    heading: 'sprzedaż',
    paragraph: 'Ułatw klientom zakup Twoich usług i produktów dzięki sprzedaży online.'
  },
  {
    image: <StaticImage
      src='../images/zainteresowanie.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp", "avif"]}
      alt="piekielnie szybkie www"
      transformOptions={{ fit: "cover", cropFocus: "attention" }}
      loading='eager'
      class={'infographic-image'}
    />,
    heading: 'widoczność',
    paragraph: 'Zyskaj dotatkowe zainteresowanie dzięki widoczności w wyszukiwarce Google.'
  },
]

const Infographic = ({toggleReadMore, isReadMoreActive}) => {

  const handleClick = () => {
    toggleReadMore(!isReadMoreActive);
  }

  return (
    <Wrap>
      <AboveHeading>magia internetu</AboveHeading>
      <H2>korzyści płynące z twojej witryny</H2>
      {infographicParts.map((part, i) => {
        return <InfographicPart key={i}>
          <ImageContainer className='infographic-image-container'>
            {part.image}
          </ImageContainer>
          <Circles>
            <HalfCircle className='infographic-half-circle'></HalfCircle>
            <Circle>
              <CircleNumber>{i+1}</CircleNumber>
            </Circle>
            <VerticalLine></VerticalLine>
          </Circles>
          <InfographicText className='infographic-part-text'>
            <H3 align={ (i + 1) % 2 ? 'right' : null }>{part.heading}</H3>
            <P align={ (i + 1) % 2 ? 'right' : null }>{part.paragraph}</P>
          </InfographicText>
        </InfographicPart>
      })}
      <Container isReadMoreActive={isReadMoreActive}>
        <button onClick={handleClick} className='button button3'>dowiedz się więcej</button>
      </Container>
    </Wrap>
  )
}

export default Infographic