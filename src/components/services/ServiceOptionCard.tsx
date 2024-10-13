import React, { MouseEvent } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export interface ServiceOptionProps {
  name: string;
  icon: React.ReactNode;
  // description: string;
  // img?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ServiceOptionCard = (props: ServiceOptionProps) => {
  const handleMouseHover = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.cssText = `
      transform: translate(1.5vw, -3vh);
      transition: 0.5s ease-in-out
    `
  }

  const resetCardPosition = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.cssText = `
      transform: translate(0, 0);
      transition: 0.5s ease-in-out
    `
  }
  return (
    <CardActionArea 
        onClick={props.onClick} 
        sx={{ maxWidth: 345, maxHeight: "50vh" }} 
        onMouseOver={handleMouseHover}
        onMouseLeave={resetCardPosition}      
    >
    <Card>

      <CardContent  
        sx={{ 
          maxWidth: 345, 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center", 
          maxHeight: "50vh", 
          minHeight: "50vh", 
          rowGap: "3em",
        }}
      >
        <Typography variant="h4">{props.name}</Typography>
        {props.icon}
      </CardContent>
      
        {/* <CardMedia
          component="img"
          height="140"
          image={props.img }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent> */}
    </Card>
    </CardActionArea>

  );
}

export default ServiceOptionCard