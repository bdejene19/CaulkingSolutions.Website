"use client"

import { ArrowDropDown, QuestionAnswer } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

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
            <Typography variant='caption'>Incididunt in laborum ut eiusmod laboris consectetur. Laborum laborum anim ut id reprehenderit do qui eu excepteur. Minim dolor do ut velit laboris cupidatat id.</Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Is a there a consultation charge?'  onClick={() => {
        }}>
            <Typography variant='caption'>Occaecat cupidatat nostrud aliquip excepteur enim tempor cupidatat consequat incididunt eu ipsum cupidatat id nulla. Ea cupidatat elit commodo in eiusmod ad laboris commodo adipisicing. Duis ullamco anim proident sit cupidatat commodo minim enim elit ipsum minim sit.</Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Is it possible to get something caulked that is not a service?'  onClick={() => {
        }}>
            <Typography variant='caption'>Incididunt in laborum ut eiusmod laboris consectetur. Laborum laborum anim ut id reprehenderit do qui eu excepteur. Minim dolor do ut velit laboris cupidatat id.</Typography>
        </QuestionAccordion>
        <QuestionAccordion summaryTitle='Do your services cover commercial buildings?'  onClick={() => {
        }}>
            <Typography variant='caption'>Elit nisi quis exercitation magna sint occaecat et ullamco labore pariatur magna. Commodo pariatur adipisicing exercitation velit ut. Do elit anim dolor laborum culpa incididunt.</Typography>
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

