import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
 import * as Yup from 'yup';
import { ParagraphError } from "../components/paragraph";
import Section from "../components/section";
import writeUserData from "./db/firebaseForm";

const rePhoneNumber = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(rePhoneNumber, 'Phone number is not valid, example +380123456789')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default function FormToContact() {
  
  return (
    <Section>
      
    <Formik
      initialValues={{
        name: '',
        number: '',
        email: '',
        textarea:''
        }}
        validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((res) => setTimeout(res, 500)).then(writeUserData(values)).then(values.name='', values.number='',values.email='', values.textarea='');
        //   alert(JSON.stringify(values, null, 2));
        //   writeUserData(values);
        }}
        
      >
        {({ errors, touched }) => (
          <Form >
            <FormControl fontFamily='DynaPuff' >
              <FormLabel htmlFor="name" mt={2}>Name</FormLabel>
              <Field as={Input} id="name" name="name" placeholder="Yevhen" />
              {errors.name && touched.name ? (
             <ParagraphError>{errors.name}</ParagraphError>
           ) : null}
              <FormLabel htmlFor="number" mt={2}>Number</FormLabel>
              <Field as={Input} id="number" name="number" placeholder="+3801234567" />
                {errors.number && touched.number ? (
             <ParagraphError>{errors.number}</ParagraphError>
           ) : null}
              <FormLabel htmlFor="email" mt={2}>Email</FormLabel>
              <Field as={Input}
                id="email"
                name="email"
                placeholder="example@mail.com"
                type="email"
              />
              {errors.email && touched.email ? <ParagraphError>{errors.email}</ParagraphError> : null}
              <FormLabel htmlFor="textarea" mt={2}>You can write me:</FormLabel>
              <Field as={Textarea}
              resize= 'none'
              id="textarea"
              name="textarea"
              placeholder="Write here"
              type="textarea"
              />
              <Button mt={3} align='center' type="submit" colorScheme='teal'>Submit</Button>
            </FormControl>
          </Form>)}
    </Formik>
  </Section>

  )
}