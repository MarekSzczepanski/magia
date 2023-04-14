import * as React from "react"
import styled, { keyframes } from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const animationTo = (props) => keyframes`
  to { ${props}; }
`
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background-color: #1a1e23;
  @media (orientation: portrait) {
    height: max(100vh, 150vw);
  }
`
const HeroWrap = styled.div`
  display: flex;
  height: 100%;
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    align-items: center;
  }
`
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    width: 60%;
    @media (orientation: portrait) {
      width: 100%;
    }
  }
  :last-of-type {
    display: flex;
    justify-content: flex-end;
    padding-right: 6vw;
    width: 40%;
    @media (orientation: portrait) {
      justify-content: center;
      width: 100%;
      padding-right: 0;
    }
  }
`
const CircleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 12vw #ff0420;
  -moz-box-shadow: 0 0 12vw #ff0420;
  box-shadow: 0 0 12vw #ff0420;
  background-color: #ff0420;
  z-index: 2;
  @media (orientation: portrait) {
    width: min(75vw, 50rem);
    height: min(75vw, 50rem);
    -webkit-box-shadow: 0 0 18vw #ff0420;
    -moz-box-shadow: 0 0 18vw #ff0420;
    box-shadow: 0 0 18vw #ff0420;
  }
`
const H1 = styled.h1`
  position: relative;
  max-width: 80%;
  padding-left: 3vw;
  font-size: 6vw;
  background-color: #1a1e23;
  color: #fff;
  z-index: 2;
  @media (orientation: landscape) {
    -webkit-box-shadow: 0px 0px 20px 2vw #1a1e23;
    -moz-box-shadow: 0px 0px 20px 2vw #1a1e23;
    box-shadow: 0px 0px 20px 2vw #1a1e23;
  }
  @media (orientation: portrait) {
    max-width: 100%;
    padding: 0;
    font-size: min(11vw, 6rem);
    text-align: center;
    background-color: transparent;
  }
`
const Span = styled.span`
  font-size: 5vw;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 1px;
  @media (orientation: portrait) {
    font-size: 12vw;
  }
`
const HeroBar = styled.div`
  box-sizing: content-box;
  padding: 0 3vw;
  border-top: .2vw solid #1a1e23;
  border-bottom: .2vw solid #1a1e23;
  background-color: #ff0420;
`
const HeroBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3vw;
  transform: translateX(105%);
  animation: ${props => props.animation} 33s linear infinite;
  @media (orientation: portrait) {
    height: 12vw;
    animation: ${props => props.animationPortrait} 33s linear infinite;
  }
`
const BarWord = styled.span`
  font-size: 1.8vw;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #1a1e23;
  @media (orientation: portrait) {
    font-size: 5vw;
  }
`
const StarsParent = styled.div`
  padding: 0 3vw;
  @media (orientation: portrait) {
    padding: 0 6vw;
  }
`
const AnimationWrap = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  animation: ${props => props.animation} 20s linear infinite alternate, ${animationTo('opacity: .2')} 4s ease-in infinite alternate;
`

const allStars = [
  {top:'3%', left:'69%', animation: 'transform: translate(1vw, 4vw)'},
  {top:'7%', left:'40%', animation: 'transform: translate(-2vw, 2vw)'},
  {top:'8%', left:'93%', animation: 'transform: translate(-1vw, -8vw)'},
  {top:'10%', left:'15%', animation: 'transform: translate(5vw, 3vw)'},
  {top:'13%', left:'75%', animation: 'transform: translate(-7vw, 7vw)'},
  {top:'16%', left:'52%', animation: 'transform: translate(1vw, -3vw)'},
  {top:'17%', left:'90%', animation: 'transform: translate(-7vw, -4vw)'},
  {top:'18%', left:'29%', animation: 'transform: translate(-7vw, -4vw)'},
  {top:'23%', left:'34%', animation: 'transform: translate(-6vw, 5vw)'},
  {top:'29%', left:'12%', animation: 'transform: translate(-3vw, 1vw)'},
  {top:'30%', left:'50%', animation: 'transform: translate(-3vw, 2vw)'},
  {top:'32%', left:'55%', animation: 'transform: translate(5vw, -8vw)'},
  {top:'38%', left:'44%', animation: 'transform: translate(-5vw, -5vw)'},
  {top:'38%', left:'97%', animation: 'transform: translate(2vw, 1vw)'},
  {top:'40%', left:'54%', animation: 'transform: translate(1vw, 4vw)'},
  {top:'42%', left:'4%', animation: 'transform: translate(7vw, 2vw)'},
  {top:'48%', left:'25%', animation: 'transform: translate(-2vw, 8vw)'},
  {top:'52%', left:'95%', animation: 'transform: translate(-2vw, 3vw)'},
  {top:'53%', left:'35%', animation: 'transform: translate(2vw, 2vw)'},
  {top:'59%', left:'67%', animation: 'transform: translate(-3vw, 9vw)'},
  {top:'62%', left:'2%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'64%', left:'45%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'65%', left:'56%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'66%', left:'80%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'72%', left:'3%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'75%', left:'56%', animation: 'transform: translate(-1vw, -4vw)'},
  {top:'77%', left:'39%', animation: 'transform: translate(2vw, -2vw)'},
  {top:'84%', left:'32%', animation: 'transform: translate(1vw, -4vw)'},
  {top:'85%', left:'20%', animation: 'transform: translate(-5vw, -4vw)'},
  {top:'85%', left:'50%', animation: 'transform: translate(-1vw, 1vw)'},
  {top:'86%', left:'71%', animation: 'transform: translate(5vw, -3vw)'},
  {top:'87%', left:'88%', animation: 'transform: translate(3vw, -2vw)'},
  {top:'89%', left:'5%', animation: 'transform: translate(2vw, -6vw)'}
]

const Hero = ({h1, heroBarHeadings, heroBarTransform, heroBarTransformMobile}) => (
  <Wrap>
    <HeroWrap>
      <HeroContainer>
        <H1>{h1}</H1>
      </HeroContainer>
      <HeroContainer>
        <CircleWrap>
          <Span>magia</Span>
        </CircleWrap>
      </HeroContainer>
    </HeroWrap>
    <HeroBar>
      <HeroBarWrap animation={animationTo(`transform: translateX(${heroBarTransform})`)} animationPortrait={animationTo(`transform: translateX(${heroBarTransformMobile})`)}>
        {heroBarHeadings.map((heading, i) => {
          return <React.Fragment key={i}>
            <BarWord>{heading}</BarWord>
            <StarsParent className='stars-hero-bar'>
              <StaticImage
                src="../images/gwiazdy.svg"
                placeholder="blurred"
                width={60}
                height={60}
                formats={["auto", "webp"]}
                alt="gwiazdy - przerywnik oferta"
                transformOptions={{ fit: "cover", cropFocus: "attention" }}
                loading='eager'
              />
              
            </StarsParent>
          </React.Fragment>
        })}
      </HeroBarWrap>
    </HeroBar>
    {allStars.map((star, i) => {
      return <AnimationWrap width='1vw' top={star.top} left={star.left} animation={animationTo(star.animation)} key={i}>
        <StaticImage
          src="../images/gwiazda.svg"
          placeholder="blurred"
          width={30}
          height={30}
          formats={["auto", "webp"]}
          alt="gwiazda"
          transformOptions={{ fit: "cover", cropFocus: "attention" }}
          loading='eager'
        /> 
      </AnimationWrap>
    })}
  </Wrap>
)

export default Hero
