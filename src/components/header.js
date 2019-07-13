import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import styled from "@emotion/styled"
import BurgerMenu from "./burgerMenu"

const StyledHeader = styled.header`
  background: #fff;
  display: flex;
  padding: 0.8em;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <img
        src={logo}
        alt="Space Monkey Logo"
        style={{
          width: "60px",
        }}
      />
    </Link>
    <BurgerMenu />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
