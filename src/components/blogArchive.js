import React from "react"
import { useBlogArchive } from "../hooks/use-blog-archive"
import { Link } from "gatsby"

const BlogArchiveList = () => {
  const data = useBlogArchive()
  return (
    <ul>
      {data.map(edge => {
        const { slug, title } = edge.node.frontmatter

        return (
          <li key={slug}>
            <Link to={`/posts${slug}`}>{title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

const BlogArchive = () => {
  return (
    <>
      <aside>
        <h3>Blog Archive</h3>
        <BlogArchiveList />
      </aside>
    </>
  )
}

export default BlogArchive
