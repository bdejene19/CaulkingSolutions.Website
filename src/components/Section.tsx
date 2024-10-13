import { Typography } from '@mui/material';
import React from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;

}
const Section = (props: SectionProps) => {
  return (
    <section id={props.title} >
        <article style={{display: "flex", flexDirection: "column", rowGap: "1.5em"}}>
            <Typography variant='h2'>{props.icon ?? null}{props.title}</Typography>
            {props.children}
        </article>
    </section>
  )
}

export default Section