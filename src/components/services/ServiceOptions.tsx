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

const providedServices: ServiceOptionDto[] = [
    {
        name: "Book Appointment",
        icon: <CalendarMonth style={{fontSize: "5em"}}/>
    },
    {
        name: "Services",
        icon: <HomeRepairService style={{fontSize: "5em"}}/>
    },
    {
        name: "Benefits",
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
    <Section title={"Services"}>
        <Box 
            display="flex" 
            justifyContent={"center"} 
            alignItems={{xs: "center", md: "normal"}}
            flexDirection={{ xs: "column", md: "row"}} 
            gap={"5em"}
        >
            {providedServices.map(service => 
                <ServiceOptionCard
                    key={service.name}
                    name={service.name}
                    icon={service.icon}
                    onClick={() => setModal({...modal, contentName: service.name, isOpen: true})}
                />)}
        </Box>
        <Dialog open={modal.isOpen} maxWidth={"md"} onClose={(e, reason) => {
            if (reason == "backdropClick" || reason == "escapeKeyDown") {
                setModal({ contentName: "", isOpen: false })
            }
        }}>
            <DialogContent sx={{width: "65vw", height: "70vh", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
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