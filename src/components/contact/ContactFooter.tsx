"use client"
import {  Facebook, Instagram, Mail, Phone } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { ContactForm } from './ContactForm';

interface ContactInfo {
    name: string;
    phone: string;
    email?: string;
    facebook?: string;
    instagram?: string;
}

const contact: ContactInfo = {
  name: "Caulking Solutions",
  phone: "+1-519-710-6951",
  email: "testEmail@gmail.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com"
}
const ContactFooter = () => {

  return (
    <div>
      <ContactForm/>
      <Typography variant="h2" id="contact">Contact Us</Typography>
      <ul style={{listStyleType: "none"}}>
        <Box display={"flex"} flexWrap={"wrap"} columnGap={"2em"} alignItems={"center"} justifyContent={"center"}>
          {Object.keys(contact).map((key) => {
            return (
              <div key={key}>
                <Box key={key} rowGap={"20em"}>
                  <li>
                    {key == "phone" ? <ContactItem href={`tel:${contact[key]}`} icon={<Phone/>} text={contact[key]}/> : null}
                    {key == "email" ? <ContactItem href={`mailto:${contact[key]}`} icon={<Mail/>} text={contact[key] ?? "No email provided for contact"}/> : null}
                    {key == "facebook" || key =="instagram" ? <ContactItem href={`mailto:${contact[key]}`} icon={key == "facebook" ? <Facebook/> : <Instagram/>} text={contact[key] ?? `No ${key} contact information provided`}/> : null}
                  </li>
                </Box>
              </div>
            )
          })}
      </Box>

      </ul>
    </div>

  )
}

interface ContactItemProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}
const ContactItem = (props: ContactItemProps) => {
  return (
    <Button href={props.href}>
      <Box sx={{ display: { xs: 'none', lg: 'block'}}}>
        <Typography variant='caption'>{props.text}</Typography>
      </Box>
      <Box sx={{ display: { xs: 'block', lg: 'none'}}}>
        {props.icon}
      </Box>
    </Button>
  )
}
export default ContactFooter