import React, { useEffect, useRef } from 'react'
import Banner from '../components/Banner/Banner'
import Solutions from '../components/Solutions/Solutions'
import Services from '../components/Services/Services'
import { Container } from '@mui/material'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div>
      <Container>
        <Banner />
        <Solutions />
        <Services />
      </Container>
    </div>
  )
}

export default Home
