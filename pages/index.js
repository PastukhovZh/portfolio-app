import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} align='center'>
                Hello, I&apos;m a full-stack developer based in Ukraine
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Pastukhov Yevhen
                    </Heading>
                    <p>Swim coach turned Full-stack developer</p>
                </Box>
            </Box>
        </Container>
    )
}
export default Page