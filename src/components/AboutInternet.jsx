import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Wrap = styled.section`
   display: flex;
`
const Container = styled.article`
    width: 60%;
    margin: 3vw;
    padding: 3vw 4.5vw;
    border: #1a1e23 solid .3vw;
    background-color: #fff;
    @media (orientation: portrait) {
        width: 100%;
        padding: 9vw 6vw;
    }
`
const H2 = styled.h2`
    padding-bottom: 1.5vw;
    font-size: 2.5vw;
    color: #1a1e23;
    @media (orientation: portrait) {
        padding-bottom: 6vw;
        font-size: 9vw;
        text-align: center;
    }
`
const P = styled.p`
    padding: 0 0 3vw;
    font-size: 1.3vw;
    line-height: 2.5vw;
    @media (orientation: portrait) {
        padding: 0 0 12vw;
        font-size: 5vw;
        line-height: 7vw;
        text-align: center;
    }
`
const StyledLink = styled.div`
    display: flex;
    justify-content: center;
`
const Container2 = styled.div`
    position: relative;
    width: 40%;
    padding: 3vw 3vw 3vw 0;
    @media (orientation: portrait) {
        display: none;
    }
`
const Box = styled.div`
    position: sticky;
    top: 3vw;
    padding: 3vw;
`
const Span = styled.span`
    position: absolute;
    width: 13vw;
    font-size: 1.5vw;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .1vw;
    color: #fff;
    &:nth-of-type(1) {
        top: 3.5vw;
        left: -1vw;
        transform: rotate(-45deg);
    }
    &:nth-of-type(2) {
        top: 3.5vw;
        right: -1vw;
        transform: rotate(45deg);
    }
    &:nth-of-type(3) {
        bottom: 3.5vw;
        left: -1vw;
        transform: rotate(-315deg);
    }
    &:nth-of-type(4) {
        bottom: 3.5vw;
        right: -1vw;
        transform: rotate(315deg);
    }
`


const AboutInternet = () => (
  <Wrap>
    <Container>
        <H2>Wspaniały Świat Online</H2>
        <P>
        W dzisiejszych czasach korzystanie z Internetu stało się niemal powszechne. 
        To dzięki niemu możemy w prosty i szybki sposób uzyskać dostęp do informacji i komunikować się z innymi ludźmi. 
        Codziennością stało się dokonywanie zakupów czy korzystanie z różnych usług online. 
        Sieć zrewolucjonizowała nasze życie i zapewniła nam dostęp do świata, który jeszcze kilka dekad temu był dla nas nieosiągalny.
        </P>
        <H2>E-commerce</H2>
        <P>
        Jednym z najbardziej znaczących trendów biznesowych w Internecie jest E-commerce, czyli sprzedaż towarów i usług online. 
        Dzięki E-commerce firmy mogą skutecznie dotrzeć do klientów na całym świecie. 
        Pozwala to sprzedawać swoje produkty bezpośrednio z własnych stron www lub renomowanych platform handlowych.
        </P>
        <H2>Marketing w Sieci</H2>
        <P>
        Marketing online to kolejny ważny aspekt biznesu w wirtualnej rzeczywistości. 
        Dzięki własnym, dobrze wypozycjonowanym witrynom www, przedsiębiorcy mogą dotrzeć do potencjalnych klientów w sposób skuteczny i zwiększyć świadomość marki. 
        Marketing w sieci daje również możliwość prowadzenia kampanii reklamowych z mniejszym budżetem niż tradycyjne media. 
        Jest to szczególnie ważne dla małych i średnich firm.
        </P>
        <StyledLink>
            <Link to='/oferta' rel='noreferer' className='button'>zapoznaj się z naszą ofertą</Link>
        </StyledLink>
    </Container>
    <Container2>
        <Box>
            <StaticImage
                src="../images/swiat-online.svg"
                placeholder="blurred"
                width={512}
                height={512}
                formats={["auto", "webp", "avif"]}
                alt="świat online"
                transformOptions={{ fit: "cover", cropFocus: "attention" }}
                loading='eager'
            /> 
            <Span>dostępność informacji</Span>
            <Span>łatwa komunikacja</Span>
            <Span>sprzedaż online</Span>
            <Span>silny marketing</Span>
        </Box>  
    </Container2>
  </Wrap>
)



export default AboutInternet
