import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;


  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
Jeremy Gieske
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Portfolio</span>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;