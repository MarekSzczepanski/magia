import * as React from "react"
import styled, { keyframes } from 'styled-components'
import { Stars, Star} from '../gatsbyImages'

const animationTo = (props) => keyframes`
  to { ${props}; }
`
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background-color: #1a1e23;
`
const HeroWrap = styled.div`
  display: flex;
  height: 100%;
`
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  :first-of-type {
    width: 60%;
  }
  :last-of-type {
    display: flex;
    justify-content: flex-end;
    padding-right: 6vw;
    width: 40%;
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
  -webkit-box-shadow: 0 0 10vw #ff0420;
  -moz-box-shadow: 0 0 10vw #ff0420;
  box-shadow: 0 0 10vw #ff0420;
  background-color: #ff0420;
  z-index: 2;
`
const H1 = styled.h1`
  position: relative;
  max-width: 80%;
  padding-left: 3vw;
  font-size: 6vw;
  -webkit-box-shadow: 0px 0px 20px 2vw #1a1e23;
  -moz-box-shadow: 0px 0px 20px 2vw #1a1e23;
  box-shadow: 0px 0px 20px 2vw #1a1e23;
  background-color: #1a1e23;
  color: #fff;
  z-index: 2;
`
const H2 = styled.h2`
  font-size: 5vw;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
`
const HeroBar = styled.div`
  box-sizing: content-box;
  padding: 0 3vw;
  border-top: .3vw solid #1a1e23;
  border-bottom: .3vw solid #1a1e23;
  background-color: #ff0420;
`
const HeroBarWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3vw;
  transform: translateX(105%);
  animation: ${props => props.animation} 19s linear infinite;
`
const BarH2 = styled.h2`
  font-size: 1.8vw;
  white-space: nowrap;
  letter-spacing: 1px;
  color: #1a1e23;
`
const StarsParent = styled.div`
  padding: 0 3vw;
`
const AnimationWrap = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  animation: ${props => props.animation} 20s linear infinite alternate, ${animationTo('opacity: .2')} 4s ease-in infinite alternate;
`

const allStars = [
  {top:'6%', left:'5%', animation: 'transform: translate(3vw, 6vw)'},
  {top:'7%', left:'40%', animation: 'transform: translate(-2vw, 2vw)'},
  {top:'8%', left:'93%', animation: 'transform: translate(-1vw, -8vw)'},
  {top:'10%', left:'15%', animation: 'transform: translate(5vw, 3vw)'},
  {top:'13%', left:'75%', animation: 'transform: translate(-7vw, 7vw)'},
  {top:'16%', left:'52%', animation: 'transform: translate(1vw, -3vw)'},
  {top:'17%', left:'90%', animation: 'transform: translate(-7vw, -4vw)'},
  {top:'23%', left:'34%', animation: 'transform: translate(-6vw, 5vw)'},
  {top:'29%', left:'12%', animation: 'transform: translate(-3vw, 1vw)'},
  {top:'32%', left:'55%', animation: 'transform: translate(5vw, -8vw)'},
  {top:'38%', left:'44%', animation: 'transform: translate(-5vw, -5vw)'},
  {top:'42%', left:'4%', animation: 'transform: translate(7vw, 2vw)'},
  {top:'48%', left:'25%', animation: 'transform: translate(-2vw, 8vw)'},
  {top:'53%', left:'35%', animation: 'transform: translate(2vw, 2vw)'},
  {top:'59%', left:'67%', animation: 'transform: translate(-3vw, 9vw)'},
  {top:'62%', left:'2%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'64%', left:'45%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'65%', left:'56%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'66%', left:'80%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'72%', left:'3%', animation: 'transform: translate(7vw, -3vw)'},
  {top:'75%', left:'56%', animation: 'transform: translate(-1vw, -4vw)'},
  {top:'77%', left:'39%', animation: 'transform: translate(2vw, -2vw)'},
  {top:'85%', left:'20%', animation: 'transform: translate(-5vw, -4vw)'},
  {top:'87%', left:'88%', animation: 'transform: translate(3vw, -2vw)'},
]

const heroBarHeadings = [
  'projektowanie i tworzenie stron www',
  'sklepy internetowe',
  'witryny wordpress',
  'strony widoczne w wyszukiwarce google', 
  'serwisy i aplikacje www'
]

const Hero = () => (
  <Wrap>
    <HeroWrap>
      <HeroContainer>
        <H1>strony internetowe ostróda</H1>
      </HeroContainer>
      <HeroContainer>
        <CircleWrap>
          <H2>magia</H2>
        </CircleWrap>
      </HeroContainer>
    </HeroWrap>
    <HeroBar>
      <HeroBarWrap animation={animationTo('transform: translateX(-215%)')}>
        {heroBarHeadings.map((heading, i) => {
          return <React.Fragment key={i}>
            <BarH2>{heading}</BarH2>
            <StarsParent>
              <Stars width='2vw'></Stars>
            </StarsParent>
          </React.Fragment>
        })}
      </HeroBarWrap>
    </HeroBar>
    {allStars.map((star, i) => {
      return <AnimationWrap width='1vw' top={star.top} left={star.left} animation={animationTo(star.animation)} key={i}><Star></Star></AnimationWrap>
    })}
  </Wrap>
)

export default Hero
