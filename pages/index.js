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
import Section from "../components/section"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {  IoLogoGithub,IoLogoLinkedin} from 'react-icons/io5'

const Page = () => {
    return ( 
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mb={6} p={3} align='center' fontFamily='DynaPuff'>
                Hello, I&apos;m a full-stack developer based in Ukraine
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title' >
                        Pastukhov Yevhen
                    </Heading>
                    <Paragraph>Swim coach turned Full-stack developer</Paragraph>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md:0}} ml={{md:6}} align='center'>
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display='inline-block' borderRadius="full" src="/images/DSC_0974.jpg" alt='Profile Image'/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant='section-title'>
                    Work
                </Heading>
                <Paragraph>I am a Front-End developer, looking for a permanent job in a company where I can improve my skills and be able to fulfill myself as a developer. A company that will gladly help a young developer become an experienced specialist. I have knowledge and practice in using HTML, CSS, JavaScript, React and Redux, as well as familiar with the Firebase database. I like to overcome myself and discover something new both in myself and in development. If I don`t know something, I will figure it out, because I have been involved in sports all my life and I understand that in order to get something, you need to make efforts and time.</Paragraph>
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
                <BioSection fontFamily='DynaPuff'>
                    <BioYear>1997</BioYear>
                    Born in Kyiv, Ukraine
                    </BioSection>
                    <BioSection fontFamily='DynaPuff'>
                    <BioYear>2015 - 2020</BioYear>
                    Master of Physical culture and sport in specialization "Olympic sport and education" in NATIONAL UNIVERSITY OF EDUCATION AND SPORTS OF UKRAINE. Ukraine, Kyiv
                    </BioSection>
                    <BioSection fontFamily='DynaPuff'>
                    <BioYear>2015 - 2022</BioYear>
                    Master`s degree. Field of study Social and behavioral studies. Program subject area Economics in NATIONAL TRANSPORT UNIVERSITY. Ukraine, Kyiv
                    </BioSection>
                <BioSection fontFamily='DynaPuff'>
                    <BioYear>2021- 2022</BioYear>
                    Full stack developer in IT SCHOOL GOIT. Ukraine, Kyiv
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