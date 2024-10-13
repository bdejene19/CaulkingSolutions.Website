import {  Facebook, Instagram, Mail, Phone } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import React from 'react'

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
const ContactFooter = async () => {

  return (
    <div>
      <Typography variant="h2" id="contact">Contact Us</Typography>
      <ul style={{listStyleType: "none"}}>
        <Box display={"flex"} columnGap={"2em"} alignItems={"center"} justifyContent={"center"}>
          {Object.keys(contact).map((key) => {
            return (
              <div key={key}>
                <Box key={key} rowGap={"20em"}>
                  <li>
                    {key == "phone" ? <Button href={`tel:${contact[key]}`}><Phone/> </Button> : null}
                    {key == "email" ? <Button href={`mailto:${contact[key]}`}><Mail/></Button> : null}
                    {key == "facebook" || key =="instagram" ? <Button href={contact[key]}> {key == "facebook" ? <Facebook/> : <Instagram/>} </Button> : null}
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

export default ContactFooter