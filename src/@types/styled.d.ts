import "styled-components";

import { themeDefault } from "../styles/themes/themeDefault";

type themeType = typeof themeDefault;

declare module "styled-components" {
  export interface themeDefault extends themeType { }
}