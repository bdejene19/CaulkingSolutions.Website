import { ArrowBack } from '@mui/icons-material'
import { Card, Typography } from '@mui/material'
import React, { CSSProperties } from 'react'

interface BenefitProps {
    icon: JSX.Element;
    title: string;
    description: string;
    style?: CSSProperties
    
}
export const Benefit = (props: BenefitProps) => {
  return (
    <Card  style={{...props.style}} sx={{height: "100%", overflowY: "scroll", minHeight: "45vh", maxWidth: { xs: "95vw", md: "30vw"}, maxHeight: "45vh", flex: "1 1 10em", padding: "3em 1em"}}>
        <div>
            {props.icon}
            <Typography variant='body1' fontWeight={600}>{props.title}</Typography>
        </div>
        <hr></hr>
        <Typography variant='body2'>{props.description}</Typography>
    </Card>
  )
}

export default Benefit