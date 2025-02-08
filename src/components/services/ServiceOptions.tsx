"use client"
import { Box, Button, Dialog, DialogContent } from '@mui/material'
import React, { useState } from 'react'
import ServiceOptionCard from './ServiceOptionCard';
import Section from '../Section';
import { AutoAwesome, CalendarMonth, Close, HomeRepairService } from '@mui/icons-material';
import ServiceModalContent from '../modal/ServiceModalContent';
import BenefitsModalContent from '../modal/BenefitsModalContent';

interface ServiceOptionDto {
    name: string;
    icon: React.ReactNode;
}

const title = "Providing Best Services";
const caption = "We are dedicated to lor Enim incididunt ad sunt non ullamco magna qui. Veniam anim non magna fugiat ad magna magna incididunt in qui. Mollit fugiat non ullamco fugiat et sint fugiat fugiat ut eiusmod id. Deserunt fugiat quis qui id labore. Aute consequat laboris deserunt mollit elit nisi ullamco enim est eiusmod deserunt nulla exercitation consectetur. Ut irure qui nostrud ut Lorem culpa deserunt esse nostrud mollit laboris laborum nostrud reprehenderit. Nulla eiusmod esse laboris id ut duis qui."

const providedServices: ServiceOptionDto[] = [
    {
        name: "Exterior Caulking",
        icon: <CalendarMonth style={{fontSize: "5em"}}/>
    },
    {
        name: "Interior Caulking",
        icon: <HomeRepairService style={{fontSize: "5em"}}/>
    },
    {
        name: "Commercial",
        icon: <AutoAwesome style={{fontSize: "5em"}}/>
    },
    {
        name: "Doors and Bathrooms",
        icon: <AutoAwesome style={{fontSize: "5em"}}/>
    }
]
const ServiceOptions = () => {
    const [modal, setModal] = useState({
        isOpen: false,
        contentName: "",
    })

    // useEffect(() => {
    //     let content = <></>;
    //     if (modal.contentName == "Book Appointment") {

    //     } else if (modal.contentName == "Services") {
    //         content = <ServiceModalContent/>
    //     } else if (modal.contentName == "Benefits") {
    //         content = <BenefitsModalContent/>
    //     } 

    //     setModal({...modal, content: content})
            
    // }, [modal])
    // const handleOptionClick = (e) => {}

  return (
    <Section title={title} titleCaption={caption} titleStyle={{display: "flex", columnGap: "2em", justifyContent: "space-between"}}>
        <Box 
            display="grid" 
            justifyContent={"center"} 
            alignItems={{xs: "center", md: "normal"}}
            flexDirection={{ xs: "column", md: "row"}} 
            gap={"5em"}
        >
            {providedServices.map(service => 
                <ServiceOptionCard
                    key={service.name}
                    name={service.name}
                    description='Occaecat adipisicing sint ipsum Lorem duis nisi aliqua. Culpa adipisicing fugiat tempor ex pariatur nisi ullamco proident in. Sunt exercitation exercitation sit tempor nulla elit dolor. Quis quis proident nulla excepteur aute duis duis anim tempor minim do.'
                    href='#'
                    imgSrc={""}
                />)}
        </Box>
        <Dialog open={modal.isOpen} scroll='body' maxWidth={"md"} onClose={(e, reason) => {
            if (reason == "backdropClick" || reason == "escapeKeyDown") {
                setModal({ contentName: "", isOpen: false })
            }
        }} >
            <DialogContent style={{overflowY: "scroll"}} sx={{width: "65vw", height: "70vh", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                {modal.contentName == "Book Appointment" ? null : null}
                {modal.contentName == "Services" ? <ServiceModalContent/> : null}
                {modal.contentName == "Benefits" ? <BenefitsModalContent/> : null}
                <Button onClick={() => setModal({ contentName: "", isOpen: false })}><Close/>Close</Button>
            </DialogContent>
        </Dialog>
    </Section>
  )
}

export default ServiceOptions