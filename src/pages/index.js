import * as React from "react"
import { Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, userStaticQuery } from 'gatsby';
const query = graphql`
  {
    allContentfulInfo {
      nodes {
        id
        text
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query);
  let nodes = data.allContentfulInfo.nodes;
  console.log(nodes)
  return (
  <Layout>
    <Seo title="Home" />
    {nodes.map(x => {
      return (
        <h1>{x.text}</h1>
      )
    })}
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout>
  )
}

export default IndexPage
