import * as React from "react"
import { Link, useStaticQuery, StaticQuery, graphql } from "gatsby"
import SectionTwoText from "../components/sectionTwoText";

export const query2 = graphql`
  {
    allContentfulBlog {
      nodes {
        id
        title
        content {
          content
        }
        image {
          file {
            contentType
            fileName
            url
          }
        }
      }
    }
  }
`

class BlogQuery extends React.Component {
    render() {
        return (
            <div>
                <StaticQuery
                    query={query2}
                    render={data => <SectionTwoText data={data}  />}
                />
            </div>
        )
    }
}

export default BlogQuery;