"use client"

import { ArrowDropDown, QuestionAnswer } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { BusinessContact } from '../utils/utils';

export const Faqs = () => {
  return (
    <>
    <div style={{display: "flex", flexWrap: "wrap", padding: "2em 0", alignItems: "center", justifyContent: "space-between", gap: "2em"}}>
        <div style={{flex: "1 1 20em", display: "grid", justifyContent: "center"}}>
            <Card sx={{maxWidth: { lg: "45vw", sm: "100%"}, boxShadow: "0 1px 1px 1px grey"}}>
                <CardContent style={{textAlign: "center"}}>
                    <QuestionAnswer fontSize='large'/>

                    <Typography>
                        Still have Questions?
                    </Typography>
                </CardContent>
            </Card>

        </div>
       
        <div style={{display: "grid", gap: "1em", flex: "1 1 20em"}}>
        <QuestionAccordion summaryTitle='How do I make an appointment?' onClick={() => {
        }}>
            <Typography variant='caption'>
                For the quickest response, you can make an appointment through our website <a href='#'>here</a>. As an alternative, you can also call to make an appointment at <a>{BusinessContact.PHONE}</a> or send an email to {BusinessContact.EMAIL}. 
            </Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Is a there a consultation charge?'  onClick={() => {
        }}>
            <Typography variant='caption'>Free consultation and estimate! If you&apos;re interested in an estimate, you can either give us a call at <a>{BusinessContact.PHONE}</a> or use our estimate calculator.</Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Is it possible to get something caulked that is not a service?'  onClick={() => {
        }}>
            <Typography variant='caption'>Of course! If there is anything that is not listed in our services, s free to ask.</Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Do your services cover commercial buildings?'  onClick={() => {
        }}>
            <Typography variant='caption'>Yes we do. We offer a special rate for any commericial buildings. Please contact us to discuss.</Typography>
        </QuestionAccordion>
        </div> 

    </div>
    </>
  )
}

interface QuestionAccordionProps extends AccordionProps {
    summaryTitle: string;
}
const QuestionAccordion = (props: QuestionAccordionProps) => {
    return (
        <Accordion style={props.style} onChange={props.onChange} className={props.className} onBlur={props.onBlur}>
            <AccordionSummary aria-controls='faqs-panel' expandIcon={<ArrowDropDown/>}>
                <Typography variant='body2'>{props.summaryTitle}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='caption'>{props.children}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

