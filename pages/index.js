import { ChevronRightIcon } from "@chakra-ui/icons"
import NextLink from 'next/link'
import {Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
    useColorModeValue,
    Image,
} from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Fonts from "../components/fonts";
import Section from "../components/section"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {  IoLogoGithub,IoLogoLinkedin} from 'react-icons/io5'

const Page = () => {
    return ( 
        <Layout>
            <Fonts/>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align='center'>
                Hello, I&apos;m a full-stack developer based in Ukraine
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title' >
                        Pastukhov Yevhen
                    </Heading>
                        <Paragraph>Full-stack developer</Paragraph>
                        <Paragraph>(React |  Redux |  JavaScript |  NextJS |  NodeJS)</Paragraph>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display='inline-block' borderRadius="full" src="/images/DSC_0974.jpg" alt='Profile Image'/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant='section-title'>
                    Work
                </Heading>
                    <Paragraph>After the "Java script" gates have been opened, I can no longer just walk past the computer and not "write code". These gates have recently opened, but I feel like a spark flashed between us, and it turned into a storm. Now it's forever, Java script in my heart. For myself, I discovered a lot of new things, which you will learn on this site. You can also see examples of my work by clicking on the button <NextLink href='/works' ><Link color='red.300'>My portfolio</Link></NextLink>.</Paragraph>
                        <Paragraph>Have a nice trip! :)</Paragraph>
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
                About me 
                </Heading>
                <BioSection>
                        <BioYear>Info</BioYear>
                        I was born in Kyiv, Ukraine. I'm 25.
                        I like creating interactive websites. I'm only a junior, and I already understand how limitless this programming language is. The eternal problem of juniors is commercial experience. What a pity that I only know what commercial experience is from Wikipedia. I love what I do and my heart beats faster when I open Vcode and run my app in a browser.
                    </BioSection>
                    <BioSection>
                    <BioYear>Hobby</BioYear>
                    I like to spend time in motion, swimming in the pool or on open water, walking down the street. I especially like to do this after the successful delivery of my application, or the completion of my projects on time. 
                    </BioSection>
                    <BioSection>
                    <BioYear>Tech skills:</BioYear>
                        <Paragraph>- HTML5/CSS3/SASS</Paragraph>
                        <Paragraph>- Responsive/Adaptive design</Paragraph>
                        <Paragraph>- Next.js</Paragraph>
                        <Paragraph>- GIT</Paragraph>
                        <Paragraph>- JavaScript</Paragraph>
                        <Paragraph>- React</Paragraph>
                        <Paragraph>- Redux</Paragraph>
                        <Paragraph>- REST API</Paragraph>
                        <Paragraph>- Handlebars</Paragraph>
                        <Paragraph>- Webpack</Paragraph>
                        <Paragraph>- Parcel</Paragraph>
                        <Paragraph>- Node.js </Paragraph>
                        <Paragraph>- MongoDB/Mongoose</Paragraph>
                        <Paragraph>- ChakraUI</Paragraph>
                        <Paragraph>- Styled components</Paragraph>
                        <Paragraph>- Formik/Yup</Paragraph>
                        <Paragraph>- ThreeJS</Paragraph>
                        <Paragraph>- Blender/MagicaVoxel</Paragraph>
                    </BioSection>
                <BioSection>
                    <BioYear>Soft skills:</BioYear>
                    <Paragraph>- eager to learn</Paragraph>
                    <Paragraph>- hard-working</Paragraph>
                    <Paragraph>- responsible</Paragraph>
                    <Paragraph>- curious</Paragraph>
                    </BioSection>

                    
                </Section>
                <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/PastukhovZh" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
            >
                @PastukhovZh
            </Button>
            </Link>
        </ListItem>
        <ListItem>
            <Link href="https://www.linkedin.com/in/yevhen-pastukhov/" target="_blank">
            <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
            >
                @Pastukhov Yevhen
            </Button>
            </Link>
        </ListItem>
                    </List>
                    </Section>
                
        </Container>
    </Layout>
            )
}
export default Page