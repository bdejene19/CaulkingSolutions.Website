import { EmojiEventsOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ContactExpertButton } from './ContactExpertButton'
import bg from "../../../public/background.png"


const Hero = () => {
  return (
    <Box sx={{ height: "90vh", width: "100%"}}>
        <div style={{display: "grid", textAlign: "center"}}>
            <Typography variant="h4">We Seal Your Future</Typography>
            <Typography variant="h4">To Build Long Lasting Properties</Typography>
            <Typography variant="h4">Commited to High Quality with Affordable Pricing</Typography>
        </div>
        <Box
            sx={{display: "flex", gap: "1em", flexWrap: "wrap", padding: "3em 0", alignItems: "center", justifyContent: "space-between"}}
        > 
            <div>
                <ContactExpertButton title='Contact Our Experts' icons={[bg.src,bg.src]}/>
            </div>
            <div style={{display: "flex", gap: "1em", alignItems: "center"}}>
                <Card sx={{borderRadius: "5px", height: "35vh", overflow: "hidden", minWidth: "25vw", maxWidth: {sm: "90vw", md: "25vw"}, minHeight: "30vh", background: "https://www.constructionext.com/roofing-exteriors-residential-products/caulking-tips-to-level-up-your-game"}}>
                    <CardContent sx={{display: "grid", height: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Image src={"https://fastly.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0"} width={300} height={200} style={{ borderRadius: "5px"}} alt='Moe on Building'/>
                    </CardContent>
                </Card>
                <Card sx={{borderRadius: "5px", height: "40vh", overflow: "hidden", minWidth: "25vw", maxWidth: {sm: "90vw", md: "25vw"}, minHeight: "30vh", backgroundImage: "https://freemontbuilding.com/wp-content/uploads/2023/04/skyscraper-3196390_1920-1.jpg"}}>
                    <CardContent sx={{display: "grid", height: "100%", alignItems: "center", justifyContent: "center"}}>
                        <Typography variant='h6'>Save Energy, Stay Modern, and <span style={{color: "lightgreen"}}>Lower your Bills</span></Typography>
                    </CardContent>
                </Card>
            </div>
            
            <div style={{ textAlign: "center"}}>
                <EmojiEventsOutlined fontSize='large' color='primary' style={{border: "solid black 3px", borderRadius: "100%", padding: "0.25em", height: "10vh", width: "7vw"}}/>
                <Typography variant='body1'>First class in our Industry</Typography>
            </div>
        </Box>

        <div style={{textAlign: "center"}}>
            <Typography variant='body1'>Consultion is Free</Typography>
            <Button variant='contained'>Contact Us</Button>
        </div>
    </Box>
  )
}

export default Hero