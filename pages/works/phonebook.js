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
                        <Link href="">Cсылка на Phonebook <ExternalLinkIcon mx='2px'/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, React, Redux, ChakraUI</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/Contact-app.png'/>
            </Container>
        </Layout>
    )

}

export default Work;