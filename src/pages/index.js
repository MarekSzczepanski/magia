import * as React from 'react';
//import { Link } from "gatsby"

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import AboutInternet from '../components/AboutInternet';
import WhyProfessional from '../components/WhyProfessional';

const heroBarHeadings = [
  'stworzymy dla Ciebie witrynę i zajmiemy się jej pozycjonowaniem',
  'darmowa konsultacja i wycena',
  'chętnie odpowiemy na pytania',
  'zapraszamy do zapoznania się z naszą ofertą'
];

const IndexPage = () => (
  <Layout>
    <Hero
      h1={'kompleksowe usługi www'}
      heroBarHeadings={heroBarHeadings}
      heroBarTransform={'-240%'}
      heroBarTransformMobile={'-660%'}></Hero>
    <WhatWeDo></WhatWeDo>
    <AboutInternet></AboutInternet>
    {/* Realizacje */}
    <WhyProfessional></WhyProfessional>
    {/* Blog */}
    {/* Zaufali nam */}
  </Layout>
);

export const Head = () => (
  <Seo
    title="Kompleksowe usługi WWW | Magia"
    description="Tworzymy witryny i je pozycjonujemy. Skorzystaj z bezpłatnej wyceny i darmowej porady. Chętnie odpowiemy na Twoje pytania."
  />
);

export default IndexPage;
