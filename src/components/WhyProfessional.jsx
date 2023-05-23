import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  padding: 6vw 3vw;
  background-color: #1a1e23;
  @media (orientation: portrait) {
    padding: 9vw 6vw;
  }
`;
const H2 = styled.h2`
  font-size: 2.7vw;
  line-height: 3.9vw;
  text-align: center;
  letter-spacing: 0.2vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 6.5vw;
    line-height: 8.75vw;
    letter-spacing: 0.3vw;
  }
`;
const P = styled.p`
  max-width: 75ch;
  font-size: clamp(0.6rem, 1.3vw, 1.25rem);
  line-height: clamp(1rem, 2.5vw, 2rem);
  color: #fff;
  &.top {
    margin: 0 auto;
    padding-top: 3vw;
    text-align: center;
  }
  @media (orientation: portrait) {
    padding-top: 9vw;
    font-size: 4.5vw;
    font-weight: 500;
    line-height: 7.5vw;
    text-align: center;
    &.top {
      width: 90%;
      padding-top: 9vw;
    }
  }
`;
const Strong = styled.strong`
  letter-spacing: 0.2vw;
  color: #eb001a;
  @media (orientation: portrait) {
    letter-spacing: 0.4vw;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6vw;
  border: 0.1vw solid #fff;
  list-style-type: none;
  @media (orientation: portrait) {
    flex-direction: column;
    margin-top: 12vw;
  }
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 0.1vw solid #fff;
  @media (orientation: portrait) {
    align-items: center;
    padding: 9vw 7.5vw;
  }
  @media (orientation: landscape) {
    width: 50%;
    padding: 3vw;
    &:nth-of-type(odd) {
      border-right: 0.1vw solid #fff;
    }
    &:nth-last-of-type(-n + 2) {
      border-bottom: none;
    }
  }
`;
const H3 = styled.h3`
  font-size: clamp(1rem, 1.8vw, 2rem);
  line-height: clamp(1.5rem, 2.5vw, 2.5rem);
  color: #ff0420;
  @media (orientation: portrait) {
    font-size: 6vw;
    line-height: 9vw;
    text-align: center;
  }
`;
const allLi = [
  {
    heading: 'Wiedza i Doświadczenie',
    text: 'Wdrażanie strony www to skomplikowany proces, wymagający wiedzy i doświadczenia. Profesjonalista zawsze będzie w stanie stworzyć witrynę zgodnie z najnowszymi trendami w projektowaniu. Wieloletnie doświadczenie umożliwia niezawodną realizację projektów.'
  },
  {
    heading: 'Optymalizacja Dla Wyszukiwarek',
    text: 'Optymalizacja witryny dla wyszukiwarek to kluczowy element, który wpływa na pozycję serwisu w wynikach wyszukiwania. Specjaliści w dziedzinie projektowania www doskonale znają tajniki optymalizacji pod kątem SEO i są w stanie stworzyć stronę, która będzie dobrze widoczna w Google i innych wyszukiwarkach.'
  },
  {
    heading: 'Potrzeby Klienta',
    text: 'Profesjonalista zawsze będzie starał się jak najlepiej poznać potrzeby i oczekiwania klienta, aby stworzyć stronę dopasowaną do jego wymagań. W ten sposób powstaje unikalna i spersonalizowana witryna, która w pełni odpowiada potrzebom firmy.'
  },
  {
    heading: 'Technologia i Narzędzia',
    text: 'Praca nad witryną www to nie tylko projektowanie grafiki i umieszczanie treści, ale również wykorzystywanie najnowszych technologii. Profesjonaliści mają dostęp do najwydajniejszych języków programowania i narzędzi. Pozwala to na stworzenie innowacyjnych i funkcjonalnych serwisów.'
  },
  {
    heading: 'Wsparcie Techniczne',
    text: 'Zlecając usługę online specjalistom, firma zyskuje dostęp do wsparcia technicznego. W razie potrzeby specjaliści są w stanie szybko i skutecznie rozwiązać problemy techniczne związane z funkcjonowaniem serwisu. Pomaga w tym regularny monitoring wdrożonych witryn.'
  },
  {
    heading: 'Oszczędność Czasu i Pieniędzy',
    text: 'Współpraca z zawodowcem to oszczędność czasu i pieniędzy, w porównaniu do samodzielnego tworzenia witryny. Profesjonaliści są w stanie stworzyć ją szybciej i sprawniej, co pozwala skupić się na prowadzeniu biznesu. Tworzenie witryn bez odpowiedniego doświadczenia jest również z wielu względów niebezpieczne.'
  }
];

const WhyProfessional = () => (
  <Wrap>
    <H2>
      Dlaczego warto zlecić stworzenie serwisu www <Strong>profesjonalistom</Strong>?
    </H2>
    <P className="top">
      {' '}
      Strona internetowa to niezbędne narzędzie dla każdej poważnej firmy. W związku z tym coraz
      więcej przedsiębiorstw decyduje się na stworzenie swojej własnej witryny. Niemniej jednak,
      wielu przedsiębiorców zadaje sobie pytanie,{' '}
      <strong>czy warto zlecać projektowanie strony www profesjonalistom</strong>. Poniżej
      przedstawiamy kilka argumentów, dlaczego warto powierzyć stworzenie witryny www specjalistom.
    </P>
    <Ul>
      {allLi.map((li, i) => {
        return (
          <Li key={i}>
            <H3>{li.heading}</H3>
            <P>{li.text}</P>
          </Li>
        );
      })}
    </Ul>
  </Wrap>
);

export default WhyProfessional;
