import { extendTheme } from "@chakra-ui/react"
import colors from "./appearance/colors"
import space from "./appearance/space"
import fonts from "./components/fonts"
import lineHeight from "./appearance/lineHeight"
import sizing from "./appearance/sizing"
import zIndex from "./appearance/zIndex"

const theme = extendTheme({
    colors,
    space,
    fonts,
    lineHeight,
    sizing,
    zIndex,
})

export default theme