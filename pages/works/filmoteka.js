import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import  P  from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title='filmoteka'>
            <Container>
                <Title>
                    Filmoteka <Badge>2022</Badge>
                </Title>
                <P>
                    A website with a responsive layout. Role: Authorization through Firebase. Connected Firebase to our project. Firebase checks for a valid email and password. It also shows corresponding error, warning the user.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://dzaporozhan.github.io/Filmoteka/">Filmoteka <ExternalLinkIcon mx='2px'/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, SASS/SCSS, JS, REST API, NodeJS, Parcell, Firebase</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/Filmoteka.png' />
                <WorkImage src='/images/works/Filmoteka1.png'/>
                <WorkImage src='/images/works/Filmoteka2.png'/>
                <WorkImage src='/images/works/Filmoteka3.png'/>
            </Container>
        </Layout>
    )

}

export default Work;