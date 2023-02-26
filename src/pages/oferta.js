import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 3vw;
  background-color: #1a1e23;
`
const H1 = styled.h1`
  padding: 12vw 0;
  font-size: 6vw;
  text-align: center;
  color: #ff0420;
  @media (orientation: portrait) {
    font-size: 18vw;
  }
`
const ContainerParent = styled.div`
  display: flex;
  position: relative;
`
const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  @media (orientation: portrait) {
    width: 100%;
  }
`
const Box = styled.section`
  padding-bottom: 6vw;
  @media (orientation: portrait) {

  }
`
const H2 = styled.h2`
  padding-bottom: 1.5vw;
  font-size: 3vw;
  color: #ff0420;
  @media (orientation: portrait) {
    font-size: 9vw;
    text-align: center;
  }
`
const P = styled.p`
  font-size: 1.5vw;
  line-height: 2.5vw;
  color: #fff;
  @media (orientation: portrait) {
    font-size: 4.5vw;
    line-height: 7.5vw;
  }
`
const H3 = styled.h3`
  padding: 3vw 0 .75vw;
  font-size: 1.8vw;
  line-height: 3vw;
  color: #ff0420;
  @media (orientation: portrait) {
    padding: 9vw 0 6vw;
    font-size: 6vw;
    line-height: 7.5vw;
    text-align: center;
  }
`
const Li = styled.li`
  padding-bottom: .75vw;
  font-size: 1.5vw;
  line-height: 2.5vw;
  color: #fff;
  @media (orientation: portrait) {
    padding-bottom: 3vw;
    font-size: 4.5vw;
    line-height: 7.5vw;
  }
`
const Aside = styled.section`
  position: sticky;
  top: 0;
  width: 20vw;
  height: 100vh;
  transform: translateX(3vw);
  background-color: #ff0420;
  @media (orientation: portrait) {
    position: fixed;
    top: 82vh;
    left: -3vw;
    width: 100vw;
    height: 18vh;
  }
`

const boxes = [
  {
    heading: 'Witryny Dla Firm',
    text: <div>
    <P>Witryna dla firmy ma za zadanie przedstawić firmę, jej produkty lub usługi oraz ułatwić kontakt z klientami i kontrahentami. 
    Może ona spełniać różne funkcje, w zależności od potrzeb i celów biznesowych.</P>
    <article>
      <H3>Elementy składowe witryny dla firmy:</H3>
      <ol>
        <Li><strong>Opis</strong> - krótki opis firmy, zawierający informacje o historii, misji, wizji, wartościach, 
        obszarach działalności i innych aspektach funkcjonowania przedsiębiorstwa.</Li>
        <Li><strong>Produkty lub usługi</strong> - prezentacja oferty firmy, wraz z opisem produktów lub usług, ich specyfikacją i cennikiem.</Li>
        <Li><strong>Kontakt</strong> - łatwy do znalezienia formularz kontaktowy, adres e-mail, numer telefonu, adres siedziby i innych danych kontaktowych.</Li>
        <Li><strong>Referencje</strong> - pozytywne opinie klientów lub partnerów biznesowych potwierdzające 
        wysoką jakość usług lub produktów oferowanych przez firmę.</Li>
        <Li><strong>Galeria zdjęć</strong> - prezentacja zdjęć produktów, realizacji, zespołu firmy oraz jej siedziby.</Li>
        <Li><strong>Blog</strong> - miejsce, w którym firma może publikować treści związane z branżą, dzielić się wiedzą i doświadczeniem, 
        a także przyciągać ruch na witrynę.</Li>
        <Li><strong>Sekcja "O Nas"</strong> - prezentacja zespołu firmy, wraz z krótkimi opisami pracowników, ich doświadczeniem i specjalizacją.</Li>
        <Li><strong>Nagłówek i stopka</strong> - czytelny i spójny nagłówek i stopka, zawierające logo, menu nawigacyjne, 
        adres siedziby firmy oraz linki do mediów społecznościowych.</Li>
      </ol>
    </article>
    <P>Witryna dla firmy powinna być zaprojektowana w sposób profesjonalny, estetyczny i łatwy do przeglądania.
    Powinna być dostosowana do urządzeń mobilnych, tak aby potencjalni klienci mogli łatwo przeglądać ofertę firmy na swoich smartfonach i tabletach.</P>
    </div>
  },
  {
    heading: 'Witryny Portfolio',
    text: <P> Na witrynach typu portfolio artyści, projektanci, fotografowie i inne osoby z branży kreatywnej prezentują swoje projekty. 
    Zwykle jest to zbiór prac, wraz z opisami. 
    Witryny portfolio służą do prezentowania pracy zawodowej, umiejętności i doświadczenia w celu zachęcenia potencjalnych klientów lub pracodawców do współpracy. 
    W tego typu miejscach umieszczane są często projekty graficzne, fotografie, ilustracje, animacje, projekty produktów i wiele innych. 
    W zależności od branży i specjalizacji, witryny portfolio mogą mieć różną formę i zawierać różne funkcjonalności. 
    Zazwyczaj skupiają się one na prezentacji pracy w sposób atrakcyjny i łatwy do przeglądania.
    Są one szczególnie ważne dla freelancerów i osób szukających pracy w branżach kreatywnych, ponieważ stanowią swojego rodzaju wizytówkę.</P>
  },
  {
    heading: 'Landing Page',
    text: <P><i>Landing page</i> to witryna, na którą użytkownik trafia po kliknięciu w link lub reklamę. 
    Celem <i>landing page</i> jest przekonanie odwiedzającego do podjęcia określonej akcji. 
    Może to być dokonanie zakupu, wypełnienie formularza kontaktowego, pobranie pliku lub zapisanie się do <i>newslettera</i>. 
    <i>Landing page</i> jest projektowana w taki sposób, aby jak najlepiej przekonywać odwiedzających do wykonania pożądanej akcji. 
    Zwykle zawiera ona elementy takie jak nagłówek, opis oferty, zdjęcia lub wideo, formularz kontaktowy oraz przycisk CTA (<i>Call-to-Action</i>). 
    Często znajdują się na niej również certyfikaty i opinie klientów. 
    <i>Landing page</i> może być używana w ramach kampanii reklamowej lub jako część serwisu mającej na celu przyciągnąć klientów i zwiększyć konwersję.</P>
  },
  {
    heading: 'Blog',
    text: <P>Blog to rodzaj witryny, na której publikowane są regularnie wpisy w formie artykułów lub notatek. 
    Zazwyczaj wpisy te są pisane przez jedną osobę lub grupę osób dzielących się swoimi myślami, doświadczeniami lub wiedzą na temat konkretnych zagadnień. 
    Blogi często zawierają wpisy dotyczące różnych dziedzin, takich jak <strong>moda</strong>, <strong>kulinaria</strong>, <strong>podróże</strong>, 
    <strong> zdrowie</strong>, <strong>technologia</strong>, <strong>biznes</strong>, czy <strong>psychologia</strong>. 
    Blogi mogą mieć różną formę i styl pisania, w zależności od tematu i stylu autora. 
    Często na blogach można znaleźć zdjęcia lub filmy wzbogacające treść wpisów i pomagające czytelnikom lepiej zrozumieć temat. 
    Blogi zyskały dużą popularność dzięki swojej interaktywności - 
    czytelnicy mają możliwość komentowania, zadawania pytań i dyskusji. 
    Pozwala to na nawiązanie dialogu między autorem a czytelnikami, a także na budowanie społeczności wokół bloga. 
    Blogi mogą być prowadzone przez osoby prywatne, jak i przez firmy. 
    Te drugie często wykorzystują blogowanie do budowania marki, pozyskiwania klientów lub informowania o nowościach i promocjach.</P>
  },
  {
    heading: 'Sklepy Online',
    text: <P>Sklep online to witryna www, na której klienci mogą <strong>przeglądać i kupować produkty oraz usługi</strong>. 
    Pozwala to wybierać te przedmioty i usługi, które im odpowiadają, dodawać je do koszyka i dokonywać zakupów przez Internet. 
    W sklepie online można kupić niemal wszystko - od ubrań, przez elektronikę, aż po żywność i artykuły gospodarstwa domowego. 
    Serwisy tego typu często oferują też różnego rodzaju promocje i rabaty, co pozwala na zakupy w niższych cenach. 
    Wiele wirtualnych sklepów oferuje szybką i bezpieczną dostawę zamówionych produktów bezpośrednio do domu klienta.</P>
  },
  {
    heading: 'Systemy CMS',
    text: <div>
    <P>Systemy CMS (Content Management System) to oprogramowanie umożliwiające łatwe tworzenie, edycję, publikowanie i zarządzanie treścią na witrynie.
    Dzięki systemom CMS, osoby bez doświadczenia w programowaniu mogą tworzyć i edytować treści na witrynie www za pomocą interfejsu graficznego.
    Nie wymaga to znajomości kodu HTML, CSS, PHP czy <i>JavaScript</i>.</P>
    <article>
      <H3>Funkcje systemów CMS:</H3>
      <ul>
        <Li><strong>Zarządzanie treścią</strong> - możliwość dodawania, usuwania i edycji treści na witrynie.</Li>
        <Li><strong>Zarządzanie użytkownikami</strong> - możliwość zarządzania kontami użytkowników, przyznawania im uprawnień i definiowania ich ról.</Li>
        <Li><strong>Zarządzanie wersjami</strong> - możliwość przechowywania wersji treści i przywracania starszych wersji w razie potrzeby.</Li>
        <Li><strong>Zarządzanie komentarzami</strong> - możliwość moderowania i publikowania komentarzy użytkowników.</Li>
        <Li><strong>Integracja z narzędziami analitycznymi</strong> - możliwość monitorowania ruchu na witrynie i analizowania danych analitycznych.</Li>
      </ul>
    </article>
    <P>Najpopularniejsze systemy CMS to <strong><i>WordPress</i></strong>, <strong><i>Joomla!</i></strong> i <strong><i>Drupal</i></strong>. 
    Istnieje jednak wiele innych systemów CMS dostępnych na rynku. 
    Systemy CMS są bardzo popularne ze względu na ich łatwość obsługi, elastyczność i dostępność wielu dodatkowych modułów i wtyczek. 
    Pozwalają one na rozszerzanie funkcjonalności witryny www.</P>
    </div>
  },
  {
    heading: 'Responsive Web Design (RWD)',
    text: <div>
    <P>
    Responsive web design (RWD) to podejście projektowe polegające na tworzeniu witryn www w sposób responsywny. 
    Polega to na automatycznym dostosowywaniu się rozmiarów witryn do ekranów na których są wyświetlane. 
    Celem RWD jest umożliwienie użytkownikom korzystanie z serwisów online bez problemów na różnych urządzeniach. 
    Mowa tu o takich sprzętach jak komputery, tablety czy smartfony. 
    Przeglądanie sieci bez konieczności przewijania okna w poziomie lub zmieniania rozmiaru okna przeglądarki sprzyja pozytynym doświadczeniom użytkownika.
    </P>
    <article>
      <H3>Technologie RWD</H3>
      <P>
      Responsive web design opiera się na technologiach takich jak <b>HTML</b>, <b>CSS</b> i <b><i>JavaScript</i></b>. 
      Użycie tych właśnie technologii pozwala programiście na skalowanie i przesuwanie takich elementów jak menu nawigacyjne, obrazów czy tekstów. 
      Dzięki temu wszystkie części składowe witryny mieszczą się ekranie, a ich wielkość jest odpowiednia.
      </P>
    </article>
    <article>
    <H3>Responsive web design ma wiele zalet, w tym:</H3>
      <ul>
        <Li>Łatwe korzystanie z serwisu online przez użytkowników na różnych platformach.</Li>
        <Li>Zwiększenie czasu spędzonego na witrynie przez użytkownika.</Li>
        <Li>Optymalizacja pod kątem SEO, ponieważ responsywny design jest jednym z czynników wpływających na pozycjonowanie w wynikach wyszukiwania.</Li>
        <Li>Stworzenie jednej wersji witryny działającej na wszystkich urządzeniach.</Li>
      </ul>
    </article>
    </div>
  },
  {
    heading: 'Aplikacje WWW',
    text: <P>
    Aplikacje www, nazywane także aplikacjami webowymi, to programy komputerowe działające w przeglądarce, np. <i>Google Chrome</i> czy <i>Mozilla Firefox</i>.
    Umożliwiają one użytkownikom korzystanie z różnych funkcjonalności bez konieczności instalowania ich na swoim urządzeniu. 
    Aplikacje webowe mogą działać na różnych urządzeniach, takich jak komputery, smartfony i tablety.
    Przykładami takich programów są platformy e-commerce, portale społecznościowe, platformy do zarządzania projektami, systemy bankowości elektronicznej, 
    gry online czy aplikacje do nauki języków.
    </P>
  },
  {
    heading: 'Portale Informacyjne',
    text: <div>
    <P>
    Na witrynach informacyjnych publikowane są najnowsze wiadomości, artykuły, komentarze i analizy z różnych dziedzin. 
    Często jest to polityka, gospodarka, sport, rozrywka, nauka oraz zdrowie. 
    Witryny informacyjne służą do dostarczania użytkownikom bieżących informacji na temat wydarzeń i zjawisk mających miejsce w kraju i na świecie.</P>
    <article>
      <H3>Treści spotykane na portalach informacyjnych:</H3>
      <ul>
        <Li><strong>Aktualności</strong> - najnowsze wiadomości i wydarzenia z kraju i ze świata, zwykle podzielone na kategorie tematyczne.</Li>
        <Li><strong>Analizy</strong> - artykuły, komentarze i analizy ekspertów na temat ważnych 
        wydarzeń i zjawisk pomagające zrozumieć kontekst i znaczenie tych wydarzeń.</Li>
        <Li><strong>Opinie</strong> - artykuły i komentarze autorów na temat różnych kwestii służące do wyrażania poglądów i zachęcania do dyskusji.</Li>
        <Li><strong>Rozrywka</strong> - artykuły i newsy dotyczące najnowszych trendów w dziedzinie rozrywki, takie jak filmy, muzyka, gry, książki i wiele innych.</Li>
        <Li><strong>Technologia</strong> - artykuły i recenzje dotyczące nowych technologii i gadżetów, a także informacje o nowych oprogramowaniach i aplikacjach.</Li>
        <Li><strong>Sport</strong> - wiadomości, relacje i wyniki z najważniejszych wydarzeń sportowych, 
        jak również artykuły i komentarze na temat sytuacji w klubach i reprezentacjach.</Li>
      </ul>
    </article>
    <P>Witryny informacyjne cieszą się dużą popularnością, ponieważ pozwalają użytkownikom na bieżąco śledzić wydarzenia i interesujące ich tematy. 
    Umożliwiają one zdobywanie wiedzy na różne tematy. 
    Wiele tego typu serwisów umożliwia subskrypcję newslettera lub powiadomień push. 
    Dzięki temu użytkownicy mogą otrzymywać najnowsze wiadomości bezpośrednio na swoje urządzenia.</P>
    </div>
  },
  {
    heading: 'Pozycjonowanie witryn poprzez SEO',
    text: <div>
    <P>SEO (Search Engine Optimization) to proces optymalizacji witryny www pod kątem wyszukiwarek. 
    Celem SEO jest poprawa widoczności serwisu w wynikach wyszukiwania organicznego (niepłatnym) w wyszukiwarkach, takich jak 
    <strong> <i>Google</i> , </strong><strong><i>Bing</i></strong> czy<strong><i>Yahoo</i></strong>.</P>
    <article>
      <H3>SEO składa się z wielu czynników, takich jak:</H3>
      <ul>
        <Li><strong>Optymalizacja słów kluczowych</strong> - wybór odpowiednich słów kluczowych i ich umieszczenie na witrynie w sposób naturalny.</Li>
        <Li><strong>Struktura witryny</strong> - odpowiednie zorganizowanie treści, w tym używanie nagłówków, treści zastępczej dla obrazów, krótkich URL-ów itp.</Li>
        <Li><strong>Budowa linków</strong> - zdobycie linków zwrotnych (backlinków) do witryny www, co pomaga zwiększyć jej autorytet w oczach wyszukiwarek.</Li>
        <Li><strong>Jakość treści</strong> - umieszczenie na witrynie wartościowych i oryginalnych treści przyciągających użytkowników, które są często udostępniane w sieci.</Li>
      </ul>
    </article>
    <P>
    Poprawa wyników pozycjonowania witryny za pomocą SEO może pomóc firmom i innym organizacjom w zdobyciu większej ilości odwiedzających. 
    Przekłada się to na zwiększenie sprzedaży i wzrost zainteresowania ofertą.
    </P>
    </div>
  },
  {
    heading: 'Profil Firmy w Google',
    text: <P>
    Profil Firmy w <i>Google</i> (ang. <i>Google My Business</i>) 
    to narzędzie umożliwiające firmom i właścicielom witryn zarządzanie swoim widokiem w wynikach wyszukiwania <i>Google</i> oraz na mapach <i>Google</i>. 
    Korzystając z takiego profilu, użytkownicy mogą wyświetlić w <i>Google</i> informacje o swojej firmie. 
    Zaliczają się do nich adres, godziny otwarcia, numer telefonu, zdjęcia, opinie klientów, a także linki do witryny www. 
    Dzięki temu potencjalni klienci mogą łatwo i szybko znaleźć informacje o firmie i skontaktować się z nią. 
    Profil Firmy w <i>Google</i> jest szczególnie przydatny dla lokalnych firm i przedsiębiorstw chcących pozyskać klientów z okolicy. 
    Dzięki niemu można również zarządzać opiniami klientów czy dodawać posty i zdjęcia. 
    Interesującą opcją jest rónież przeglądanie statystyk dotyczących wyświetleń profilu i aktywności użytkowników.
    </P>
  },
  {
    heading: 'Hosting',
    text: <P>
    Hosting to usługa udostępniania miejsca na serwerze umożliwiająca przechowywanie plików związanych z witryną www oraz udostępnianie tych plików przez Internet. 
    W przypadku hostingu, serwer to komputer podłączony do sieci, który jest zawsze włączony. 
    Umożliwia to dostęp do przechowywanych na nim plików przez użytkowników sieci. 
    Dostawcy usług hostingowych udostępniają miejsce na serwerze. 
    Pozwala to na publikowanie witryn www, uruchamianie aplikacji oraz przechowywanie plików i baz danych. 
    Istnieją różne rodzaje hostingów, takie jak hosting współdzielony, wirtualny, dedykowany czy chmurowy. 
    Wybór odpowiedniego rodzaju hostingu zależy od potrzeb użytkownika, rodzaju witryny, jej wielkości oraz ilości ruchu, jaki przewiduje się na witrynie.
    </P>
  },
  {
    heading: 'Domena',
    text: <div>
    <P>
    Domena internetowa to unikalny i łatwy do zapamiętania adres witryny www pozwalający użytkownikom na odnalezienie serwisu w sieci.
    </P>
    <article>
      <H3>Z czego składa się domena?</H3>
      <P>
      Domena składa się z dwóch głównych części: nazwy domeny oraz rozszerzenia domeny (tzw. TLD - <i>Top Level Domain</i>). 
      Nazwa domeny to unikalny identyfikator wybrany przez właściciela witryny, np. <i>Google</i>, <i>Wikipedia</i>, itp. 
      Rozszerzenie domeny to końcówka adresu, np. ".com", ".org", ".pl", ".edu", ".gov", itp. 
      Rozszerzenie określa typ witryny, jej funkcję, a także region lub kraj, w którym witryna www działa.
      </P>
    </article>
    <article>
      <H3>Jak zarejestrować domenę?</H3>
      <P>
      Domeny www są rejestrowane w systemie nazw domen. 
      Zarządza on przypisywaniem domen do odpowiednich adresów IP (<i>Internet Protocol</i>). 
      Aby wykupić domenę, należy skontaktować się z rejestratorem domen odpowiedzialnym za nadanie domenie unikalnego identyfikatora. 
      Dzięki temu możliwa jest rejestracja jej w systemie nazw domen.
      </P>
    </article>
    <article>
      <H3>Dlaczego domena jest ważna?</H3>
      <P>
      Domena jest bardzo ważnym elementem witryny www. 
      Ułatwia ona identyfikację i łatwiejsze odnalezienie serwisu przez użytkowników. 
      Dobrej jakości i odpowiednio dobrana domena może również wpłynąć na pozycjonowanie witryny w wyszukiwarkach oraz jej reputację w sieci.
      </P>
    </article>
    </div>
  },
  {
    heading: 'Audyt witryn www',
    text: <div>
    <P>Audyt witryny to szczegółowa jej szczegółowa analiza pod kątem różnych czynników. 
    Celem audytu witryny jest zidentyfikowanie wszelkich problemów rzutujących na witrynę. 
    Ważnym elementem audytu jest zaproponowanie rozwiązań, które pomogą poprawić jej działanie i jakość.</P>
    <article>
      <H3>Czynniki obejmowane przez audyt witryny</H3>
      <ol>
        <Li><strong>Jakość treści</strong> - ocena jakości i oryginalności treści, sprawdzenie pisowni i gramatyki, a także zgodności z wymaganiami SEO.</Li>
        <Li><strong>Optymalizacja SEO</strong> - analiza i ocena wykorzystania słów kluczowych, opisów meta, 
        struktury URL-ów, nagłówków, a także analiza linków wychodzących i przychodzących.</Li>
        <Li><strong>Wydajność techniczna</strong> - ocena wydajności i szybkości ładowania witryny, sprawdzenie zgodności z wymaganiami technicznymi, 
        takich technologii jak HTML, CSS, PHP czy <i>JavaScript</i></Li>
        <Li><strong>Bezpieczeństwo</strong> - ocena zabezpieczeń witryny, w tym zabezpieczeń przed atakami z zewnątrz, a także ocena systemów antywirusowych i antyspamowych.</Li>
        <Li><strong>Ergonomia i użyteczność (UX)</strong> - 
        analiza łatwości nawigacji, dostępności, wykorzystania kolorów, czytelności czcionek, a także ogólnej ergonomii i użyteczności.</Li>
      </ol>
    </article>
    <P>Audyt to ważny proces pomagający właścicielom witryn w poprawie jakości, wydajności i jej widoczności w sieci.</P>
    </div>
  },
  {
    heading: 'Formularz kontaktowy',
    text: <div>
    <P>
    Formularz kontaktowy to narzędzie umożliwiające użytkownikom przesłanie wiadomości lub zapytania do właściciela witryny lub jej administratora. 
    Formularz kontaktowy składa się z kilku pól, do których użytkownik wprowadza swoje dane kontaktowe i treść wiadomości.
    </P>
    <article>
      <H3>Dlaczego formularz kontaktowy jest ważny?</H3>
      <P>Formularz kontaktowy jest jednym z najważniejszych elementów witryny www. 
      Dzięki niemu użytkownicy mogą zgłaszać swoje uwagi, prośby o informacje, zapytania o produkty lub usługi. 
      </P>
    </article>
    <article>
      <H3>Co można umieścić w formularzu kontaktowym?</H3>
      <P>
      W formularzu kontaktowym można umieścić wiele różnych pól. 
      Najczęściej są to imię i nazwisko, adres e-mail, temat wiadomości, treść wiadomości. 
      Mogą się w nim znaleźć również dodatkowe informacje, takie jak numer telefonu, adres zamieszkania lub nazwa firmy.
      </P>
    </article>
    <article>
      <H3>Do czego służą formularze kontaktowe?</H3>
      <P>
      Formularze kontaktowe są często wykorzystywane na witrynach firm, sklepów online czy blogów. 
      Mogą być stosowane do różnych celów. 
      Wlicza się w to pozyskiwanie potencjalnych klientów i umożliwienie klientom składania zamówień lub zapytań o produkty. 
      Przydatne są również do pozyskiwania opinii i uwag od użytkowników.
      </P>
    </article>
    </div>
  }
]

const Offer = () => {
  return (
    <Layout>
      <Wrap>
        <H1>Oferta</H1>
        <ContainerParent>
          <Container>
            {boxes.map((box, i) => {
              return <Box key={i}>
                <H2>{box.heading}</H2>
                {box.text}
              </Box>
            })}
          </Container>
          <Aside></Aside>
        </ContainerParent>
      </Wrap>
    </Layout>
  )
}

export const Head = () => <Seo title="Oferta | Magia" description="Zapoznaj się z naszą oferta. Witryny dla firm, blogi, landing page, systemy CMS, pozycjonowanie SEO, audyt, hosting, domena."/>
export default Offer
