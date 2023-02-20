import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Wrap = styled.section`
    padding: 3vw;
    background-color: #1a1e23;
    @media (orientation: portrait) {
        padding-bottom: 9vw;
    }
`
const H3 = styled.h3`
    padding-bottom: .75vw;
    font-size: 3vw;
    text-align: center;
    color: #fff;
    @media (orientation: portrait) {
        font-size: 7.5vw;
    }
`
const H4 = styled.h4`
    padding-bottom: 3vw;
    font-size: 2vw;
    text-align: center;
    color: #ff0420;
    @media (orientation: portrait) {
        padding-top: 3vw;
        font-size: 6vw;
    }
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 3vw 0 9vw;
    @media (orientation: portrait) {
        flex-direction: column;
    }
`
const Li = styled.li`
    display: flex;
    flex-direction: column;
    width: 21vw;
    height: 30vw;
    padding: 3vw 1.5vw;
    border: solid .3vw #1a1e23;
    border-radius: 3vw;
    list-style-type: none;
    background-color: #ff0420;
    -webkit-box-shadow: 0px 6vw 6vw -3vw rgba(255, 4, 32, 1);
    -moz-box-shadow: 0px 6vw 6vw -3vw rgba(255, 4, 32, 1);
    box-shadow: 0px 6vw 6vw -3vw rgba(255, 4, 32, 1);
    &:last-of-type > div {
        padding-top: .8vw;
        > p {
            font-size: 1.3vw;
            line-height: 1.8vw;
        }
    }
    @media (orientation: portrait) {
        width: 100%;
        height: 134.23vw;
        margin: 6vw 0 12vw;
        padding: 9vw 6vw;
        border-width: .9vw;
        border-radius: 12vw;
        -webkit-box-shadow: 0px 12vw 12vw -6vw rgba(255, 4, 32, 1);
        -moz-box-shadow: 0px 12vw 12vw -6vw rgba(255, 4, 32, 1);
        box-shadow: 0px 12w 12vw -6vw rgba(255, 4, 32, 1);
        &:last-of-type > div {
            padding-top: 3vw;
            > p {
                font-size: 6vw;
                line-height: 9vw;
            }
        }
    }
`
const H5 = styled.h5`
    margin: 0 auto;
    padding-bottom: 1.5vw;
    border-bottom: .1vw solid #fff;
    font-size: 1.8vw;
    font-weight: 800;
    text-align: center;
    line-height: 2.4vw;
    color: #fff;
    @media (orientation: portrait) {
        padding-bottom: 6vw;
        font-size: 7.5vw;
        line-height: 9vw;
        letter-spacing: .3vw;
    }
`
const H6 = styled.h6`
    padding-top: 1.5vw;
    font-size: 1.1vw;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .05vw;
    color: #fff;
    @media (orientation: portrait) {
        padding-top: 6vw;
        font-size: 6vw;
        line-height: 7.5vw;
        letter-spacing: .15vw;
    }
`
const P = styled.p`
    font-size: 1.1vw;
    font-weight: 500;
    text-align: center;
    @media (orientation: portrait) {
        padding-top: 3vw;
        font-size: 4.5vw;
        line-height: 6vw;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (orientation: portrait) {
        > h4 {
            margin-bottom: 3vw;
        }
    }
`

const cardContent = [
    {
        heading: 'jak strona ma wyglądać?',
        subheading1: 'jeśli masz swój projekt:',
        paragraph1: 'Jeśli masz swój pomysł na stronę, to wdrożymy Twoją wizję w życie!',
        subheading2: 'jeśli nie masz projektu:',
        paragraph2: 'Jeśli wolisz zdać się na nasz pomysł, to stworzymy dla Ciebie stronę samodzielnie lub zgodnie z Twoimi wytycznymi.',
    },
    {
        heading: 'co ma się na niej znaleźć?',
        subheading1: 'jeśli masz swoje teksty, logo, grafiki i zdjęcia:',
        paragraph1: 'Jeżeli posiadasz wszystkie niezbędne pliki i treści, to umieścimy je na stronie.',
        subheading2: 'jeśli ich nie masz:',
        paragraph2: 'Napiszemy teksty zgodne z Twoją branżą, zaprojektujemy Ci logo i dobierzemy zdjęcia i grafiki.',
    },
    {
        heading: 'jak umieścić ją w Internecie?',
        subheading1: 'jeśli masz swoją domenę i hosting:',
        paragraph1: 'Wgramy witrynę na Twój serwer i przypiszemy do niego domenę, jesli nie chcesz robić tego osobiście.',
        subheading2: 'jeśli ich nie masz:',
        paragraph2: 'Zadbamy o hosting oraz domenę dla Ciebie.'
    },
    {
        heading: 'czy może się zepsuć?',
        paragraph1: 'Regularnie monitorujemy strony naszych klientów, by przeciwdziałać usterkom. W przypadku jakiejkolwiek awarii możesz liczyć na naszą pomoc!',
    },
]

const KnowledgeNotRequired = () => (
  <Wrap>
    <H3>nie musisz się na tym wszystkim znać!</H3>
    <H4>jeśli trzeba, <strong>wszystkim</strong> zajmiemy się sami</H4>
    <Ul>
        {cardContent.map((card, i) => {
            return <Li>
                <H5>{card.heading}</H5>
                <div>
                    {card.subheading1 ? <H6>{card.subheading1}</H6> : null}
                    <P>{card.paragraph1}</P>
                </div>
                {card.subheading2 || card.paragraph2 ? 
                    <div>
                        {card.subheading2 ? <H6>{card.subheading2}</H6> : null}
                        {card.paragraph2 ? <P>{card.paragraph2}</P> : null}
                    </div>
                    : null
                }
            </Li>
        })}
    </Ul>
    <Container>
        <H4>masz jakiekolwiek wątpliwości?</H4>
        <Link className='button button2'>zadzwoń po darmową poradę!</Link>
    </Container>
  </Wrap> 
)

export default KnowledgeNotRequired



