import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'


const Website = ({ Component, PageProps, router }) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Component {...PageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    )
}

export default Website