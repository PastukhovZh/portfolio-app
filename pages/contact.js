import Layout from "../components/layouts/article";
import {  Container, Heading } from "@chakra-ui/react";
import FormToContact from "../components/formContact";
import Section from "../components/section";


const Contact = () => (
    <Layout title ='Contact'>
    <Container>
      <Section>
            <Heading as='h4' fontSize={20} mb={4}>
                You can leave your contact details and I will contact you shortly!
            </Heading>
        <FormToContact />
        </Section>
</Container>
    </Layout>
)

export default Contact