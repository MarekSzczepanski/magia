import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/Hero'
import ListArticle from '../components/ListArticle'
import Infographic from '../components/Infographic'
import WhyUs from '../components/WhyUs'
import KnowledgeNotRequired from '../components/KnowledgeNotRequired'
import { useState } from 'react'

/*export const query = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }
`*/

const WebpagesInfo = styled.section`
  display: flex;
  background-color: #ff0420;
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    position: relative;
  }
`

const allLi = [
  {
    strong: 'Wizerunek i reputacja',
    text: 'Strona internetowa jest wizytówką Twojej firmy. Może być pierwszym miejscem, w którym potencjalni klienci będą ją oceniać. Posiadanie profesjonalnej i atrakcyjnej witryny wzmacnia pozytywny wizerunek Twojej firmy i buduje dobrą reputację wśród klientów.'
  },
  {
    strong: 'Dostęność',
    text: 'Strona www umożliwia udostępnianie szerokiego zakresu informacji o Twojej działalności, w tym oferty produktów lub usług, godzin pracy, czy lokalizacji. Dostępność tych informacji 24 godziny na dobę, 7 dni w tygodniu, ułatwia klientom dotarcie do niezbędnych danych.'
  },
  {
    strong: 'Marketing',
    text: 'Internet jest skutecznym narzędziem marketingowym. Umożliwia reklamowanie produktów lub usług oraz budowanie relacji z klientami. Możesz wykorzystać swoją witrynę do prowadzenia kampanii reklamowych, newsletterów i integracji z mediami społecznościowymi.'
  },
  {
    strong: 'Sprzedaż',
    text: 'Sklep internetowy umożliwia sprzedaż produktów lub usług online. Dzięki stronie www możesz umożliwić klientom łatwe i wygodne dokonywanie zakupów.'
  },
  {
    strong: 'Pozycja w Google',
    text: 'Wysokie miejsce w wynikach wyszukiwania może zwiększyć zaufanie i wiarygodność w oczach potencjalnych klientów, co może przełożyć się na większą liczbę odwiedzin i zamówień. Dobra pozycja w wynikach wyszukiwania może pomóc w zwiększeniu zasięgu marki i zbudowaniu wizerunku eksperta w swojej branży.'
  },
]

const heroBarHeadings = [
  'projektowanie i tworzenie stron www',
  'sklepy internetowe',
  'witryny wordpress',
  'strony widoczne w wyszukiwarce google', 
  'serwisy i aplikacje www'
]

const Ostroda = () => {
  const [isReadMoreActive, toggleReadMore] = useState(false);

  return (
    <Layout>
      <Hero h1={'strony internetowe ostróda'} heroBarHeadings={heroBarHeadings} heroBarTransform={'-215%'} heroBarTransformMobile={'-600%'}></Hero>
      <WebpagesInfo>
        <ListArticle allLi={allLi} isActive={isReadMoreActive}></ListArticle>
        <Infographic toggleReadMore={toggleReadMore} isReadMoreActive={isReadMoreActive}></Infographic>
      </WebpagesInfo>
      <WhyUs></WhyUs>
      <KnowledgeNotRequired></KnowledgeNotRequired>

    {/*
      <h3>Wpisy</h3>
    {data.allWpPost.edges.map(({ node }) => (
      <div key={node.id}>
        <p>{node.title}</p>
        {node.excerpt ? <p>{node.excerpt.replace('<p>', '').replace('</p>', '')}</p> : null}
      </div>
    ))}
    */}
    
    </Layout>
  )
}

export const Head = () => <Seo title="Strony Internetowe Ostróda" />
export default Ostroda