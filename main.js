import "./src/fonts/title.css";
import "./src/fonts/text.css";
import "./src/reset.css";
import "./src/all.css";

import { ButtonSection } from "./components/ButtonSection.js";
import { InputSection } from "./components/InputSection.js";
import { MediaSection } from "./components/MediaSection.js";
import { TextSection } from "./components/TextSection.js";

document.querySelector(".scroll").innerHTML = /* html */ `
  ${ButtonSection()}
  ${InputSection()}
  ${MediaSection()}
  ${TextSection()}
`;
