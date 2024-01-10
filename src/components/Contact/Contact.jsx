import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



const Contact = () => {
  
  // AOS.init({ duration: 2000 });
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (

    <Container sx={{ height: "auto", color:"white", minHeight: '70vh' }}>
      <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"column-reverse", md:"row", lg:"row", xl:"row"},alignItems:{xs:"center",sm:"center", md:"stretch", lg:"stretch", xl:"stretch"}}}>
      <Box  sx={{
        display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem", border: "1px solid transparent", borderRadius: "10px",m:"1rem", width:{xs:"100%",sm:"100%",md:"60%",lg:"60%"}
      }}>
      <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=gulshan%201,%20progress%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
      </Box>
      <Box
       sx={{
        display: "flex", flexDirection: "column", alignItems: "center", marginTop: "3rem", border: "1px solid white", borderRadius: "10px",m:"1rem"
      }}
      >
        <Typography

         sx={{ fontSize: "2rem", fontWeight: "bolder", border: "1px solid white", borderRadius: "10px", backgroundColor: "", padding: "1rem", marginTop: ".5rem", }}
          >Contact Us</Typography>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem",  }} >Address</Typography>
        <Typography sx={{ textAlign:"center"  }} > Progress Tower(4th floor) House #01, Road #23, Gulshan 1, Dhaka 1212</Typography>

        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem",  }} >Email</Typography>
        <Typography sx={{ }} >info@techanalyticaltd.com</Typography>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", marginTop: "1rem",  }} >Contact</Typography>
        <Typography sx={{ }} >+880248811161</Typography>
        <Typography sx={{  }} >+880248811162</Typography>




      </Box>
      
      </Box>
    </Container>
  )
}

export default Contact
