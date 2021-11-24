import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"
import space from "./space"
import fonts from "./fonts"
import lineHeight from "./lineHeight"
import sizing from "./sizing"
import zIndex from "./zIndex"

const theme = extendTheme({
    colors,
    space,
    fonts,
    lineHeight,
    sizing,
    zIndex,
})

export default theme