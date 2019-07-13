import React from "react"

import styled from "@emotion/styled"

const StyledBurgerMenu = styled.button`
  right: 1em;
  position: absolute;
  cursor: pointer;
`

const BurgerMenuLine = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`

export default () => (
  <StyledBurgerMenu>
    <BurgerMenuLine key="0"></BurgerMenuLine>
    <BurgerMenuLine key="1"></BurgerMenuLine>
    <BurgerMenuLine key="2"></BurgerMenuLine>
  </StyledBurgerMenu>
)
