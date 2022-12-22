import { Button, Container, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
 import * as Yup from 'yup';
import Fonts from "../components/fonts";

import Layout from "../components/layouts/article";
import { ParagraphError } from "../components/paragraph";
import Section from "../components/section";

const rePhoneNumber = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(rePhoneNumber, 'Phone number is not valid, example +380123456789')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

function FormToContact() {
  
  return (
    <Section>
      
    <Formik
      initialValues={{
        name: '',
        number: '',
        email: '',
        }}
        validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500));
        alert(JSON.stringify(values, null, 2));
        }}
        
      >
        {({ errors, touched }) => (
          <Form >
            <FormControl fontFamily='DynaPuff'>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Field as={Input} id="name" name="name" placeholder="Yevhen" />
              {errors.name && touched.name ? (
             <ParagraphError>{errors.name}</ParagraphError>
           ) : null}
              <FormLabel htmlFor="number">Number</FormLabel>
              <Field as={Input} id="number" name="number" placeholder="+3801234567" />
                {errors.number && touched.number ? (
             <ParagraphError>{errors.number}</ParagraphError>
           ) : null}
              <FormLabel htmlFor="email">Email</FormLabel>
              <Field as={Input}
                id="email"
                name="email"
                placeholder="example@mail.com"
                type="email"
              />
              {errors.email && touched.email ? <ParagraphError>{errors.email}</ParagraphError> : null}
              <Button mt={3} align='center' type="submit">Submit</Button>
            </FormControl>
          </Form>)}
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