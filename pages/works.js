import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbInkdrop from'../public/images/works/Contact-app.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (<Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid colums={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id='inkdrop' title='Phonebook' thumbnail={thumbInkdrop}>
                        Create own Phonebook
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works