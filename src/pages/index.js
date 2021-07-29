import * as React from "react"
import { Link, useStaticQuery, StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Seo from "../components/seo";
import SectionOneText from "../components/sectionOneText";
import Image from "../components/image";
import BlogQuery from "./blogQuery";

export const query = graphql`
  {
    contentfulSectionOne(children: {}) {
      image {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`


class IndexPage extends React.Component {
  render() {
    return (
    <Layout>
      <Seo title="Home" />
      <SectionOneText />
      <StaticQuery
        query={query}
        render={data => <Image data={data}  />}
      />
      <BlogQuery />
    </Layout>
    )
  }
}
    // {/* <p>
    //   <Link to="/page-2/">Go to page 2</Link> <br />
    //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    // </p> */}

export default IndexPage
