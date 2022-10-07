// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
}
// 3. extend the theme
const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Quicksand', sans-serif`,
      },
    textStyles: {
        arabia: {
            fontFamily: `"Noto Naskh Arabic", serif`,
            // you can also use responsive styles
            fontSize: ["22px", "28px"],
            fontWeight: "400",
            lineHeight: "175%",
            letterSpacing: "2%",
        },
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
})

export default theme
