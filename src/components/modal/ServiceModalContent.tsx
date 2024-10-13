import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ServiceModalContent = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: { 
              xs: "column", 
              lg: "row"
            },
            height: "100%",
            columnGap: 0
        }}
    >
        <Card style={{backgroundColor: "lightblue"}}>
            <CardMedia  sx={{ height: 140  }} title="Interior Caulking" image='https://www.bobvila.com/wp-content/uploads/2018/12/Caulking_Windows.jpg'/>
          <CardContent>
            <Typography variant="h5">Interior Caulking</Typography>
            <Typography variant="body2">Voluptate quis laborum cupidatat consectetur. Laboris ut aliqua dolor labore velit officia ex officia deserunt sunt deserunt. Do veniam sunt laborum deserunt cupidatat non voluptate ut cillum voluptate ipsum aliquip labore.</Typography>
          </CardContent>
        </Card>
        <Card style={{borderRadius: 0, backgroundColor: "limegreen"}}>
            <CardMedia  sx={{ height: 140 }} title="Exterior Caulking" image='https://www.paintersinc.net/images/blog/04/windows-caulking.jpg'/>
          <CardContent >
            <Typography variant="h5">Exterior Caulking</Typography>
            <Typography variant="body2">Voluptate quis laborum cupidatat consectetur. Laboris ut aliqua dolor labore velit officia ex officia deserunt sunt deserunt. Do veniam sunt laborum deserunt cupidatat non voluptate ut cillum voluptate ipsum aliquip labore.</Typography>
          </CardContent>
        </Card>
        <Card style={{ borderRadius: "0"}}>
            <CardMedia  sx={{ height: 140 }} title="Interior Caulking" image=''/>
          <CardContent>
            <Typography variant="h5">Placeholder</Typography>
            <Typography variant="body2">Voluptate quis laborum cupidatat consectetur. Laboris ut aliqua dolor labore velit officia ex officia deserunt sunt deserunt. Do veniam sunt laborum deserunt cupidatat non voluptate ut cillum voluptate ipsum aliquip labore.</Typography>
          </CardContent>
        </Card>
    </Box>
  )
}

export default ServiceModalContent