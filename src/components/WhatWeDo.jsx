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
    &:after {
        content: '';
        display: block;
        width: 90%;
        height: .3vw;
        margin: 3vw auto 4.5vw;
        background-color: #ff0420;
    }
    @media (orientation: portrait) {
        font-size: 6vw;
        &:after {
            @media (orientation: portrait) {
                height: .9vw;
            }
        }
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
    
`

const boxes = [
    {
        heading: 'Witryny i Aplikacje WWW',
        text: 'Tworzymy witryny www przy pomocy najnowszych technologii i najlepszych języków programowania.'
    },
    {
        heading: 'Skuteczne Sklepy Online',
        text: 'Programujemy różnego typu efektywne platformy do sprzedaży online z wysokim współczynnikiem konwersji.'
    },
    {
        heading: 'Niezawodne Systemy CMS',
        text: 'Używamy przystępnych paneli zarządzania witrynami umożliwiających łatwą edycję i dodawanie treści.'
    },
    {
        heading: 'Estetyczna Grafika',
        text: 'Projektujemy atrakcyjne wizualnie witryny dbając o ich wyjątkowość i branże, jakie mają reprezentować.'
    },
    {
        heading: 'Intuicyjny Interfejs',
        text: 'Kładziemy nacisk na pozytywne doświadczenia użytkowników i klientów pod względem poruszania się po witrynie.'
    },
    {
        heading: 'Przetestowane Realizacje',
        text: 'Testujemy wygląd projektów na każdego typu komputerach, tabletach, telefonach, przeglądarkach i systemach operacyjnych.'
    },
    {
        heading: 'Pozycjonowanie i SEO',
        text: 'Zapewniamy firmom atrakcyjne lokaty w Google w wymiarze programistycznym, poprzez pisanie artykułów i innych możliwości.'
    },
    {
        heading: 'Audyt Serwisów WWW',
        text: 'Analizujemy biznesy online w celu poprawy ich wydajności technicznej oraz przystępności i atrakcyjności dla klientów.'
    }
]

const WhatWeDo = () => (
  <Wrap>
    {boxes.map((box, i) => {
        return <Container key={i}>
            <H2>{box.heading}</H2>
            <P>{box.text}</P>
        </Container>
    })}
  </Wrap>
)

export default WhatWeDo
