import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavMenuBar, NavDiv, NavTitle} from "./styledComponent";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <>
      <NavDiv>
        <NavTitle>네캔만원</NavTitle>
        <NavMenuBar>
          <FontAwesomeIcon icon={faBars} />
        </NavMenuBar>
      </NavDiv>
    </>
  );
};

export default Nav;
