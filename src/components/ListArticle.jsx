import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Wrap = styled.article`
  width: 40%;
  padding: 3vw;
  border-right: .3vw solid #1a1e23;
  background-color: #fff;
`
const H3 = styled.h3`
  font-size: 2.4vw;
  color: #1a1e23;
`
const Li = styled.li`
  padding-bottom: 1.5vw;
  font-size: 1.2vw;
  line-height: 1.8vw;
  color: #1a1e23;
  &:first-of-type {
    padding-top: 3vw;
  }
`

const ListArticle = ({ allLi }) => (
  <Wrap>
    <H3>Dlaczego warto mieć <strong>stronę internetową</strong>?</H3>
    <ol>
      {allLi.map((li, i) => {
        return <Li key={i}>
          <strong>{li.strong}</strong>: {li.text}
        </Li>
      })}
    </ol>
    <Link className='button'>bezpłatna wycena</Link>
  </Wrap> 
)

export default ListArticle



