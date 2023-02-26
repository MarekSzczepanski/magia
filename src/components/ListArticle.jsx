import * as React from "react"
//import { Link } from "gatsby"
import styled from 'styled-components'

const Wrap = styled.article`
  width: 40%;
  padding: 3vw;
  border-top: .1vw solid #1a1e23;
  border-right: .3vw solid #1a1e23;
  background-color: #fff;
  @media (orientation: portrait) {
    position: ${props => props.isActive ? 'static' : 'absolute'};
    transform: translateX(${props => props.isActive ? '0' : '100%'});
    width: 100%;
    padding: 6vw 3vw;
    transition: transform .5s ease-out;
  }
`
const H2 = styled.h2`
  font-size: 2.4vw;
  color: #1a1e23;
  @media (orientation: portrait) {
    font-size: 9vw;
    text-align: center;
  }
`
const Li = styled.li`
  padding-bottom: 1.5vw;
  font-size: 1.2vw;
  line-height: 1.8vw;
  color: #1a1e23;
  &:first-of-type {
    padding-top: 3vw;
  }
  @media (orientation: portrait) {
    padding-bottom: 6vw;
    font-size: 5vw;
    line-height: 8vw;
    &:first-of-type {
      padding-top: 9vw;
    }
  }
`
const Container = styled.div`
  @media (orientation: portrait) {
    display: flex;
    justify-content: center;
  }
`

const ListArticle = ({ allLi, isActive }) => (
  <Wrap isActive={isActive}>
    <H2>Dlaczego warto mieć <strong>stronę internetową</strong>?</H2>
    <ol>
      {allLi.map((li, i) => {
        return <Li key={i}>
          <strong>{li.strong}</strong>: {li.text}
        </Li>
      })}
    </ol>
    <Container>
      {/* <Link to='/' className='button'>bezpłatna wycena</Link> */}
      <a href='tel:+48723062926' className='button'>bezpłatna wycena</a>
    </Container>
  </Wrap> 
)

export default ListArticle



