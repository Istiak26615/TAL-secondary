import React from 'react';
import { Box, Typography } from '@mui/material';
import Lottie from "lottie-react";
import talanim from '../../assets/img/tal-anim.json';


const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection:{xs:"column", sm:"column", md:"row"},
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'auto',
        backgroundColor: 'transparent',
        mt:"1rem"
      }}
    >
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        {/* <img
          src={video}
          alt="banner"
          style={{ maxWidth: '100%', height: 'auto' }}
        /> */}
        {/* <ReactPlayer url={video} playing={true} loop={true} controls={false}/>         */}
        <Lottie
              animationData={talanim}
              style={{
                width: "100%",
              }}
            />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" sx={{ mb: 2, color:"white", textAlign:"center" }}>
          Tech Analytica Limited
        </Typography>
        <Typography variant="body1" sx={{color:"white", textAlign:"center"}}>
          Technology That Makes Life Better
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
