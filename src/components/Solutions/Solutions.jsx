import React from 'react'
import solutions from "../../data/solutions.json"
import Card from '../Cards/Card'
import { Box, Grid, Typography } from '@mui/material'


const Solutions = () => {
    return (
        <Box sx={{ margin: "3rem", color:"white", minHeight:"60vh" }}>
            <Typography sx={{ margin: "2rem", fontSize: "3rem", textAlign: 'center' }}>Solutions</Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    solutions.map((solution) => {
                        return (
                            <>
                                <Grid xs={2} sm={4} md={4}>
                                    <div 
                                        data-cursor-img={solution.image}
                                        >
                                      
                                        <Card
                                        id={solution.id}
                                            icon={solution.icon}
                                            title={solution.Title}
                                            description={solution.description}
                                            image={solution.image}
                                        />
                                    </div>
                                </Grid>
                            </>)
                    })
                }
            </Grid>

        </Box>
    )
}

export default Solutions
