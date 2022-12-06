import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
 

const App = ({ Component, pageProps, router }) => {
    // return (<h1>HI</h1>)
    return (
        < ChakraProvider >
            <Layout router={router} >
                <Component {...pageProps} key={router.route}/>
            </Layout> 
        </ChakraProvider >
    )
}

export default App