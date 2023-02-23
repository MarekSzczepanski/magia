import * as React from "react"
import styled from 'styled-components'

const Wrap = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: #fff;
    @media (orientation: portrait) {
        flex-direction: column;
        border-top: solid .7vw #1a1e23;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    padding: 3vw 1.5vw;
    border-right: solid .2vw #1a1e23;
    border-bottom: solid .2vw #1a1e23;
    &: nth-of-type(4n) {
        border-right: none;
    }
    @media (orientation: portrait) {
        width: 100%;
        padding: 12vw;
        border-width: .9vw;
        border-right: none;
    }
`
const H2 = styled.h2`
    font-size: 2.2vw;
    text-align: center;
    color: #1a1e23;
    @media (orientation: portrait) {
        font-size: 6vw;
    }
`
const P = styled.p`
    font-size: 1.5vw;
    font-weight: 500;
    line-height: 2vw;
    text-align: center;
    @media (orientation: portrait) {
        font-size: 4.5vw;
        line-height: 6vw;
    }
`
const Line = styled.div`
    width: 90%;
    height: .3vw;
    margin: 3vw 0 6vw;
    background-color: #ff0420;
    @media (orientation: portrait) {
        height: .9vw;
    }
`

const boxes = [
    {
        heading: 'strony internetowe',
        text: 'Tworzymy strony www przy pomocy najnowszych technologii i najlepszych języków programowania.'
    },
    {
        heading: 'skuteczne sklepy online',
        text: 'Programujemy różnego typu efektywne platformy do sprzedaży online z wysokim współczynnikiem konwersji.'
    },
    {
        heading: 'niezawodne systemy CMS',
        text: 'Używamy przystępnych paneli zarządzania witrynami umożliwiających łatwą edycję i dodawanie treści.'
    },
    {
        heading: 'estetyczna grafika',
        text: 'Projektujemy atrakcyjne wizualnie witryny dbając o ich wyjątkowość i branże, jakie mają reprezentować.'
    },
    {
        heading: 'intuicyjny interfejs',
        text: 'Kładziemy nacisk na pozytywne doświadczenia użytkowników i klientów pod względem poruszania się po witrynie.'
    },
    {
        heading: 'przetestowane realizacje',
        text: 'Testujemy wygląd projektów na każdego typu komputerach, tabletach, telefonach, przeglądarkach i systemach operacyjnych.'
    },
    {
        heading: 'pozycjonowanie i SEO',
        text: 'Zapewniamy firmom atrakcyjne lokaty w Google w wymiarze programistycznym, poprzez pisanie artykułów i innych możliwości.'
    },
    {
        heading: 'audyt serwisów www',
        text: 'Analizujemy biznesy online w celu poprawy ich wydajności technicznej oraz przystępności i atrakcyjności dla klientów.'
    }
]

const WhatWeDo = () => (
  <Wrap>
    {boxes.map((box, i) => {
        return <Container key={i}>
            <H2>{box.heading}</H2>
            <Line></Line>
            <P>{box.text}</P>
        </Container>
    })}
  </Wrap>
)

export default WhatWeDo
