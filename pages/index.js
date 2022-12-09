import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Sections from "../components/section"

const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align='center'>
                Hello, I&apos;m a full-stack developer based in Ukraine
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title' >
                        Pastukhov Yevhen
                    </Heading>
                    <p>Swim coach turned Full-stack developer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display='inline-block' borderRadius="full" src="/images/DSC_0974.jpg" alt='Profile Image'/>
                </Box>
            </Box>
            <Sections delay={0.1}>
                <Heading as="h3" variant='section-title'>
                    Work
                </Heading>
                <Paragraph>Тут нужно написать про себя и чем я занимаюсь в айтишке</Paragraph>
            </Sections>
        </Container>
    )
}
export default Page