import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledSection = styled.section`
  outline: 1px solid black;
  padding: 1em;
  display: flex;
`

const StyledTitle = styled.h1`
  display: flex;
  margin-bottom: 0.1em;
`

const StyledTagline = styled.p`
  margin-top: 0;
`

const StyledTitleSection = styled.section`
  display: block;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledSection>
      <StyledTitleSection>
        <StyledTitle>Space Monkey Meds</StyledTitle>
        <StyledTagline>Out of this world quality</StyledTagline>
      </StyledTitleSection>
    </StyledSection>
  </Layout>
)

export default IndexPage
