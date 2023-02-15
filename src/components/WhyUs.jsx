import * as React from "react"
import styled from 'styled-components'
import { Shield } from '../gatsbyImages'

const Wrap = styled.article`
  padding: 3vw;
  background-color: #1a1e23;
`
const H2 = styled.h2`
  padding-bottom: 6vw;
  font-size: 4vw;
  text-align: center;
  color: #ff0420;
`
const Section = styled.section`
  display: flex;
  padding-bottom: 6vw;
  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.padding};
`
const H3 = styled.h3`
  font-size: 2.5vw;
  color: #ff0420;
`
const H4 = styled.h4`
  padding-bottom: 3vw;
  font-size: 1.5vw;
`
const Li = styled.li`
  padding-bottom: 1.5vw;
`
const LiNoBullet = styled.li`
  padding-bottom: 1.5vw;  
  list-style-type: none;
`
const LiSmallPadding = styled.li`
  padding-bottom: .75vw;
`
const H5 = styled.h5`
  font-size: 1.2vw;
  color: #ff0420;
`
const P = styled.p`
  font-size: 1.2vw;
  line-height: 2vw;
  color: #fff;
`
const Strong = styled.strong`
  padding-top: .1vw;
  font-size: 1.2vw;
  line-height: 2vw;
`
const IframeParent = styled.div`
  display: flex;
  align-items: center;
`
const Iframe = styled.iframe`
  width: 40vw;
  height: 26.66vw;
  font-size: 1vw;
`
const ImageParent = styled.div`
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
`

const all_text = [
  {
    heading: 'szybkość',
    paragraph: <P><ul>
      <Li>Klienci oczekują błyskawicznego załadowania się witryny - <Strong>40% odwiedzających opuszcza stronę, która nie zdąża załadować się w ciągu 3 sekund!</Strong> Każda sekunda opóźnienia witryny przekłada się na 7%-owy spadek sprzedaży. Może się to przekładać na tysiące złotych strat w skali roku.</Li>
      <Li>Wyszukiwarki uwzględniają szybkość ładowania się strony w swoich algorytmach rankingowych. <Strong>Długie ładowanie - niska pozycja w Google</Strong>.</Li>
      <Li>Użytkownicy często korzystają z Internetu na swoich telefonach oraz tabletach, więc szybkość strony jest szczególnie ważna w przypadku użytkowników korzystających z sieci komórkowych.</Li>
    </ul>
    <h4>Dlaczego nasze strony są wyraźnie szybsze?</h4>
    <P>Tworzymy w technologii <Strong>HEADLESS</Strong> - nowatorskiej metodzie umożliwiającej wstępne ładowanie się strony <Strong>zanim</Strong> użytkownik ją odwiedzi - po stronie serwera!</P>
    </P>
  },
  {
    heading: 'responsywność',
    paragraph: <P>Z Magią masz pewność, że Twoja strona będzie <Strong>w pełni</Strong> responsywna. 
    Większość witryn, tworzonych nawet przez renomowane agencje, "rozjeżdża się" na niewielkich laptopach, 
    a na szerokich ekranach komputerów wyświetlany tekst jest zbyt mały.
    Często spotykane są problemy z interfejsem przy zmianie wielkości okna przeglądarki na komputerze, czy przełączaniu widoku z pionowego na poziomy na telefonie.
    Nasze projekty są w pełni dostosowane do <Strong>wszystkich</Strong> urządzeń - komputerów stacjonarnych, laptopów, tabletów, smartfonów, a nawet telewizorów.
    </P>
  },
  {
    heading: 'UX - doświadczenia użytkownika',
    paragraph: <P>
      <H4>Nasze strony nie wkurzają!</H4>
      <ul>
        <LiNoBullet>
          <H5>Koniec ze skaczącymi po stronie przyciskami</H5>
          <P>Elementy naszych witryn nie przeskakują podczas ładowania się strony, ani po najechaniu kursorem lub kliknięciu na cokolwiek.</P>
        </LiNoBullet>
        <LiNoBullet>
          <H5>Interaktywne elementy</H5>
          <P>Przyciski, linki, zdjęcia i wszystkie inne interaktywne elementy na naszych stronach reagują animacjami na klikanie czy najechanie na nie kursorem, 
            by Twój klient z łatwością domyślił się w jaki sposób korzystać z interfejsu.</P>
        </LiNoBullet>
        <LiNoBullet>
          <H5>Intuicyjny design</H5>
          <P>Nie wprowadzamy internautów w błąd przesadzonym designem, by każdy natychmiast się orientował co do czego służy oraz od razu znalazł to, czego szuka.</P>
        </LiNoBullet>
      </ul>
    </P>
  },
  {
    heading: 'Opieka posprzedażowa',
    paragraph: <P>
      <H4>Utrzymujemy świetne relacje z naszymi klientami</H4>
      <ol>
        <LiSmallPadding>Dbamy o SEO Twojej strony - jej dobrą pozycję w Google.</LiSmallPadding>
        <LiSmallPadding>Pomagamy obsługiwać Twoją witrynę.</LiSmallPadding>
        <LiSmallPadding>Doradzamy i <Strong>chętnie</Strong> odpowiadamy na Twoje pytania.</LiSmallPadding>
        <LiSmallPadding>Zajmujemy się całością internetowej części Twojego biznesu.</LiSmallPadding>
      </ol>
    </P>,
    noVideo: true
  }
]




const WhyUs = () => (
  <Wrap>
    <H2>dlaczego magia?</H2>
    {all_text.map((text, i) => {
      return <Section key={i}>
        <Text padding={i%2 ? '0 0 0 6vw' : '0 6vw 0 0'}>
          <H3>{text.heading}</H3>
          {text.paragraph}
        </Text>
        { !text.noVideo ? <IframeParent>
          <Iframe
            src="https://www.youtube.com/embed/QKk8RGBcOaI" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </Iframe>
        </IframeParent> :
        <ImageParent>
          <Shield></Shield>
        </ImageParent>
        }
      </Section>
    })}
  </Wrap>
)

export default WhyUs
