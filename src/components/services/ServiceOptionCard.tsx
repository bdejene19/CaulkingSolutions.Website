"use client"
import React, { CSSProperties, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ArrowForward, ArrowOutwardRounded } from '@mui/icons-material';

export interface ServiceOptionProps {
  name: string;
  imgSrc: string | StaticImport;
  description: string;
  href: string;
}

export const ServiceOptionCard = (props: ServiceOptionProps) => {
  const [isOutward, setIsOutward] = useState(false);
  const [outwardStyle, setOutwardStyle] = useState<CSSProperties>();

  const handleMouseOver = () => {
    setIsOutward(true)
    setOutwardStyle({backgroundColor: "skyblue", border: "solid skyblue 3px", textAlign: "center", borderRadius: "100%", boxShadow: "0 1.5px 1.5px lightgrey"})
  }

  const handleMouseExit = () => {
    setIsOutward(false)
    setOutwardStyle({})
  }

  return (
  
    <Card>
      <CardContent 
        style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}
      >
        <Image src={props.imgSrc} width={`20`} height={"20"} alt='Service Option Visual' style={{flex: "1 1 15em", height: "100%", width: "100%"}}/>
        <Typography flex={"1 1 15em"} textAlign={"center"} variant="h5">{props.name}</Typography>
        <Typography flex={"1 1 15em"} textAlign={"center"} variant='body1'>{props.description}</Typography>
        <div style={{flex: "1 1 15em", display:"grid", justifyContent: "end", alignItems: "center"}}>
          <a style={outwardStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseExit} href={props.href}>
            {isOutward ? <ArrowOutwardRounded/> : <ArrowForward/>}
          </a>
        </div>
      </CardContent>
    </Card>

  );
}

export default ServiceOptionCard