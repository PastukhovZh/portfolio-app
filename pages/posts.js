import { Container, GridItem, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";



// Тут должны быть посты об айтишке, но постов нтеу, нужно что-то сюда добавить.


const Posts = () => (
    <Layout title ='Posts'>
        <Container>
            <Heading as='h4' fontSize={20} mb={4}>
                Something need to write here
            </Heading>
</Container>
    </Layout>
)

export default Posts