import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import  P  from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title='Phonebook'>
            <Container>
                <Title>
                    Phonebook <Badge>2022</Badge>
                </Title>
                <P>
                    My application is written in React using the Redux library. Used public API for registration and authorization. This makes it possible to add contacts to individual users. Used the Chakra-UI library to style my application.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://pastukhovzh.github.io/goit-react-hw-08-phonebook/">Phonebook <ExternalLinkIcon mx='2px'/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React, Redux, ChakraUI, JS, REST
API</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/Contact-app.png' />
                <WorkImage src='/images/works/Contact-app1.png' />
                <WorkImage src='/images/works/Contact-app2.png' />
                <WorkImage src='/images/works/Contact-app3.png' />
            </Container>
        </Layout>
    )

}

export default Work;