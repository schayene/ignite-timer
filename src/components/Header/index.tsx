import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

// import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      Ignite
      {/* <img src={igniteLogo} /> */}
      <nav>
        <NavLink to="/ignite-timer/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/ignite-timer/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
