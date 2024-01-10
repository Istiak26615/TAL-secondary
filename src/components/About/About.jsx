import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Container sx={{display:"flex", flexDirection:{xs:"column", sm:"column", md:"row", color:"white",minHeight: '70vh'}}}>
    <Box sx={{m:5}}>
      <Typography sx={{fontSize:"3rem", textAlign:"center"}}>About Us</Typography>
      <Typography sx={{fontSize:"1.1rem", textAlign:"justify"}}>Tech Analytica Limited is one of the most promising IT
                  Services providers in Bangladesh dedicated to delivering complete IT solutions to its clients, whether
                  they are start-up operations or large corporations. Our receptive approach makes us understand the
                  stipulation in business and gives us the work force in meeting the necessity to accomplishing the
                  goal.</Typography>
      <Typography sx={{fontSize:"1.1rem"}}>In addition to having our head office in Bangladesh, we
                  also have our sales office in Canada and ascending toward becoming a paramount business house both
                  locally and internationally. Reliability is our trademark and business relationship are our strength.
                  The company’s high level of productivity and performance is supported by a group of motivated staff
                  and demand structured hardware setup.</Typography>
      <Typography sx={{fontSize:"1.1rem"}}>To Tech Analytica Limited, sky is not the limit, thus we
                  continually welcome new opportunities to fulfil the increasing demand in the IT industry worldwide.</Typography>
    </Box>
    <Box sx={{m:5}}>
      <Typography sx={{fontSize:"3rem", textAlign:"center"}}>Our Vision</Typography>
      <Typography sx={{fontSize:"1.1rem", textAlign:"justify"}}>To be an organization that continually delights the
                  customers and all stakeholders by providing the most advantageous IT services and solutions with a
                  constant eye on innovation and by such becoming the optimum choice to the customers and clients
                  locally as well as internationally.</Typography>
      
    </Box>
    </Container>
  )
}

export default About
