import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Wrap = styled.article`
    padding: 3vw;
    background-color: #fff;
`
const H1 = styled.h1`
    padding-top: 6vw;
    font-size: 3vw;
    color: #eb001a;
    @media (orientation: portrait) {
        max-width: 80vw;
        padding-top: 3vw;
        font-size: 6vw;
    }
`
const P = styled.p`
    max-width: 75ch;
    font-size: 1rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    line-height: 1.5rem;
    @media (orientation: portrait) {
        padding-top: 3vw;
        font-size: 3.5vw;
        line-height: 6vw;
    }
`
const MainLi = styled.li`
    padding-top: 3vw;
    &:: marker {
        font-size: 1.5rem;
        font-weight: 800;
        color: #eb001a;
    }
    @media (orientation: portrait) {
        padding-top: 9vw;
        &:: marker {
            font-size: 4.5vw;
        }
    }
`
const H2 = styled.h2`
    max-width: 45vw;
    margin: -1.8rem 0 0 2rem;
    font-size: 1.5rem;
    @media (orientation: portrait) {
        max-width: 100%;
        margin: -5.4vw 0 0 6vw;
        font-size: 4.5vw;
    }
`
const StyledLink=styled.span`
    > a {
        color: #eb001a;
        &:visited {
            color: #d40019;
        }
    }
    @media (orientation: portrait) {
        > a {
            font-size: 3.2vw;
        }
    }
`
const H3 = styled.h3`
    max-width: 45vw;
    padding: 1.5vw 0 .75vw;
    font-size: 1rem;
    line-height: 1.5rem;
    @media (orientation: portrait) {
        max-width: 100%;
        padding: 6vw 0 3vw;
        font-size: 3.5vw;
        line-height: 5vw;
    }
`
const Li = styled.li`
    position: relative;
    max-width: 75ch;
    padding-left: 1.5vw;
    font-size: 1rem;
    line-height: 1.5rem;
    list-style: none;
    &:before {
        content: '';
        position: absolute;
        top: .8vw;
        left: 0;
        width: .4vw;
        height: .4vw;
        background-color: #eb001a;
    }
    @media (orientation: portrait) {
        padding-left: 3vw;
        font-size: 3.5vw;
        line-height: 6vw;
        &:before {
            top: 2.5vw;
            width: 1vw;
            height: 1vw;
        }
    }
`
const A = styled.a`
    color: #eb001a;
    &:visited {
        color: #eb001a; 
    }
    @media (orientation: portrait) {
        font-size: 3.2vw;
    }
`
const Ul = styled.ul`
    padding-top: 1.5vw;
    @media (orientation: portrait) {
        padding-top: 3vw;
    }
`

const PrivacyPolicy = () => (
    <Layout headerColor='#1a1e23'>
        <Wrap>
            <H1>Polityka prywatności - magiainternetu.com</H1>
            <P fontWeight='700'> Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</P>
            <ol>
                <MainLi>
                    <H2>Informacje ogólne</H2>
                    <P>
                    Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <StyledLink><Link to={'/'}>magiainternetu.com</Link></StyledLink>. 
                    Operatorem serwisu oraz Administratorem danych osobowych jest: Marek Szczepański Kościuszki 25/1, 14-100 Ostróda.
                    Adres kontaktowy poczty elektronicznej operatora: biuro@magiainternetu.com.
                    Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.
                    </P>
                    <H3>Serwis wykorzystuje dane osobowe w następujących celach:</H3>
                    <ul>
                        <Li>Obsługa zapytań przez formularz</Li>
                        <Li>Realizacja zamówionych usług</Li>
                        <Li>Prezentacja oferty lub informacji</Li>
                    </ul>
                    <H3>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</H3>
                    <ul>
                        <Li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</Li>
                        <Li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</Li>
                    </ul>
                </MainLi>
                <MainLi>
                    <H2>Wybrane metody ochrony danych stosowane przez Operatora</H2>
                    <P>
                    Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). 
                    Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika 
                    i mogą być odczytane jedynie na docelowym serwerze. 
                    Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, 
                    wykorzystywanego przez Operatora do przetwarzania danych osobowych, 
                    co w szczególności oznacza regularne aktualizacje komponentów programistycznych.
                    </P>
                </MainLi>
                <MainLi>
                    <H2>Hosting</H2>
                    <P>
                    Serwis jest hostowany (technicznie utrzymywany) na serwerach 
                    operatora: <A href='https://www.mydevil.net/' rel='noreferrer noopener'>mydevil.net</A>.
                    </P>
                </MainLi>
                <MainLi>
                    <H2>Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</H2>
                    <P> W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, 
                        jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących 
                        na Administratorze. 
                    </P>
                    <H3>Dotyczy to takich grup odbiorców:</H3>
                    <ul>
                        <Li>Firma hostingowa na zasadzie powierzenia</Li>
                        <Li>Upoważnieni pracownicy i współpracownicy, 
                            którzy korzystają z danych w celu realizacji celu działania strony
                        </Li>
                    </ul>
                    <H3>Czas przetwarzania danych osobowych</H3>
                    <P>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, 
                        niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi 
                        przepisami (np. o prowadzeniu rachunkowości). 
                        W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</P>
                    <H3>Przysługuje Ci prawo żądania od Administratora:</H3>
                    <ul>
                        <Li>dostępu do danych osobowych Ciebie dotyczących,</Li>
                        <Li>ich sprostowania,</Li>
                        <Li>usunięcia,</Li>
                        <Li>ograniczenia przetwarzania,</Li>
                        <Li>oraz przenoszenia danych.</Li>
                    </ul>
                    <H3>Dodatkowe Informacje</H3>
                    <ul>
                        <Li>
                            Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego 
                            w pkt 4 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych 
                            interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu 
                            nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do 
                            przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, 
                            dochodzenia lub obrony roszczeń.
                        </Li>
                        <Li>
                            Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, 
                            ul. Stawki 2, 00-193 Warszawa.
                        </Li>
                        <Li>
                            Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.
                        </Li>
                        <Li>
                            W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, 
                            w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez 
                            Administratora marketingu bezpośredniego.
                        </Li>
                        <Li>
                            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. 
                            Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
                        </Li>
                    </ul>
                </MainLi>
                <MainLi>
                    <H2>Informacje w formularzach</H2>
                    <Ul>
                        <Li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</Li>
                        <Li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</Li>
                        <Li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych 
                            w formularzu z adresem e-mail użytkownika wypełniającego formularz. 
                            W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.
                        </Li>
                        <Li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, 
                            np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, 
                            rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, 
                            do czego on służy.
                        </Li>
                    </Ul>
                </MainLi>
                <MainLi>
                    <H2>Logi Administratora</H2>
                    <P>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. 
                        Dane te są wykorzystywane w celu administrowania serwisem.
                    </P>
                </MainLi>
                <MainLi>
                    <H2>Istotne techniki marketingowe</H2>
                    <Ul>
                        <Li>
                        Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). 
                        Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. 
                        Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. 
                        W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik 
                        może przeglądać i edytować informacje wynikające z plików cookies przy pomocy 
                        narzędzia: <A href='https://www.google.com/ads/preferences/' rel='noreferrer'>www.google.com/ads/preferences/</A>. 
                        </Li>
                        <Li>
                        Operator korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, 
                        że dana osoba w nim zarejestrowana korzysta z Serwisu. 
                        Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie 
                        żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w 
                        urządzeniu końcowym użytkownika.
                        </Li>
                    </Ul>
                </MainLi>
                <MainLi>
                    <H2>Informacja o plikach cookies</H2>
                    <Ul>
                        <Li>Serwis korzysta z plików cookies.</Li>
                        <Li>
                            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, 
                            które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze 
                            stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, 
                            czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                        </Li>
                        <Li>
                            Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz 
                            uzyskującym do nich dostęp jest operator Serwisu.
                        </Li>
                        <Li>
                            Pliki cookies wykorzystywane są celach utrzymania sesji użytkownika Serwisu (po zalogowaniu), 
                            dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła oraz z powodu 
                            realizacji celów określonych powyżej w części "Istotne techniki marketingowe".
                        </Li>
                        <Li>
                            W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: 
                            „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, 
                            które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony 
                            internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). 
                            „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony 
                            w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                        </Li>
                        <Li>
                            Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) 
                            zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. 
                            Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia 
                            usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe 
                            informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.
                        </Li>
                        <Li>
                            Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach 
                            internetowych Serwisu.
                        </Li>
                        <Li>
                            Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również 
                            przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: 
                            Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), 
                            Twitter (Twitter Inc. z siedzibą w USA).
                        </Li>
                    </Ul>
                </MainLi>
                <MainLi>
                    <H2>Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</H2>
                    <P>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. 
                        Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, 
                        bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach 
                        może uniemożliwić korzystanie ze stron www.
                    </P>
                    <H3>
                        W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, 
                        której używasz i postępuj zgodnie z instrukcjami:
                    </H3>
                    <ul>
	                    <Li><A href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history" rel="noreferrer">Edge</A></Li>
	                    <Li><A href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer" rel="noreferrer">Internet Explorer</A></Li>
	                    <Li><A href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647" rel="noreferrer">Chrome</A></Li>
	                    <Li><A href="http://support.apple.com/kb/PH5042" rel="noreferrer">Safari</A></Li>
	                    <Li><A href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek" rel="noreferrer">Firefox</A></Li>
	                    <Li><A href="http://help.opera.com/Windows/12.10/pl/cookies.html" rel="noreferrer">Opera</A></Li>
	                </ul>
                    <H3>Urządzenia Mobilne:</H3>
                    <ul>
	                    <Li><A href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647" rel="noreferrer">Android</A></Li>
	                    <Li><A href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL" rel="noreferrer">Safari (iOS)</A></Li>
	                    <Li><A href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings" rel="noreferrer">Windows Phone</A></Li>
	                </ul>
                </MainLi>
            </ol>
        </Wrap>
    </Layout>
)
  
export const Head = () => <Seo title="Polityka Prywatności - Magia" description="Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: magiainterneu.com." />
export default PrivacyPolicy
