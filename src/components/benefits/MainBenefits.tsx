import { Box, Typography } from '@mui/material'
import React, { CSSProperties } from 'react'
import Benefit from './Benefit'
import { Money, Save, WaterDamage } from '@mui/icons-material'

const benefits = [
    {
        name: "Save on Eneergy",
        description: "Ad laboris voluptate amet in ad exercitation cupidatat ad tempor exercitation. Aliqua sint culpa amet reprehenderit nostrud esse excepteur id veniam exercitation duis velit. Sint aliqua magna reprehenderit amet et eu velit dolore.",
        icon: <Save fontSize={"large"}/>
    },
    {
        name: "Water Damage and Insect Prevention",
        description: "Cillum aliqua laborum culpa quis adipisicing eiusmod ut cillum magna sint mollit aute velit ullamco. Duis et ut excepteur labore cillum amet commodo irure quis Lorem ad sint in fugiat. In consectetur commodo laboris adipisicing eu est sint veniam amet proident laborum. Magna dolore aute consectetur pariatur mollit enim excepteur ut minim voluptate. Duis exercitation proident excepteur cillum minim mollit dolor. Cupidatat magna consequat ullamco qui dolore velit in. Do minim est ipsum aliquip Lorem ex.",
        icon: <WaterDamage fontSize={"large"}/>
    },
    {
        name: "Increased Property Value",
        description: "Labore pariatur consectetur non enim enim Lorem ipsum ullamco commodo aliquip reprehenderit velit sunt consectetur. Ad aliqua deserunt occaecat labore. Dolor dolore Lorem laborum velit nisi fugiat non voluptate sunt aliquip. Anim tempor nostrud incididunt laboris Lorem. Fugiat culpa cupidatat nostrud aliqua ut eu labore commodo sit ea. Dolor mollit do pariatur do dolore nostrud ipsum enim velit id Lorem exercitation cupidatat.",
        icon: <Money fontSize={"large"}/>
    },
]

interface MainBenefitsProps {
    containerStyle?: CSSProperties;

}
export const MainBenefits = (props: MainBenefitsProps) => {
  return (
    <div style={props.containerStyle}>
        <div style={{textAlign: "center", color: "green"}}>
            <Typography variant='h5' fontWeight={700}>Main Benefits</Typography>
            <Typography variant='body1'>Consequat esse est ipsum amet deserunt exercitation dolor adipisicing velit dolore ut do. Cillum elit in commodo exercitation. Amet ut in et incididunt dolore qui deserunt est. Fugiat non ad enim qui eu.</Typography>
        </div>

        <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            {benefits.map(benefit => <Benefit key={benefit.name} title={benefit.name} icon={benefit.icon} description={benefit.description}/>)}
        </Box>
    </div>
  )
}
