import { useStaticQuery, graphql } from "gatsby"

export const useBlogArchive = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogArchive {
        allMarkdownRemark(
          limit: 5
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}
