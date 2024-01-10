import React from 'react'
import services from "../../data/services.json"
import axios from 'axios';
import Card from '../Cards/Card'
import { Box, Grid, Typography } from '@mui/material';
import "./Service.css"
const Services = () => {
    
    return (
        <Box sx={{ margin: "3rem" ,color:"white",minHeight:"60vh"}}>

            <Typography sx={{ margin: "2rem", fontSize: "3rem", textAlign: 'center' }}>Services</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map((service) => {
                        return (
                            <>
                                <Grid xs={2} sm={4} md={4}>
                                    <Box 
                                        data-cursor-img={service.image}
                                        >
                                        <Card
                                            id={service.id}
                                            icon={service.icon}
                                            title={service.Title}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    </Box>
                                </Grid>
                            </>)
                    })
                }
            </Grid>
        </Box>
    )
}

export default Services
