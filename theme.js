import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
},)

const config={
  fonts: {
    heading: "Open Sans",
    body: "Raleway"
  },
}

const theme = extendTheme(config,breakpoints)
export default theme