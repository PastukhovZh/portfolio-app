import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"

const Page = () => {
    return ( 
        <Layout>
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
            <Section delay={0.1}>
                <Heading as="h3" variant='section-title'>
                    Work
                </Heading>
                <Paragraph>Тут нужно написать про себя и чем я занимаюсь в айтишке</Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal' >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Kyiv, Ukraine
                </BioSection>
                <BioSection>
                    <BioYear>Год </BioYear>
                    Что именно происходило в этот год
                </BioSection>
            </Section>
        </Container>
    </Layout>
            )
}
export default Page