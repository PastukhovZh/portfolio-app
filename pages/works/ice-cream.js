import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import  P  from "../../components/paragraph"
import Layout from "../../components/layouts/article"

const Work = () => {
    return (
        <Layout title='Ice-cream'>
            <Container>
                <Title>
                    Ice-cream <Badge>2022</Badge>
                </Title>
                <P>
                    A website with a responsive layout. Role: Create header Build header, and made it adaptive for various devices, and easy to use. When scrolling down, it disappears, and when scrolling up, it appears.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://dzaporozhan.github.io/The-Ice-Cream-Project/">The Ice Cream Project <ExternalLinkIcon mx='2px'/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, SASS/SCSS, JS, NodeJS, Parcel, JavaScript</span>
                    </ListItem>
                </List>
                <WorkImage src='/images/works/Ice-cream.png' />
                <WorkImage src='/images/works/Ice-cream1.png' />
                <WorkImage src='/images/works/Ice-cream2.png' />
                <WorkImage src='/images/works/Ice-cream3.png'/>
            </Container>
        </Layout>
    )

}

export default Work;