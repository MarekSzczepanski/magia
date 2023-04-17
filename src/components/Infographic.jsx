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
  @media (max-width: 1023px) {
    width: 100%;
    padding: 6vw;
  }
`
const AboveHeading = styled.span`
  font-size: 2.4vw;
  font-weight: 600;
  text-transform: uppercase;
  color: #1a1e23;
  @media (max-width: 1023px) {
    font-size: 6vw;
  }
`
const H2 = styled.h2`
  max-width: 60%;
  padding: 1.3vw 0 2.6vw;
  font-size: 2.5vw;
  text-align: center;
  color: #fff;
  @media (max-width: 1023px) {
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
      transform: scale(-1) translateX(-50%);
    }
    > .infographic-part-text {
      padding: 0 1.5vw 0 0;
    }
  }
  &:nth-of-type(odd) {
    .infographic-half-circle {
      transform: translateX(-50%);
    }
  }
  > * {
    width: 33%;
    height: calc(6vw + 2rem);
  }
  @media (max-width: 1023px) {
    &:nth-of-type(even) {
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
  display: flex;
  justify-content: center;
`
const HalfCircle = styled.div`
  width: calc(3vw + 1rem);
  height: calc(6vw + 2rem);
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
  @media (max-width: 1023px) {
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
  top: calc(1.5vw + .5rem);
  left: 50%;
  width: calc(3vw + 1rem);;
  height: calc(3vw + 1rem);;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 3;
  @media (max-width: 1023px) {
    top: 9vw;
    width: 18vw;
    height: 18vw;
  }
`
const CircleNumber = styled.span`
  position: relative;
  font-size: calc(2vw + .75rem);
  color: #1a1e23;
  z-index: 3;
  @media (max-width: 1023px) {
    font-size: 12vw;
  }
`
const InfographicText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5vw;
  @media (max-width: 1023px) {
    padding-left: 0;
  }
`
const H3 = styled.h3`
  font-size: calc(.6rem + .7vw);
  text-align: ${props => props.align ? props.align : 'left'};
  color: #fff;
  @media (max-width: 1023px) {
    font-size: 4vw;
  }
`
const P = styled.p`
  font-size: calc(.3rem + .7vw);
  line-height: calc(.4rem + .8vw);
  font-weight: 500;
  text-align: ${props => props.align ? props.align : 'left'};
  @media (max-width: 1023px) {
    font-size: min(3vw, 1.4rem);
    line-height: min(4vw, 1.85rem);
  }
`
const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(.07vw + .03rem);
  height: calc(6vw + 2rem);
  background-color: #fff;
  transform: translateX(-50%);
  z-index: 2;
  @media (max-width: 1023px) {
    left: unset;
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
  @media (min-width: 1024px) {
    display: none;
  }
`

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: center;
  padding: 1rem 1.5rem;
  border: .2vw solid #fff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05vw;
  background-color: #eb001a;
  color: #fff;
  transition: background-color .2s ease-out, color .2s ease-out, border-color .2s ease-out;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff0420;
    border-color: #ff0420;
  }
`

const infographicParts = [
  {
    image: <StaticImage
      src='../images/reputacja.svg'
      placeholder="blurred"
      width={200}
      height={200}
      formats={["auto", "webp"]}
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
      formats={["auto", "webp"]}
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
      formats={["auto", "webp"]}
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
      formats={["auto", "webp"]}
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
      formats={["auto", "webp"]}
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
        <Button onClick={handleClick} >dowiedz się więcej</Button>
      </Container>
    </Wrap>
  )
}

export default Infographic