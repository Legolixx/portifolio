/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
 Html,
 Body,
 Head,
 Heading,
 Hr,
 Container,
 Preview,
 Section,
 Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
 message: string
 senderEmail: string
 name: string
}

export default function ContactFormEmail({ message, senderEmail, name }: ContactFormEmailProps) {
 return <Html>
  <Head />
  <Preview>New message from your portifolio site</Preview>
  <Tailwind>
   <Body className='bg-gray-100'>
    <Container>
     <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
      <Heading className='leading-tight'>{name}</Heading>
      <Text>{message}</Text>
      <Hr />
      <Text>The sender's email is : {senderEmail}</Text>
     </Section>
    </Container>
   </Body>
  </Tailwind>
 </Html>
}