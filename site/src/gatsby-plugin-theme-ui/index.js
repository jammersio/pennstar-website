import { merge } from 'lodash'
import { theme } from "gatsby-theme-styleguide/src/theme"

export default merge({}, theme, {
  colors: {
    primary: 'blue'
  }
});
