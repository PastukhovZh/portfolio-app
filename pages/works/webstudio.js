import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import  P  from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title='WebStudio'>
            <Container>
                <Title>
                    WebStudio <Badge>2021</Badge>
                </Title>
                <P>
                    Fully responsive website for mobile devices, tablets and desktops. The code is written in pure JS and SASS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://pastukhovzh.github.io/goit-react-hw-08-phonebook/">WebStudio <ExternalLinkIcon mx='2px'/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JS, HTML, SASS/SCSS</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/WebStudio.png' />
                <WorkImage src='/images/works/WebStudio1.png' />
                <WorkImage src='/images/works/WebStudio2.png'/>
                <WorkImage src='/images/works/WebStudio3.png' />
                <WorkImage src='/images/works/WebStudio4.png'/>
            </Container>
        </Layout>
    )

}

export default Work;