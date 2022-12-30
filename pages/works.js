import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbPhonebook from '../public/images/works/Contact-app.png'
import thumbWebStudio from '../public/images/works/WebStudio.png'
import thumbIcecream from '../public/images/works/Ice-cream.png'
import thumbFilmoteka from '../public/images/works/Filmoteka.png'

import Layout from "../components/layouts/article";

const Works = () => {
    return (<Layout>
        <Container >
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid display='flex'  gap={6} fontFamily='DynaPuff' >
                <Section >
                    <WorkGridItem  id='phonebook' title='Phonebook' thumbnail={thumbPhonebook} >
                        Create own Phonebook
                    </WorkGridItem>
                    <WorkGridItem id='webstudio' title='WebStudio' thumbnail={thumbWebStudio}>
                        Full adaptive site
                    </WorkGridItem>
                    <WorkGridItem id='ice-cream' title='Ice-cream' thumbnail={thumbIcecream}>
                        Tasty project
                    </WorkGridItem>

                    <WorkGridItem id='filmoteka' title='Filmoteka' thumbnail={thumbFilmoteka}>
                        Filmoteka
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works