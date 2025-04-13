import React, { ReactNode } from 'react'

interface ContactFormInputProps {
  label: string;
  children: ReactNode;
  inputType: string;
  inputName: string
}
const ContactFormInput = (props: ContactFormInputProps) => {
  return (
    <>
      <fieldset style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', border: 'none', gap: '1em'}}>
          <label htmlFor={props.inputName} style={{flex: '1 1 15em', textAlign: 'right'}}>{props.label}:</label>
          <div style={{flex: '1 1 15em', display: 'grid'}}>
            <input type={props.inputType} style={{width: '100%',  padding: '0.5em'}} name={props.inputName}/>
            {props.children}
          </div>
      </fieldset>
    </>

  )
}

export default ContactFormInput