import { Typography } from '@mui/material';
import React, { CSSProperties } from 'react'

interface SectionProps {
    title: string;
    children: React.ReactNode;
    titleStyle?: CSSProperties;
    titleCaption?: string;
    icon?: React.ReactNode;

}
const Section = (props: SectionProps) => {
  return (
    <section id={props.title} >
        <article style={props.titleStyle}>
            <Typography variant='h2' flex={"1 1 5em"}>{props.icon ?? null}{props.title}</Typography>
            {props.titleCaption ? <Typography variant='body1' flex={"1 1 5em"}>{props.titleCaption}</Typography> : null}
        </article>
        {props.children}
    </section>
  )
}

export default Section