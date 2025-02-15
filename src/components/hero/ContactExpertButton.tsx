import { Button, ButtonBaseProps } from '@mui/material';
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image';
import React from 'react'
interface ContactExpertButtonProps extends ButtonBaseProps {
    title: string;
    icons: string[]|StaticImport[]
}
export const ContactExpertButton = (props: ContactExpertButtonProps) => {
    
  return (
    <Button style={{display: "flex", gap: "1em"}} variant='contained'>
        {props.title}
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div>

        {props.icons.map((icon, index) => {
            if (index !== 0) {
                return <Image key={`expert-${index}`} src={icon} width={50} height={50} alt={`expert-${index}`} style={{borderRadius: "100%", boxShadow: "0 1.5px 1.5px 1.5px grey", border: "solid white 5px", marginLeft:"-1.5em"}}/>

            }
            return <Image key={`expert-${index}`} src={icon} width={42} height={42} alt={`expert-${index}`} style={{borderRadius: "100%", boxShadow: "0 1.5px 1.5px 1.5px grey", marginBottom: "0.25em"}}/>
        })}
            </div>


        </div>
    </Button>
  )
}

