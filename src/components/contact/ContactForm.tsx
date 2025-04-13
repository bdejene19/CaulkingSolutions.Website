import { Button, Typography } from '@mui/material'
import React, { useActionState } from 'react'

import { submitContactForm } from './submitContactForm'
import ValidationErrorMsg from './ValidationErrorMsg'
import ContactFormInput from './ContactFormInput'

export const ContactForm = () => {
    const [formState, formAction] = useActionState(submitContactForm, {
        errors: {

        },
        success: false
    })

  return (
    <div>
        <Typography variant='h5'>Schedule an Appointment</Typography>

        <form action={formAction} style={{display: 'grid', gap: '1em'}}>
            <ContactFormInput inputName='name' inputType='text' label='Name'>
                {formState.errors.name ? <ValidationErrorMsg msg={`${formState.errors.name}`}/> : null}
            </ContactFormInput>
            <ContactFormInput inputName='email' inputType='text' label='Email'>
                {formState.errors.name ? <ValidationErrorMsg msg={`${formState.errors.email}`}/> : null}
            </ContactFormInput>
            <ContactFormInput inputName='phone' inputType='text' label='Phone'>
                {formState.errors.name ? <ValidationErrorMsg msg={`${formState.errors.phone}`}/> : null}
            </ContactFormInput>
            <ContactFormInput inputName='description' inputType='textarea' label='Description'>
                {formState.errors.name ? <ValidationErrorMsg msg={`${formState.errors.description}`}/> : null}
            </ContactFormInput>
            <div style={{ display: 'grid', justifyContent: 'flex-end'}}>
                <Button variant='contained' type='submit'>Submit</Button>
            </div>
        </form>
        {formState.success &&
        <>
            <p style={{ color: 'green' }}>Form submitted successfully!</p>
            <p>We&apos;ll be in contact shortly.</p>
        </>}
    </div>

  )
}

