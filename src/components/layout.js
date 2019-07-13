import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"

import Header from "./header"
import BlogArchive from "./blogArchive"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const StyledLayout = styled.div`
  width: 100vw;
`

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header siteTitle={title} />
      {children}
      <BlogArchive />
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
