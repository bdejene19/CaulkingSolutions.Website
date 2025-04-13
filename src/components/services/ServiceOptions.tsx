"use client"
import { Box } from '@mui/material'
import React from 'react'
import ServiceOptionCard from './ServiceOptionCard';
import Section from '../Section';
import { AutoAwesome, CalendarMonth, HomeRepairService } from '@mui/icons-material';

interface ServiceOptionDto {
    name: string;
    icon: React.ReactNode;
    bgImg: string;
    description?: string;
}

const title = "Providing Best Services";
const caption = "We are dedicated to lor Enim incididunt ad sunt non ullamco magna qui. Veniam anim non magna fugiat ad magna magna incididunt in qui. Mollit fugiat non ullamco fugiat et sint fugiat fugiat ut eiusmod id. Deserunt fugiat quis qui id labore. Aute consequat laboris deserunt mollit elit nisi ullamco enim est eiusmod deserunt nulla exercitation consectetur. Ut irure qui nostrud ut Lorem culpa deserunt esse nostrud mollit laboris laborum nostrud reprehenderit. Nulla eiusmod esse laboris id ut duis qui."

const providedServices: ServiceOptionDto[] = [
    {
        name: "Exterior Caulking",
        icon: <CalendarMonth style={{fontSize: "5em"}}/>,
        bgImg: 'https://windowdepottylertx.com/wp-content/uploads/2023/12/caulking-window-exterior-Large-1030x686.jpeg'
    },
    {
        name: "Interior Caulking",
        icon: <HomeRepairService style={{fontSize: "5em"}}/>,
        bgImg: ""
        // bgImg: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/caulk_18230501.jpg?itok=10YtRDNb'

    },
    {
        name: "Commercial",
        icon: <AutoAwesome style={{fontSize: "5em"}}/>,
        bgImg: ''
    },
    {
        name: "Doors and Bathrooms",
        icon: <AutoAwesome style={{fontSize: "5em"}}/>,
        bgImg: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/types-of-caulks-and-sealants-for-your-projects-section-2.jpg'
    }
]
const ServiceOptions = () => {
  return (
    <Section title={title} titleCaption={caption} titleStyle={{display: "flex", flexWrap: "wrap",columnGap: "2em", justifyContent: "space-between"}}>
        <Box 
            display="grid" 
            gap={"3em"}
        >
            {providedServices.map(service => 
                <ServiceOptionCard
                    key={service.name}
                    name={service.name}
                    description='Occaecat adipisicing sint ipsum Lorem duis nisi aliqua. Culpa adipisicing fugiat tempor ex pariatur nisi ullamco proident in. Sunt exercitation exercitation sit tempor nulla elit dolor. Quis quis proident nulla excepteur aute duis duis anim tempor minim do.'
                    href='#'
                    imgSrc={service.bgImg}
                />)}
        </Box>
    </Section>
  )
}

export default ServiceOptions