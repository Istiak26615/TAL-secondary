import { Box,Link, Typography } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'

const Card = (props) => {
  let id=props.id
  let icon = props.icon
  let title = props.title
  let description = props.description
  let image = props.image
  // console.log("title", title)

  return (
    <>
      <Link href={`/details/${id}`} state={{ title: title, description:description, image: image }} style={{
        textDecoration: "none", color: "white"
      }}>
        <Box 
          data-cursor-img={image}
          >
          <Box sx={{
            my: "3rem", display: 'flex', flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center',
            height: '10vh',
            textDecoration: "none"
          }}>
            {/* <img src={image} alt=''/> */}
            <Box sx={{ fontSize: "3rem" }}><i class={icon}></i></Box>

            <Typography sx={{ m: "1rem" }}>{title}</Typography>
          </Box>
        </Box>
      </Link>
    </>
  )
}

export default Card
