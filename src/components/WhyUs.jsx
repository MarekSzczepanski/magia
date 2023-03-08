import * as React from "react"
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"

const Wrap = styled.section`
  padding: 3vw;
  background-color: #1a1e23;
  @media (orientation: portrait) {
    padding: 6vw 3vw;
  }
`
const H2 = styled.h2`
  padding-bottom: 4.5vw;
  font-size: 4vw;
  text-align: center;
  color: #ff0420;
  @media (orientation: portrait) {
    padding-bottom: 6vw;
    font-size: 8.5vw;
  }
`

/* remember to change it after adding iframes */
const Section = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 6vw;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    &:nth-of-type(even) {
      flex-direction: column;
    }
    > div:last-of-type {
      display: none;
    }
    &:last-of-type {
      flex-direction: column-reverse;
      > div:last-of-type {
        display: flex;
      }
    }
  }
`
const Text = styled.section`
  width: 60vw;
  padding: ${props => props.padding};
  @media (orientation: portrait) {
    width: 100%;
    padding: 0;
  }
`
const H3 = styled.h3`
  padding-bottom: .75vw;
  font-size: 2.5vw;
  color: #ff0420;
  @media (orientation: portrait) {
    padding-top: 6vw;
    font-size: 7.5vw;
    text-align: center;
  }
`
const H4v2 = styled.h4`
  padding-top: 1.5vw;
  font-size: 1.5vw;
  color: #ff0420;
  @media (orientation: portrait) {
    padding-top: 6vw;
    font-size: 6vw;
    line-height: 9vw;
    text-align: center;
  }
`
const PLarge = styled.p`
  padding: 0 0 3vw 0;
  font-size: 1.5vw;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 5vw;
    line-height: 9vw;
    text-align: center;
  }
`
const Li = styled.li`
  padding-bottom: 1.5vw;
  font-size: 1.3vw;
  line-height: 2vw;
  color: #fff;
  @media (orientation: portrait) {
    padding-bottom: 6vw;
    font-size: 5vw;
    line-height: 8vw;
    text-align: left;
  }
`
const LiSmallPadding = styled.li`
  padding-bottom: .75vw;
  font-size: 1.3vw;
  line-height: 2vw;
  color: #fff;
  @media (orientation: portrait) {
    padding-bottom: 3vw;
    font-size: 5vw;
    line-height: 8vw;
    text-align: left;
  }
`
const P = styled.p`
  font-size: 1.2vw;
  line-height: 2vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 5vw;
    line-height: 8vw;
    text-align: center;
  }
`
const Strong = styled.strong`
  padding-top: .1vw;
  font-size: 1.3vw;
  line-height: 2vw;
  @media (orientation: portrait) {
    font-size: 5vw;
    line-height: 8vw;
  }
`
const Ol = styled.ol`
  padding-top: 1.5vw;
`
const IframeParent = styled.section`
  display: flex;
  align-items: center;
`
const Iframe = styled.iframe`
  width: 40vw;
  height: 26.66vw;
  font-size: 1vw;
  @media (orientation: portrait) {
    width: 94vw;
    height: 62.66vw;
    margin-top: 6vw;
  }
`
const ImageParent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 30vw;
  margin-right: 5vw;
  border-radius: 50%;
  background-color: #ff0420;
  -webkit-box-shadow: 0 0 10vw #ff0420;
  -moz-box-shadow: 0 0 10vw #ff0420;
  box-shadow: 0 0 10vw #ff0420;
  @media (orientation: portrait) {
    display: none;
    width: 80vw;
    height: 80vw;
    margin: 6vw 0 9vw;
  }
`

const all_text = [
  {
    content: <div>
    <section>
      <H3>Szybkość</H3>
      <ul>
        <Li>Klienci oczekują błyskawicznego załadowania się witryny - <Strong>40%</Strong> odwiedzających 
        opuszcza stronę, która nie zdąża załadować się w ciągu <Strong>3 sekund!</Strong> Każda 
        sekunda opóźnienia witryny przekłada się na 7%-owy spadek sprzedaży. 
        Może się to przekładać na tysiące złotych strat w skali roku.</Li>
        <Li>Wyszukiwarki uwzględniają szybkość ładowania się strony w swoich algorytmach rankingowych. <Strong>Długie ładowanie - 
        niska pozycja w Google</Strong>.</Li>
        <Li>Użytkownicy często korzystają z Internetu na swoich telefonach oraz tabletach, 
        więc szybkość strony jest szczególnie ważna w przypadku użytkowników korzystających z sieci komórkowych.</Li>
      </ul>
    </section>
    <section>
      <H4v2>Dlaczego nasze strony są wyraźnie szybsze?</H4v2>
      <P>Tworzymy w technologii <Strong>HEADLESS</Strong> - nowatorskiej metodzie umożliwiającej wstępne 
      ładowanie się strony <Strong>zanim</Strong> użytkownik ją odwiedzi - po stronie serwera!</P>
    </section>
    </div>
  },
  {
    content: <div>
    <H3>Responsywność</H3>
    <P>Z Magią masz pewność, że Twoja strona będzie <Strong>w pełni</Strong> responsywna. 
    Większość witryn, tworzonych nawet przez renomowane agencje, "rozjeżdża się" na niewielkich laptopach, 
    a na szerokich ekranach komputerów wyświetlany tekst jest zbyt mały.
    Często spotykane są problemy z interfejsem przy zmianie wielkości okna przeglądarki na komputerze, czy przełączaniu widoku z pionowego na poziomy na telefonie.
    Nasze projekty są w pełni dostosowane do <Strong>wszystkich</Strong> urządzeń - komputerów stacjonarnych, laptopów, tabletów, smartfonów, a nawet telewizorów.
    </P>
    </div>
  },
  {
    content: <div>
    <H3>UX - Doświadczenia Użytkownika</H3>
    <PLarge>Nasze strony nie wkurzają!</PLarge>
    <section>
      <H4v2>Koniec ze skaczącymi po stronie przyciskami</H4v2>
      <P>Elementy naszych witryn nie przeskakują podczas ładowania się strony, ani po najechaniu kursorem lub kliknięciu na cokolwiek.</P>
    </section>
    <section>
      <H4v2>Interaktywne elementy</H4v2>
      <P>Przyciski, linki, zdjęcia i wszystkie inne interaktywne elementy na naszych stronach reagują animacjami na klikanie czy najechanie na nie kursorem, 
       by Twój klient z łatwością domyślił się w jaki sposób korzystać z interfejsu.</P>
    </section>
    <section>
      <H4v2>Intuicyjny design</H4v2>
      <P>Nie wprowadzamy internautów w błąd przesadzonym designem, by każdy natychmiast się orientował co do czego służy oraz od razu znalazł to, czego szuka.</P>
    </section>
    </div>
  },
  {
    content: <div>
    <H3>Opieka Posprzedażowa</H3>
    <PLarge>Utrzymujemy świetne relacje z naszymi klientami!</PLarge>
    <section>
      <H4v2>Nasze wsparcie posprzedażowe:</H4v2>
      <Ol>
        <LiSmallPadding>Dbamy o SEO Twojej strony - jej dobrą pozycję w Google.</LiSmallPadding>
        <LiSmallPadding>Pomagamy obsługiwać Twoją witrynę.</LiSmallPadding>
        <LiSmallPadding>Doradzamy i <Strong>chętnie</Strong> odpowiadamy na Twoje pytania.</LiSmallPadding>
        <LiSmallPadding>Zajmujemy się całością internetowej części Twojego biznesu.</LiSmallPadding>
      </Ol>
    </section>
    </div>,
    noVideo: true
  }
]

const WhyUs = () => (
  <Wrap>
    <article>
      <H2>dlaczego magia?</H2>
      {all_text.map((text, i) => {
        return <Section key={i}>
          <Text padding={i%2 ? '0 0 0 6vw' : '0 6vw 0 0'}>
            {text.content}
          </Text>
          { !text.noVideo && false ? <IframeParent>
            <Iframe
              src='https://www.youtube.com/embed/QKk8RGBcOaI'
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </Iframe>
          </IframeParent> :
          <ImageParent>
            <StaticImage
              src="../images/opieka-posprzedazowa-strony-internetowe.svg"
              placeholder="blurred"
              width={512}
              height={512}
              formats={["auto", "webp"]}
              alt="opieka posprzedażowa strony internetowe"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
              loading='eager'
              class={'shield'}
            />
          </ImageParent>
          }
        </Section>
      })}
    </article>
  </Wrap>
)

export default WhyUs
