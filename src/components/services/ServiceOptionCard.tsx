import React, { MouseEvent } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

export interface ServiceOptionProps {
  name: string;
  imgSrc: string | StaticImport;
  description: string;
  href: string;
}

export const ServiceOptionCard = (props: ServiceOptionProps) => {
  const handleMouseOver = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log(e)
  }

  const handleMouseExit = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log(e)
  }

  return (
    <CardActionArea 
    >
    <Card>
      <CardContent 
        sx={{ 
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between"
        }} 
      >
        <Image src={props.imgSrc} alt='Service Option Visual' style={{flex: "1 1 5em"}}/>
        <Typography flex={"1 1 5em"} variant="h4">{props.name}</Typography>
        <Typography flex={"1 1 5em"} variant='body1'>{props.description}</Typography>
        <div style={{flex: "1 1 5em", display:"grid",justifyContent: "end", alignItems: "center"}}>
          <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseExit} href={props.href}>
            <ArrowForward/>
          </Button>
        </div>
      </CardContent>
      
        {/* <CardMedia
          component="img"
          height="140"
          image={props.img }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom flex={"1 1 5em"} variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography flex={"1 1 5em"} variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent> */}
    </Card>
    </CardActionArea>

  );
}

export default ServiceOptionCard