import { Button, Container, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Layout from "../components/layouts/article";
import Section from "../components/section";




function FormToContact() {

  return (
  <Section>
    <Formik
      initialValues={{
        firstName: '',
        number: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
        <Form>
          <FormControl>
        <FormLabel htmlFor="firstName">Name</FormLabel>
        <Field class='chakra-input css-1f1trk8' id="firstName" name="firstName" placeholder="Yevhen" />

        <FormLabel htmlFor="number">Number</FormLabel>
        <Field class='chakra-input css-1f1trk8' id="number" name="number" placeholder="+3801234567" />

        <FormLabel htmlFor="email">Email</FormLabel>
        <Field
class='chakra-input css-1f1trk8'           id="email"
          name="email"
          placeholder="example@mail.com"
          type="email"
        />
        <Button mt={3} align='center' type="submit">Submit</Button>
      </FormControl>
        </Form>
    </Formik>
  </Section>

  )
}
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