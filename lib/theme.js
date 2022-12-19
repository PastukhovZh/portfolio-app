import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#deccce', '#60606b')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                 textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4

            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#c5b0b0', '#ff63c3')(props),
            textUnderlineOffset:3
        })
    }
}

const fonts = {
    heading:'DynaPuff'
}
const colors = {
    glassTeal:'#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode:true
}

const theme = extendTheme({
    config, styles, fonts, components, colors
})

export default theme