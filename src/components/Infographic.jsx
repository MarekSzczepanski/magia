import * as React from "react"
import styled from 'styled-components'
import { InfographicImage } from '../gatsbyImages'

const Wrap = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding: 3vw 6vw;
`
const H3 = styled.h3`
  font-size: 2.4vw;
  color: #1a1e23;
`
const H4 = styled.h4`
  max-width: 60%;
  padding: 1.3vw 0 2.6vw;
  font-size: 2.5vw;
  text-align: center;
  color: #fff;
`
const InfographicPart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 100%;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
    .infograpgic-image-container {
      justify-content: flex-end;
    }
    .infographic-half-circle {
      transform: scale(-1) translateX(-100%);
    }
    > .infographic-part-text {
      padding: 0 1.5vw 0 0;
    }
  }
  &:nth-of-type(odd) {
    > .infographic-part-text {

    }
  }
  > * {
    width: 33%;
    height: 12vw;
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
`
const CircleNumber = styled.span`
  position: relative;
  font-size: 4vw;
  color: #1a1e23;
  z-index: 3;
`
const InfographicText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.5vw;
`
const H5 = styled.h5`
  font-size: 1.5vw;
  text-align: ${props => props.align ? props.align : 'left'};
`
const P = styled.p`
  font-size: 1.2vw;
  font-weight: 500;
  text-align: ${props => props.align ? props.align : 'left'};
`
const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: .2vw;
  height: 12vw;
  background-color: #fff;
  z-index: 2;
`

const infographicParts = [
  {
    image: 'reputation.png',
    heading: 'wizerunek',
    paragraph: 'Zaimponuj klientom budując swoją reputację w sieci.'
  },
  {
    image: '24-hours.png',
    heading: 'dostępność',
    paragraph: 'Pozwól klientom przeglądać Twoją ofertę 24/7.'
  },
  {
    image: 'megaphone.png',
    heading: 'marketing',
    paragraph: 'Wykorzystaj swoją stronę jako skuteczne narzędzie marketingowe.'
  },
  {
    image: 'acquisition.png',
    heading: 'sprzedaż',
    paragraph: 'Ułatw klientom zakup Twoich usług i produktów dzięki sprzedaży online.'
  },
  {
    image: 'fire.png',
    heading: 'widoczność',
    paragraph: 'Zyskaj dotatkowe zainteresowanie dzięki widoczności w wyszukiwarce Google.'
  },
]

const Infographic = () => (
  <Wrap>
    <H3>magia internetu</H3>
    <H4>korzyści płynące z twojej witryny</H4>
    {infographicParts.map((part, i) => {
      return <InfographicPart key={i}>
        <ImageContainer className='infograpgic-image-container'>
          <InfographicImage src={part.image} />
        </ImageContainer>
        <Circles>
          <HalfCircle className='infographic-half-circle'></HalfCircle>
          <Circle>
            <CircleNumber>{i+1}</CircleNumber>
          </Circle>
          <VerticalLine></VerticalLine>
        </Circles>
        <InfographicText className='infographic-part-text'>
          <H5 align={ (i + 1) % 2 ? 'right' : null }>{part.heading}</H5>
          <P align={ (i + 1) % 2 ? 'right' : null }>{part.paragraph}</P>
        </InfographicText>
      </InfographicPart>
    })}
  </Wrap>
)

export default Infographic