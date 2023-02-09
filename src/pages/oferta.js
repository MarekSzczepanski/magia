import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Oferta = () => (
  <Layout>
    <h1>Oferta</h1>
    <Link to="/">strona główna</Link>
  </Layout>
)

export const Head = () => <Seo title="Oferta" />

export default Oferta
